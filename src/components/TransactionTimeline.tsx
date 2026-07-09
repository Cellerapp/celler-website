"use client";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface Step {
  label: string;
  sublabel?: string;
}

export default function TransactionTimeline({ steps, durationMs = 3000 }: { steps: Step[]; durationMs?: number }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = durationMs / steps.length;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= steps.length) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [steps.length, durationMs]);

  return (
    <div className="w-full mt-6">
      {steps.map((step, idx) => {
        const visible = idx < visibleCount;
        return (
          <div key={idx} className="flex items-start gap-3 relative">
            {idx < steps.length - 1 && (
              <div className="absolute left-[11px] top-6 w-px h-full bg-border/40" />
            )}
            <div className={`mt-0.5 ${visible ? "text-success" : "text-muted-foreground/30"}`}>
              <CheckCircle2 size={22} />
            </div>
            <div className="pb-4">
              <p className={`text-sm font-medium ${visible ? "text-foreground" : "text-muted-foreground/50"}`}>
                {step.label}
              </p>
              {step.sublabel && (
                <p className={`text-xs ${visible ? "text-muted-foreground" : "text-muted-foreground/30"}`}>
                  {step.sublabel}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
