import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "solid" | "bordered";
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  className?: string;
}

export function Card({
  children,
  variant = "glass",
  hoverEffect = true,
  glowOnHover = true,
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    glass: "glass-card",
    solid: "bg-[#1A1614] border border-white/5",
    bordered: "bg-[#0C0A09] border border-[#F2660A]/25",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F2660A]/50"
    : "";

  const glowStyles = glowOnHover && hoverEffect
    ? "hover:shadow-ember-glow"
    : "";

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 relative overflow-hidden group",
        variantStyles[variant],
        hoverStyles,
        glowStyles,
        className
      )}
      {...props}
    >
      {/* Decorative inner ember radial glow accent */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F2660A]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#F2660A]/20 transition-all duration-500" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
