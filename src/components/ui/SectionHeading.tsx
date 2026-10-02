import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  titleGradient?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  titleGradient,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16 max-w-3xl",
        alignClasses[align],
        className
      )}
    >
      {kicker && (
        <Badge variant="live" className="mb-4">
          {kicker}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F4] leading-[1.1] font-heading">
        {title}{" "}
        {titleGradient && (
          <span className="text-gradient-ember">{titleGradient}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#A8A29E] leading-relaxed font-normal max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
