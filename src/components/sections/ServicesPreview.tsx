import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import {
  ZapIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@/components/ui/icons";

const SERVICES_DATA = [
  {
    title: "Web Design",
    description: "High-impact UI/UX design, visual storytelling, wireframing, and custom design systems tailored to your brand identity.",
    deliverables: ["Figma Prototypes", "Design System Tokens", "Responsive Wireframes"],
    icon: SparklesIcon,
    badge: "Core Service",
  },
  {
    title: "Web Development",
    description: "Production-grade Next.js App Router applications engineered with strict TypeScript, SSR streaming, and 60fps motion.",
    deliverables: ["Next.js Architecture", "API Integration", "Clean Modular Code"],
    icon: ZapIcon,
    badge: "Flagship",
  },
  {
    title: "E-Commerce",
    description: "Custom storefronts with lightning-fast catalog navigation, payment gateway integration, and high-conversion checkout flows.",
    deliverables: ["Headless Storefronts", "Payment Integration", "Inventory Sync"],
    icon: ShieldCheckIcon,
    badge: "High-ROI",
  },
  {
    title: "CRM / Dashboards",
    description: "Intuitive administrative portals, real-time analytics dashboards, role-based security access, and data visualization.",
    deliverables: ["Admin Portals", "Analytics Charts", "Role Management"],
    icon: ZapIcon,
    badge: "Enterprise",
  },
  {
    title: "Branding",
    description: "Distinct visual positioning, logo craftsmanship, color systems, typography scale, and complete brand execution guides.",
    deliverables: ["Visual Identity", "Typography System", "Brand Playbook"],
    icon: SparklesIcon,
    badge: "Identity",
  },
  {
    title: "Maintenance & Audits",
    description: "Ongoing performance audits, Core Web Vitals optimization, zero-downtime deployments, and security monitoring.",
    deliverables: ["Lighthouse 95+ Audit", "24/7 Monitoring", "Security Patches"],
    icon: ShieldCheckIcon,
    badge: "Support",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#0C0A09] relative overflow-hidden border-b border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7C2D12]/15 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <SectionHeading
              kicker="What We Offer"
              title="Full-Stack Engineering &"
              titleGradient="Digital Craft."
              subtitle="End-to-end web services built for ambitious businesses that refuse to settle for generic templates."
              className="mb-0 max-w-2xl"
            />
            <Link href="/services" className="mt-6 md:mt-0 shrink-0">
              <Button
                variant="secondary"
                size="md"
                rightIcon={<ArrowUpRightIcon className="w-4 h-4" />}
              >
                View All Services
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Reveal key={service.title} direction="up" delay={index * 0.08}>
                <Card hoverEffect glowOnHover variant="glass" className="h-full flex flex-col justify-between group cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#F2660A]/10 border border-[#F2660A]/30 flex items-center justify-center text-[#F2660A] shadow-ember-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F2660A]/20 group-hover:border-[#F2660A]/60 group-hover:shadow-[0_0_25px_rgba(242,102,10,0.5)]">
                        <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <Badge variant="ember" className="transition-transform duration-300 group-hover:-translate-y-1">{service.badge}</Badge>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#F5F5F4] mb-3 font-heading tracking-tight transition-colors duration-300 group-hover:text-[#F2660A]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#A8A29E] leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white/90">
                      {service.description}
                    </p>

                    <div className="pt-4 border-t border-white/10 mb-6 transition-colors duration-300 group-hover:border-[#F2660A]/30">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F4] mb-3">
                        Key Deliverables:
                      </p>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-[#A8A29E] transition-colors duration-300 group-hover:text-white/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F2660A] transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(242,102,10,0.8)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/services" className="pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between hover:text-[#F2660A]"
                      rightIcon={<ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
