"use client";
import { useEffect, useState } from "react";

interface ToastOptions {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

let externalToast: ((t: ToastOptions) => void) | null = null;

export function toast(t: ToastOptions) {
  if (externalToast) externalToast(t);
}

export function useToast() {
  const [toasts, setToasts] = useState<(ToastOptions & { id: string })[]>([]);

  useEffect(() => {
    externalToast = (t) => {
      const id = Date.now().toString(36);
      setToasts((prev) => [...prev, { ...t, id }]);
      setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 3000);
    };
    return () => { externalToast = null; };
  }, []);

  return { toast, toasts };
}
