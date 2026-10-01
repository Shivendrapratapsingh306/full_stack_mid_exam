import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    title: "Strategy & Architecture",
    description: "We analyze your brand, target audience, competition, and functional goals to blueprint a tailored product architecture.",
    deliverables: ["Product Requirements Document", "Information Architecture Map", "Technical Stack Definition"],
  },
  {
    step: "02",
    name: "Design",
    title: "UI/UX & Motion Prototype",
    description: "We craft high-fidelity Figma designs, dark-first ember design systems, typography scales, and motion prototypes.",
    deliverables: ["Figma Design Systems", "Interactive Wireframes", "60fps Motion Guidelines"],
  },
  {
    step: "03",
    name: "Build",
    title: "Full-Stack Development",
    description: "We engineer clean Next.js App Router components with TypeScript, MongoDB database integration, and Zod API validation.",
    deliverables: ["Next.js Codebase", "Database & Auth Pipeline", "API Endpoint Handlers"],
  },
  {
    step: "04",
    name: "Launch",
    title: "QA, Audit & Deployment",
    description: "We perform rigorous Lighthouse audits, mobile responsiveness checks, SEO optimization, and zero-downtime Vercel deployment.",
    deliverables: ["Lighthouse 95+ Audit Pass", "SEO & OpenGraph Assets", "Vercel / Atlas Deployment"],
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0C0A09] relative overflow-hidden border-b border-white/5">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C2D12]/20 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <Reveal direction="up">
          <SectionHeading
            kicker="Execution Blueprint"
            title="Our 4-Step Process From"
            titleGradient="Spark To Launch."
            subtitle="A disciplined, transparent development methodology designed to ship world-class digital products on time."
            align="center"
          />
        </Reveal>

        {/* Connected 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
          {/* Subtle Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F2660A]/20 via-[#FF8A1E]/30 to-[#F2660A]/20 -translate-y-8 z-0" />

          {PROCESS_STEPS.map((stepItem, index) => (
            <Reveal key={stepItem.step} direction="up" delay={index * 0.1}>
              <Card
                hoverEffect
                glowOnHover
                variant="glass"
                className="h-full flex flex-col justify-between relative z-10"
              >
                <div>
                  {/* Step Header Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-heading text-gradient-ember">
                      {stepItem.step}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#1A1614] border border-[#F2660A]/30 text-[#F2660A] text-xs font-bold uppercase tracking-wider">
                      {stepItem.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#F5F5F4] mb-3 font-heading">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-[#A8A29E] leading-relaxed mb-6">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F5F5F4] mb-2">
                    Key Outputs:
                  </p>
                  <ul className="space-y-1.5">
                    {stepItem.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-[#A8A29E]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F2660A]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
