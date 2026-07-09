"use client";
import { useState } from "react";
import { KeyRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TransactionPinDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVerified: () => void;
  title?: string;
  description?: string;
}

const CORRECT_PIN = "1234";

export default function TransactionPinDialog({
  open,
  onOpenChange,
  onVerified,
  title = "Enter Transaction PIN",
  description = "Enter your 4-digit PIN to continue",
}: TransactionPinDialogProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  if (!open) return null;

  const handleDigit = (d: string) => {
    if (pin.length >= 4) return;
    const next = pin + d;
    setPin(next);
    setError(false);
    if (next.length === 4) {
      setTimeout(() => {
        if (next === CORRECT_PIN) {
          onVerified();
          setPin("");
          onOpenChange(false);
        } else {
          setError(true);
          setTimeout(() => { setPin(""); setError(false); }, 800);
        }
      }, 300);
    }
  };

  const handleDelete = () => {
    setPin((p) => p.slice(0, -1));
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm" onClick={() => onOpenChange(false)}>
      <div className="w-full max-w-lg bg-card rounded-t-3xl p-6 pb-8 animate-in slide-in-from-bottom" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <KeyRound size={20} className="text-primary" />
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
          <button onClick={() => onOpenChange(false)} className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
            <X size={14} />
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-4 w-4 rounded-full transition-colors ${
                error ? "bg-destructive" : i < pin.length ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 w-64 mx-auto">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].map((key) => (
            <button
              key={key}
              disabled={!key}
              onClick={() => (key === "⌫" ? handleDelete() : handleDigit(key))}
              className="h-14 rounded-xl bg-secondary text-lg font-semibold flex items-center justify-center active:bg-secondary/70 transition-colors disabled:opacity-0"
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
