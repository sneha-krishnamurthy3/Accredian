"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={!disabled && !isLoading ? { y: -2, scale: 1.01 } : {}}
        whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          // Variants
          variant === "primary" && "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 border border-transparent",
          variant === "secondary" && "bg-slate-900 text-white hover:bg-slate-800 shadow-sm border border-transparent",
          variant === "outline" && "border border-slate-200 bg-white/50 text-slate-700 hover:bg-slate-50 hover:border-slate-300",
          variant === "ghost" && "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50",
          // Sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-5 py-2.5 text-sm md:text-base",
          size === "lg" && "px-6 py-3.5 text-base md:text-lg",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
