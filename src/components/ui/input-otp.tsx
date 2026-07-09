"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface InputOTPProps {
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  children: React.ReactNode;
}

function InputOTP({ value = "", onChange, maxLength = 6, children }: InputOTPProps) {
  return (
    <div className="flex items-center" data-otp-value={value}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<Record<string, unknown>>, { value, onChange, maxLength })
          : child
      )}
    </div>
  );
}

function InputOTPGroup({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      {children}
    </div>
  );
}

interface InputOTPSlotProps {
  index: number;
  className?: string;
  value?: string;
  onChange?: (v: string) => void;
  maxLength?: number;
}

function InputOTPSlot({ index, className, value = "", maxLength = 6 }: InputOTPSlotProps) {
  const char = value[index] || "";
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        char && "z-10 ring-2 ring-ring",
        className
      )}
    >
      {char}
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot };
