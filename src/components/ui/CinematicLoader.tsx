"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CinematicLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<
    "counting" | "hold" | "fracture" | "glow" | "split" | "done"
  >("counting");

  // Phase 1: Counting
  useEffect(() => {
    let start = Date.now();
    const duration = 2200; // 2.2 seconds to reach 100%

    const count = setInterval(() => {
      const now = Date.now();
      const elapsed = now - start;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(current);

      if (current >= 100) {
        clearInterval(count);
        setTimeout(() => setPhase("hold"), 300);
      }
    }, 30);

    return () => clearInterval(count);
  }, []);

  // Sequence Manager
  useEffect(() => {
    if (phase === "hold") {
      // Hold briefly at 100%
      setTimeout(() => setPhase("fracture"), 500);
    } else if (phase === "fracture") {
      // Draw the SVG crack down the screen
      setTimeout(() => setPhase("glow"), 700);
    } else if (phase === "glow") {
      // Pull panels slightly apart to expose molten background
      setTimeout(() => setPhase("split"), 1400);
    } else if (phase === "split") {
      // Blast panels completely off-screen
      setTimeout(() => setPhase("done"), 1200);
    }
  }, [phase]);

  // Remove completely from DOM when finished
  if (phase === "done") return null;

  // Exact shared coordinates to seamlessly stitch the two panels together
  // Made highly asymmetrical and jagged to look like a real, chaotic lava fracture
  const crackPoints =
    "40% 0%, 45% 12%, 35% 25%, 55% 35%, 42% 50%, 65% 65%, 45% 75%, 58% 85%, 48% 100%";
  const leftClip = `polygon(0% 0%, ${crackPoints}, 0% 100%)`;
  const rightClip = `polygon(100% 0%, ${crackPoints}, 100% 100%)`;

  // Matches the clip-path points for the SVG tracing line
  const crackPathD =
    "M 40 0 L 45 12 L 35 25 L 55 35 L 42 50 L 65 65 L 45 75 L 58 85 L 48 100";

  // Identical content placed in both panels so it gets physically sliced in half
  const LoaderContent = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <div className="flex items-center justify-center mb-16">
        <div className="relative w-20 h-20 overflow-hidden shadow-ember-glow">
          <Image
            src="/images/logo.png"
            alt="Angaar Labs Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="w-64 sm:w-80 flex flex-col items-center gap-3">
        <span className="text-lg sm:text-xl font-heading font-bold text-[#A8A29E] tracking-widest uppercase">
          {progress}%
        </span>
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F2660A] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[99999] bg-transparent flex items-center justify-center overflow-hidden pointer-events-none">

      {/* 2. SVG Tracing Crack (The initial fracture) */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={cn(
          "absolute inset-0 w-full h-full z-20 overflow-visible transition-opacity duration-300",
          phase === "fracture" ? "opacity-100" : "opacity-0"
        )}
      >
        <path
          d={crackPathD}
          fill="none"
          stroke="#FF8A1E"
          strokeWidth="0.3"
          vectorEffect="non-scaling-stroke"
          style={{
            strokeDasharray: 200,
            strokeDashoffset: phase === "fracture" ? 0 : 200,
            transition: "stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            filter: "drop-shadow(0 0 10px #F2660A) drop-shadow(0 0 20px #FF8A1E)",
          }}
        />
      </svg>

      {/* 1A. Left Stone Panel */}
      <div
        className={cn(
          "absolute inset-0 bg-[#0C0A09] bg-noise transition-transform ease-[cubic-bezier(0.8,0,0.2,1)]",
          phase === "glow" ? "-translate-x-1 sm:-translate-x-2 duration-[1000ms]" : "",
          phase === "split" ? "-translate-x-full duration-[1200ms]" : ""
        )}
        style={{ clipPath: leftClip, WebkitClipPath: leftClip }}
      >
        <LoaderContent />
      </div>

      {/* 1B. Right Stone Panel */}
      <div
        className={cn(
          "absolute inset-0 bg-[#0C0A09] bg-noise transition-transform ease-[cubic-bezier(0.8,0,0.2,1)]",
          phase === "glow" ? "translate-x-1 sm:translate-x-2 duration-[1000ms]" : "",
          phase === "split" ? "translate-x-full duration-[1200ms]" : ""
        )}
        style={{ clipPath: rightClip, WebkitClipPath: rightClip }}
      >
        <LoaderContent />
      </div>
    </div>
  );
}
