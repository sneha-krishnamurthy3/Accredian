"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, id, ...props }, ref) => {
    const errorId = error ? `${id}-error` : undefined;
    return (
      <div className="w-full space-y-2 text-left">
        <label
          htmlFor={id}
          className="text-[10px] font-bold uppercase tracking-widest text-slate-500 transition-colors focus-within:text-indigo-600"
        >
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
          className={cn(
            "w-full px-4 py-3.5 rounded-xl border border-slate-200/80 bg-white/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/5 transition-all text-sm md:text-base shadow-[0_1px_2px_rgba(0,0,0,0.01)]",
            error && "border-red-500/80 focus:border-red-500 focus:ring-red-500/5",
            className
          )}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs font-semibold text-red-500 mt-1 animate-fadeIn"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, rows = 4, ...props }, ref) => {
    const errorId = error ? `${id}-error` : undefined;
    return (
      <div className="w-full space-y-2 text-left">
        <label
          htmlFor={id}
          className="text-[10px] font-bold uppercase tracking-widest text-slate-500 transition-colors focus-within:text-indigo-600"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
          className={cn(
            "w-full px-4 py-3.5 rounded-xl border border-slate-200/80 bg-white/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/5 transition-all text-sm md:text-base shadow-[0_1px_2px_rgba(0,0,0,0.01)] resize-none",
            error && "border-red-500/80 focus:border-red-500 focus:ring-red-500/5",
            className
          )}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs font-semibold text-red-500 mt-1 animate-fadeIn"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Input;
