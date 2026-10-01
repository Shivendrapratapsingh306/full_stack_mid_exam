import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Flagship Hero */}
      <HeroSection />

      {/* 2. Industry Marquee */}
      <MarqueeSection />

      {/* 3. Services Preview */}
      <ServicesPreview />

      {/* 4. Industries Grid */}
      <IndustriesSection />

      {/* 5. Featured Work Case Studies */}
      <FeaturedWorkSection />

      {/* 6. Why Us & Stats Counter */}
      <StatsSection />

      {/* 7. 4-Step Process */}
      <ProcessSection />

      {/* 8. Client Testimonials */}
      <TestimonialSection />

      {/* 9. Closing CTA Band */}
      <CTASection />
    </div>
  );
}
