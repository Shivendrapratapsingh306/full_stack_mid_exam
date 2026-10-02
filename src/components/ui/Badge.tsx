import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "live" | "industry" | "tech" | "ember" | "gold" | "outline";
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "ember",
  children,
  icon,
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    live: "bg-[#1A1614] border border-[#F2660A]/40 text-[#F2660A] shadow-ember-sm",
    industry:
      "bg-[#1A1614] border border-white/10 text-[#F5F5F4] hover:border-[#F2660A]/50 hover:text-[#F2660A] transition-colors",
    tech: "bg-[#26201D] border border-white/5 text-[#A8A29E] text-xs font-mono",
    ember: "bg-[#F2660A]/15 border border-[#F2660A]/30 text-[#F2660A]",
    gold: "bg-[#FACC15]/15 border border-[#FACC15]/30 text-[#FACC15]",
    outline: "bg-transparent border border-white/15 text-[#A8A29E]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase select-none transition-all duration-300",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2660A] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F2660A]" />
        </span>
      )}

      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
