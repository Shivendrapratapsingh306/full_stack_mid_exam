"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ZapIcon, ShieldCheckIcon, SparklesIcon, FlameIcon } from "@/components/ui/icons";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

function StatCounter({ value, suffix, label, sublabel }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-4xl sm:text-6xl font-black font-heading text-gradient-ember tracking-tight mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-base sm:text-lg font-bold text-[#F5F5F4]">{label}</p>
      <p className="text-xs text-[#A8A29E] mt-1">{sublabel}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#1A1614]/50 relative overflow-hidden border-b border-white/5">
      <Container>
        {/* Animated Stats Bar */}
        <Reveal direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 sm:p-12 rounded-3xl bg-[#0C0A09] border border-white/10 shadow-ember-glow mb-20">
            <StatCounter
              value={45}
              suffix="+"
              label="Projects Shipped"
              sublabel="Across 12+ industries"
            />
            <StatCounter
              value={99}
              suffix=".8%"
              label="On-Time Launch"
              sublabel="Milestone commitment"
            />
            <StatCounter
              value={100}
              suffix="%"
              label="Custom Code"
              sublabel="Zero template bloat"
            />
            <StatCounter
              value={60}
              suffix=" FPS"
              label="Motion Fluidity"
              sublabel="Hardware accelerated"
            />
          </div>
        </Reveal>

        {/* Why Us Differentiators */}
        <Reveal direction="up" delay={0.1}>
          <SectionHeading
            kicker="Why The Angaar Labs"
            title="Built For Brands That Demand"
            titleGradient="Digital Excellence."
            subtitle="We don't just build websites; we craft digital assets that position your business as the undisputed category leader."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card hoverEffect variant="glass">
              <div className="w-12 h-12 rounded-xl bg-[#F2660A]/10 border border-[#F2660A]/30 flex items-center justify-center text-[#F2660A] mb-5">
                <FlameIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F4] mb-2 font-heading">
                High-Energy Aesthetics
              </h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Dark-first charcoal design system with glowing ember accents that instantly captivate every visitor.
              </p>
            </Card>

            <Card hoverEffect variant="glass">
              <div className="w-12 h-12 rounded-xl bg-[#FF8A1E]/10 border border-[#FF8A1E]/30 flex items-center justify-center text-[#FF8A1E] mb-5">
                <ZapIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F4] mb-2 font-heading">
                Next.js App Architecture
              </h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Built on Next.js App Router, streaming server components, and clean modular TypeScript for long-term scale.
              </p>
            </Card>

            <Card hoverEffect variant="glass">
              <div className="w-12 h-12 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/30 flex items-center justify-center text-[#FACC15] mb-5">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F4] mb-2 font-heading">
                60fps Motion Storytelling
              </h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Hardware-accelerated scroll reveals, interactive micro-animations, and smooth page transitions.
              </p>
            </Card>

            <Card hoverEffect variant="glass">
              <div className="w-12 h-12 rounded-xl bg-[#F2660A]/10 border border-[#F2660A]/30 flex items-center justify-center text-[#F2660A] mb-5">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F4] mb-2 font-heading">
                Full Production Integrity
              </h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Zod client+server validation, MongoDB database persistence, and secure httpOnly JWT authorization.
              </p>
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
