"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRightIcon } from "@/components/ui/icons";

const INDUSTRIES = [
  {
    name: "Real Estate",
    slug: "REAL_ESTATE",
    oneLiner: "Architectural property showcases, interactive virtual tours, and high-converting lead funnels.",
    badge: "High Growth",
  },
  {
    name: "Cafe & Restaurant",
    slug: "CAFE",
    oneLiner: "Immersive culinary brand sites, interactive digital menus, and instant reservation booking.",
    badge: "Hospitality",
  },
  {
    name: "Clothing & Fashion",
    slug: "CLOTHING",
    oneLiner: "Editorial lookbook showcases, high-fashion typography, and seamless product catalog browsing.",
    badge: "Apparel",
  },
  {
    name: "Healthcare & Clinics",
    slug: "HEALTHCARE",
    oneLiner: "Patient-first clinical appointment portals, doctor profiles, and trust-focused digital UX.",
    badge: "Medical",
  },
  {
    name: "Enterprise CRM",
    slug: "CRM",
    oneLiner: "Custom operational dashboards, role-based security access, and real-time data visualization.",
    badge: "SaaS",
  },
  {
    name: "E-Commerce",
    slug: "ECOMMERCE",
    oneLiner: "Headless shopping experiences engineered for ultra-low latency, conversion, and global scale.",
    badge: "Retail",
  },
  {
    name: "Other Specialized Products",
    slug: "OTHER",
    oneLiner: "Tailored web applications, client portals, and bespoke digital platforms crafted to exact specs.",
    badge: "Custom",
  },
];

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 1500); // 1.5 seconds gives a slightly more readable pace than 1s, but satisfies the fast rotation request
    return () => clearInterval(interval);
  }, []);

  // We duplicate the array three times to create an infinitely scrollable visual buffer
  const carouselItems = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="py-20 sm:py-28 bg-[#161210] relative overflow-hidden border-y border-[#F2660A]/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            kicker="Sectors We Serve"
            title="Tailored Engineering For"
            titleGradient="Diverse Industries."
            subtitle="We bring deep domain expertise to design and build industry-specific web products that solve real business problems."
            align="center"
          />
        </Reveal>

        <div className="relative mt-12 w-full overflow-hidden mask-horizontal-fades">
          {/* We use a large negative margin trick on the parent or handle the offset cleanly via inline styles */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              // We start indexing from the second chunk of the array to allow backwards scrolling if ever added
              // Gap is 24px (1.5rem). The transform calculates the exact width of one card + gap to slide over.
              transform: `translate3d(calc(-${(activeIndex + INDUSTRIES.length) * 100}% / var(--cards-to-show) - ${(activeIndex + INDUSTRIES.length) * 24}px / var(--cards-to-show)), 0, 0)`,
            }}
          >
            <style jsx>{`
              .mask-horizontal-fades {
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              }
              
              /* Default Mobile: 1 Card */
              :global(:root) { --cards-to-show: 1; }
              
              /* Tablet: 2 Cards */
              @media (min-width: 768px) {
                :global(:root) { --cards-to-show: 2; }
              }
              
              /* Desktop: 3 Cards */
              @media (min-width: 1024px) {
                :global(:root) { --cards-to-show: 3; }
              }
            `}</style>
            
            {carouselItems.map((industry, index) => (
              <div 
                key={`${industry.slug}-${index}`} 
                className="flex-none px-3"
                style={{ width: "calc(100% / var(--cards-to-show))" }}
              >
                <Link href={`/work?industry=${industry.slug}`} className="block h-full">
                  <Card
                    hoverEffect
                    glowOnHover
                    variant="glass"
                    className="h-full flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="live">{industry.badge}</Badge>
                        <ArrowUpRightIcon className="w-5 h-5 text-[#A8A29E] group-hover:text-[#F2660A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <h3 className="text-xl font-extrabold text-[#F5F5F4] mb-2 font-heading group-hover:text-[#F2660A] transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-[#A8A29E] leading-relaxed">
                        {industry.oneLiner}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F2660A] font-semibold">
                      <span>View Industry Projects</span>
                      <span>→</span>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
