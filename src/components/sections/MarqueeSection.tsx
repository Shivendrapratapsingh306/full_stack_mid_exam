import React from "react";
import { FlameIcon } from "@/components/ui/icons";

const MARQUEE_ITEMS = [
  "REAL ESTATE DEVELOPERS",
  "CAFE & RESTAURANT BRANDS",
  "HIGH-FASHION APPAREL",
  "HEALTHCARE & CLINICS",
  "ENTERPRISE CRM & DASHBOARDS",
  "NEXT.JS E-COMMERCE PLATFORMS",
  "SAAS PRODUCT LABS",
  "FINTECH DASHBOARDS",
];

export function MarqueeSection() {
  return (
    <section className="py-8 bg-[#1A1614] border-y border-white/10 overflow-hidden relative select-none">
      {/* Edge Gradient Blurs */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1614] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1614] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-[#A8A29E] font-heading text-sm sm:text-base font-extrabold tracking-widest uppercase hover:text-[#F2660A] transition-colors"
          >
            <span>{item}</span>
            <FlameIcon className="w-4 h-4 text-[#F2660A] opacity-70 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
