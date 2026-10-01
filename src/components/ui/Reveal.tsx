"use client";

import React, { useEffect, useState, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function Reveal({
  children,
  width = "100%",
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return "translate(0, 0)";
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: getTransformStyle(),
          transitionProperty: "opacity, transform",
          transitionDuration: `${duration}s`,
          transitionDelay: `${delay}s`,
          transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
