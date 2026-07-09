"use client";
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

interface User {
  id: string;
  fullName: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => string | null;
  signup: (data: { fullName: string; email: string; password: string }) => string | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => null,
  signup: () => null,
  logout: () => {},
});

const STORAGE_KEY = "sella_auth_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {}
  }, []);

  const isLoggedIn = !!user;

  const login = useCallback((email: string, _password: string) => {
    if (!email.includes("@")) return "Enter a valid email";
    const existing = localStorage.getItem(STORAGE_KEY);
    let u: User;
    if (existing) {
      u = JSON.parse(existing);
    } else {
      u = {
        id: crypto.randomUUID?.() ?? Date.now().toString(36),
        fullName: email.split("@")[0],
        username: email.split("@")[0],
        email,
        password: _password,
        createdAt: new Date().toISOString(),
      };
    }
    u.email = email;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
    return null;
  }, []);

  const signup = useCallback((data: { fullName: string; email: string; password: string }) => {
    if (!data.email.includes("@")) return "Enter a valid email";
    const u: User = {
      id: crypto.randomUUID?.() ?? Date.now().toString(36),
      fullName: data.fullName,
      username: data.fullName.toLowerCase().replace(/\s+/g, ""),
      email: data.email,
      password: data.password,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
    return null;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
