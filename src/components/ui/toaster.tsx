"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

let toastFn: ((t: Omit<Toast, "id">) => void) | null = null;

export function toast(t: Omit<Toast, "id">) {
  if (toastFn) toastFn(t);
}

function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    toastFn = (t) => {
      const id = Date.now().toString(36);
      setToasts((prev) => [...prev, { ...t, id }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id !== id));
      }, 3000);
    };
    return () => { toastFn = null; };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`rounded-lg border p-4 shadow-lg bg-background ${t.variant === "destructive" ? "border-destructive" : "border-border"}`}
        >
          {t.title && <p className="text-sm font-semibold">{t.title}</p>}
          {t.description && <p className="text-xs text-muted-foreground mt-1">{t.description}</p>}
          <button onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))} className="absolute top-2 right-2">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

export { Toaster };
