import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FlameIcon, ArrowUpRightIcon, SparklesIcon, ShieldCheckIcon } from "@/components/ui/icons";

const TIMELINE_MILESTONES = [
  {
    year: "2024",
    tag: "THE SPARK",
    title: "Founding & First Custom Architectures",
    description: "The studio was born out of frustration with generic, slow Bootstrap templates. We set out to build custom Next.js web applications with zero compromise on visual craft.",
    highlights: ["First 5 custom client applications delivered", "Standardized dark-first ember palette", "Sub-second load time guarantee"],
  },
  {
    year: "2025",
    tag: "FUELING THE FLAME",
    title: "Scaling Production Integrity & Enterprise CRMs",
    description: "Expanded our engineering capabilities to deliver complex enterprise dashboards, e-commerce storefronts, and full-stack MongoDB data pipelines.",
    highlights: ["20+ shipped projects across 10 industries", "Integrated Zod client+server validation architecture", "Established 60fps Framer Motion standards"],
  },
  {
    year: "2026",
    tag: "THE ANGAAR STANDARD",
    title: "Flagship Studio Launch & Vibe Coding Playbook",
    description: "Unified our design system tokens into the official 'Angaari' brand specification and launched our flagship studio platform to showcase full-stack capabilities.",
    highlights: ["Official Angaar Labs flagship platform launch", "Standardized team vibe-coding playbook", "100% custom code integrity"],
  },
  {
    year: "2027 & BEYOND",
    tag: "FUTURE VISION",
    title: "Next-Gen Web Applications & AI Workflows",
    description: "Pioneering intelligent agent integration, real-time WebGL experiences, and autonomous web application features for forward-thinking clients.",
    highlights: ["Autonomous AI agent workflows", "WebGL 3D canvas integrations", "Global client footprint expansion"],
  },
];

export default function StoryPage() {
  return (
    <div className="py-12 sm:py-20 flex flex-col gap-20 sm:gap-28">
      {/* 1. Narrative Hero */}
      <section className="relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#7C2D12]/25 blur-[140px] pointer-events-none" />

        <Container>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <Badge variant="live" className="mb-6 shadow-ember-glow">
                OUR STORY & TIMELINE
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-[#F5F5F4] leading-tight mb-6">
                From A Single Spark To A <br />
                <span className="text-gradient-ember">High-Energy Digital Flame.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A8A29E] max-w-2xl leading-relaxed">
                The narrative of how The Angaar Labs evolved from a passionate engineering studio into a powerhouse for custom web applications.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Studio Origin */}
      <section>
        <Container>
          <Reveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <Badge variant="ember" className="mb-4">
                  THE ORIGIN
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F4] font-heading mb-6 leading-tight">
                  We Started With One Unshakeable Belief: <br />
                  <span className="text-gradient-ember">Great Web Craft Should Make Visitors Stop & Stare.</span>
                </h2>
                <p className="text-base text-[#A8A29E] leading-relaxed mb-4">
                  In a web crowded with cookie-cutter SaaS templates and sluggish drag-and-drop page builders, we saw a massive gap: businesses were paying high agency rates for generic sites that felt lifeless.
                </p>
                <p className="text-base text-[#A8A29E] leading-relaxed">
                  We founded The Angaar Labs to change that. Combining dark charcoal aesthetics, ember glows, Next.js App Router engineering, and 60fps Framer Motion storytelling, we craft web products that leave a lasting impression.
                </p>
              </div>

              <div className="lg:col-span-5">
                <Card variant="glass" className="border-[#F2660A]/30 shadow-ember-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F2660A]/20 flex items-center justify-center text-[#F2660A]">
                      <FlameIcon className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#F5F5F4] font-heading">The Angaar Guarantee</h3>
                  </div>
                  <ul className="space-y-3 text-xs text-[#A8A29E]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2660A]" />
                      <span>Zero template code reuse</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2660A]" />
                      <span>Strict TypeScript & Zod validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2660A]" />
                      <span>Hardware-accelerated 60fps animations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2660A]" />
                      <span>Lighthouse score ≥ 85 guaranteed</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. Interactive Scroll-Based Timeline */}
      <section className="relative">
        <Container>
          <Reveal direction="up">
            <SectionHeading
              kicker="Milestone Chronology"
              title="The Evolution Of"
              titleGradient="Our Digital Craft."
              subtitle="Scroll through key milestones that shaped our engineering standards and studio culture."
              align="center"
            />
          </Reveal>

          {/* Timeline Container */}
          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Center Vertical Ember Line */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-gradient-to-b from-[#F2660A] via-[#FF8A1E] to-[#7C2D12] sm:-translate-x-1/2 z-0" />

            <div className="space-y-12 sm:space-y-20 relative z-10">
              {TIMELINE_MILESTONES.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <Reveal
                    key={item.year}
                    direction={isEven ? "left" : "right"}
                    delay={index * 0.1}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                      {/* Left Side (Desktop) */}
                      <div
                        className={`w-full sm:w-1/2 ${
                          isEven ? "sm:text-right sm:pr-8" : "sm:order-2 sm:text-left sm:pl-8"
                        }`}
                      >
                        <Badge variant="live" className="mb-2">
                          {item.tag} • {item.year}
                        </Badge>
                        <h3 className="text-2xl font-extrabold text-[#F5F5F4] font-heading mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#A8A29E] leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <ul
                          className={`space-y-1 text-xs text-[#F2660A] font-semibold ${
                            isEven ? "sm:flex sm:flex-col sm:items-end" : ""
                          }`}
                        >
                          {item.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2">
                              <span>✓</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timeline Center Dot */}
                      <div className="relative flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-[#1A1614] border-2 border-[#F2660A] shadow-ember-glow z-20 sm:order-1 sm:left-1/2 sm:-translate-x-1/2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#F2660A] animate-ping" />
                      </div>

                      {/* Right Side Spacer for Alternating Desktop Layout */}
                      <div className={`hidden sm:block w-1/2 ${isEven ? "order-2" : "order-1"}`} />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Future Vision */}
      <section className="py-8">
        <Container>
          <Reveal direction="up">
            <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1A1614] via-[#0C0A09] to-[#1A1614] border border-[#F2660A]/30 text-center relative overflow-hidden shadow-ember-lg">
              <div className="max-w-3xl mx-auto">
                <Badge variant="gold" icon={<SparklesIcon className="w-4 h-4" />} className="mb-4">
                  THE FUTURE DIRECTION
                </Badge>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F4] font-heading mb-6">
                  Building The Next Generation Of High-Energy Web Products.
                </h2>
                <p className="text-base text-[#A8A29E] leading-relaxed mb-8">
                  As web technologies evolve, The Angaar Labs continues to push boundaries — integrating autonomous AI agents, streaming backend architectures, and immersive WebGL motion while keeping performance lightning fast.
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="lg" rightIcon={<ArrowUpRightIcon className="w-5 h-5" />}>
                    BUILD YOUR NEXT PROJECT WITH US
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
