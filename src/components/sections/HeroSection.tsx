"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EmberCanvas } from "@/components/common/EmberCanvas";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center overflow-hidden bg-[#0C0A09] text-[#F5F5F4] py-16 sm:py-24">
      {/* 60fps HTML5 Canvas Ember Particles */}
      <EmberCanvas />

      {/* Cinematic Ambient Radial Glow Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-tr from-[#7C2D12]/30 via-[#F2660A]/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-ember-pulse" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#FF8A1E]/10 rounded-full blur-[120px] pointer-events-none" />

      <Container size="large" className="relative z-10 text-center">
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
          className="flex flex-col items-center max-w-5xl mx-auto"
        >
          {/* Eyebrow Badge */}
          <div className="mb-6 sm:mb-8">
            <Badge variant="live" className="shadow-ember-glow px-4 py-1.5 text-xs sm:text-sm">
              THE ANGAAR LABS
            </Badge>
          </div>

          {/* Kinetic Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight text-[#F5F5F4] leading-[1.05] sm:leading-[1.04] mb-8 select-none">
            <span className="block mb-2">
              We Build Digital Products
            </span>
            <span className="block">
              & <span className="text-gradient-ember">Flagship Websites</span> That Sell.
            </span>
          </h1>

          {/* Confident Agency Positioning Statement */}
          <p className="text-lg sm:text-2xl text-[#A8A29E] max-w-3xl leading-relaxed font-normal mb-10 sm:mb-12">
            An elite web development studio turning ambitious brands into digital category leaders through high-energy design, Next.js architecture, and 60fps motion.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg py-4 px-8 shadow-ember-lg"
                rightIcon={<ArrowUpRightIcon className="w-5 h-5" />}
              >
                START A PROJECT
              </Button>
            </Link>

            <Link href="/work" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg py-4 px-8"
                rightIcon={<ArrowRightIcon className="w-5 h-5" />}
              >
                VIEW OUR WORK
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Animated Scroll Indicator */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease-out 0.5s",
        }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A8A29E] text-xs font-semibold uppercase tracking-widest pointer-events-none z-10"
      >
        <span>Scroll to Explore</span>
        <div className="w-5 h-9 rounded-full border-2 border-[#F2660A]/40 flex justify-center p-1 bg-[#1A1614]/50 shadow-ember-sm">
          <div className="w-1.5 h-2.5 rounded-full bg-[#F2660A] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
