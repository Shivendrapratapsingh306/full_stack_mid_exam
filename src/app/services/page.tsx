import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import {
  SparklesIcon,
  ZapIcon,
  ShieldCheckIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
  FlameIcon,
} from "@/components/ui/icons";

const DETAILED_SERVICES = [
  {
    id: "web-design",
    number: "01",
    name: "Web Design & UI/UX Systems",
    positioning: "Visual identities and digital interfaces that make visitors stop and stare.",
    description: "We craft custom user interfaces from scratch, prioritizing visual hierarchy, dark-first ember aesthetics, kinetic typography, and intuitive user journeys. Every component is designed as a reusable system rather than isolated screens.",
    deliverables: [
      "Figma Wireframes & Prototypes",
      "Custom Design System Tokens",
      "Dark-First 'Angaari' Visual Vibe",
      "Component Micro-Interaction Guides",
      "Mobile & Desktop Responsive Layouts",
    ],
    icon: SparklesIcon,
    accentGradient: "from-[#F2660A] to-[#7C2D12]",
    tag: "VISUAL CRAFT",
  },
  {
    id: "web-dev",
    number: "02",
    name: "Custom Next.js Web Development",
    positioning: "Production-grade App Router applications built for scale and sub-second load times.",
    description: "We build modern, full-stack web applications engineered with Next.js 14+, TypeScript, and server-side rendering. Zero template bloat, clean modular code architecture, and strict Zod validation on every request.",
    deliverables: [
      "Next.js App Router Architecture",
      "Strict TypeScript Schema Types",
      "Server Components & Streaming SSR",
      "60fps Framer Motion Integration",
      "Sub-Second Page Load Optimization",
    ],
    icon: ZapIcon,
    accentGradient: "from-[#FF8A1E] to-[#F2660A]",
    tag: "FULL-STACK DEV",
  },
  {
    id: "ecommerce",
    number: "03",
    name: "Headless E-Commerce Solutions",
    positioning: "Lightning-fast digital storefronts built to maximize conversion and handle capsule drop spikes.",
    description: "We engineer custom e-commerce experiences that outpace traditional Shopify templates. Featuring edge-cached product catalogs, optimistic cart state management, and seamless Stripe/Shopify headless integration.",
    deliverables: [
      "Headless Storefront Frontend",
      "Stripe & Payment Gateway Pipelines",
      "Optimistic Shopping Cart State",
      "High-Traffic Drop Reliability",
      "Conversion Rate Optimization",
    ],
    icon: ShieldCheckIcon,
    accentGradient: "from-[#FACC15] to-[#F2660A]",
    tag: "HIGH CONVERSION",
  },
  {
    id: "crm-dashboards",
    number: "04",
    name: "Enterprise CRM & Admin Dashboards",
    positioning: "Custom operational web portals, real-time analytics, and role-based access control.",
    description: "Transform complex operational workflows into intuitive dark-mode administrative portals. We build data visualization dashboards with streaming data tables, multi-tenant workspace management, and JWT cookie authentication.",
    deliverables: [
      "Admin Control Panels & CMS",
      "Real-Time Data Visualization Charts",
      "Role-Based Access Control (RBAC)",
      "Secure MongoDB Data Schemas",
      "Automated Workflow Pipelines",
    ],
    icon: ZapIcon,
    accentGradient: "from-[#F2660A] to-[#7C2D12]",
    tag: "ENTERPRISE",
  },
  {
    id: "branding",
    number: "05",
    name: "Brand Positioning & Identity",
    positioning: "Fiery, high-energy brand strategy that sets your business apart in crowded markets.",
    description: "A digital product is only as strong as the brand story behind it. We define comprehensive visual identities, logo marks, color token palettes, font pairings, and digital design playbooks that resonate with high-value clients.",
    deliverables: [
      "Brand Identity & Logo Craft",
      "Color Palette & Token System",
      "Typography Scale Guidelines",
      "Digital Brand Asset Library",
      "Voice & Positioning Playbook",
    ],
    icon: FlameIcon,
    accentGradient: "from-[#FF8A1E] to-[#FACC15]",
    tag: "BRAND STRATEGY",
  },
  {
    id: "maintenance",
    number: "06",
    name: "Maintenance, Security & Audits",
    positioning: "Ongoing technical care, security patches, and Lighthouse performance optimization.",
    description: "We maintain your web applications post-launch to ensure continuous high availability, zero security vulnerabilities, regular dependency updates, and unbroken 95+ Lighthouse performance scores.",
    deliverables: [
      "Lighthouse 95+ Desktop/Mobile Audits",
      "Continuous Security & Package Patches",
      "Zero-Downtime Deployment Care",
      "24/7 Server Health Monitoring",
      "Monthly Feature Enhancements",
    ],
    icon: ShieldCheckIcon,
    accentGradient: "from-[#7C2D12] to-[#F2660A]",
    tag: "LONG-TERM CARE",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 flex flex-col gap-24 sm:gap-32">
      {/* 1. Hero Overview */}
      <section className="relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#7C2D12]/25 blur-[140px] pointer-events-none" />

        <Container>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <Badge variant="live" className="mb-6 shadow-ember-glow">
                CAPABILITIES & SERVICES
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-[#F5F5F4] leading-tight mb-6">
                What We Build For <br />
                <span className="text-gradient-ember">High-Impact Brands.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A8A29E] max-w-2xl leading-relaxed">
                From bespoke UI/UX web design to custom Next.js App Router engineering, e-commerce storefronts, and enterprise CRMs — we deliver digital craft that drives growth.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Editorial Service Breakdown Sections */}
      <section>
        <Container>
          <div className="space-y-24 sm:space-y-36">
            {DETAILED_SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = service.icon;

              return (
                <div key={service.id} id={service.id} className="scroll-mt-32">
                  <Reveal direction="up">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      {/* Text Column */}
                      <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl font-black font-heading text-gradient-ember">
                            {service.number}
                          </span>
                          <Badge variant="ember">{service.tag}</Badge>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F4] font-heading mb-4 leading-tight">
                          {service.name}
                        </h2>

                        <p className="text-lg font-bold text-[#FF8A1E] mb-6">
                          "{service.positioning}"
                        </p>

                        <p className="text-base text-[#A8A29E] leading-relaxed mb-8">
                          {service.description}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="mb-8 p-6 rounded-2xl bg-[#1A1614] border border-white/10">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F5F4] mb-4">
                            Included Deliverables & Engineering Outputs:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.deliverables.map((item) => (
                              <div key={item} className="flex items-center gap-2.5 text-xs text-[#A8A29E]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F2660A] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Link href={`/contact?service=${encodeURIComponent(service.name)}`}>
                          <Button
                            variant="primary"
                            size="md"
                            rightIcon={<ArrowUpRightIcon className="w-4 h-4" />}
                          >
                            Inquire About {service.name}
                          </Button>
                        </Link>
                      </div>

                      {/* Editorial Visual Panel */}
                      <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#1A1614] via-[#0C0A09] to-[#1A1614] border border-white/10 overflow-hidden shadow-ember-glow group hover:border-[#F2660A]/50 transition-all duration-500">
                          {/* Ambient Gradient Glow Circle */}
                          <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${service.accentGradient} opacity-20 rounded-full blur-3xl pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} />

                          <div className="relative z-10 flex flex-col items-start">
                            <div className="w-16 h-16 rounded-2xl bg-[#F2660A]/15 border border-[#F2660A]/40 flex items-center justify-center text-[#F2660A] mb-8 shadow-ember-sm group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-8 h-8" />
                            </div>

                            <span className="text-xs font-mono uppercase text-[#F2660A] font-bold mb-2 tracking-widest">
                              SERVICE HIGHLIGHT
                            </span>

                            <h3 className="text-2xl font-extrabold text-[#F5F5F4] font-heading mb-4">
                              {service.name}
                            </h3>

                            <p className="text-xs text-[#A8A29E] leading-relaxed mb-8">
                              Crafted specifically to deliver measurable ROI, high conversion rates, and 60fps motion fluidity.
                            </p>

                            <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F2660A] font-semibold">
                              <span>Production Grade</span>
                              <span>Ready to Build →</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Final Call to Action */}
      <section className="pt-8">
        <Container>
          <Reveal direction="up">
            <div className="p-12 sm:p-16 rounded-3xl bg-gradient-to-r from-[#1A1614] via-[#0C0A09] to-[#1A1614] border border-[#F2660A]/30 text-center relative overflow-hidden shadow-ember-glow">
              <div className="max-w-3xl mx-auto">
                <Badge variant="live" className="mb-4">
                  START YOUR PROJECT TODAY
                </Badge>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F4] font-heading mb-6">
                  Ready To Elevate Your Studio Presence?
                </h2>
                <p className="text-base text-[#A8A29E] leading-relaxed mb-8">
                  Let’s collaborate to build a flagship web presence that sets your brand apart.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto shadow-ember-lg"
                      rightIcon={<ArrowUpRightIcon className="w-5 h-5" />}
                    >
                      START A PROJECT
                    </Button>
                  </Link>
                  <Link href="/work">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto"
                      rightIcon={<ArrowRightIcon className="w-5 h-5" />}
                    >
                      VIEW CASE STUDIES
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
