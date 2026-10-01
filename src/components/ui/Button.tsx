"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group relative inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2660A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0A09] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none select-none active:scale-[0.97]";

    const variants = {
      primary:
        "bg-[#F2660A] text-white hover:bg-[#FF8A1E] shadow-ember-glow hover:shadow-ember-lg border border-[#F2660A]/40",
      secondary:
        "bg-[#1A1614] text-[#F5F5F4] border border-white/10 hover:border-[#F2660A]/60 hover:bg-[#26201D] hover:shadow-ember-sm",
      outline:
        "bg-transparent border border-[#F2660A]/70 text-[#F2660A] hover:bg-[#F2660A]/10 hover:border-[#F2660A] hover:shadow-ember-sm",
      ghost:
        "bg-transparent text-[#A8A29E] hover:text-[#F5F5F4] hover:bg-white/5",
      gold:
        "bg-[#FACC15] text-[#0C0A09] hover:bg-yellow-400 shadow-gold-glow border border-[#FACC15]/50 font-extrabold",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs gap-1.5",
      md: "px-6 py-3 text-sm gap-2",
      lg: "px-8 py-4 text-base gap-3 font-extrabold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
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
        ) : leftIcon ? (
          <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
            {leftIcon}
          </span>
        ) : null}

        <span>{children}</span>

        {!isLoading && rightIcon && (
          <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
