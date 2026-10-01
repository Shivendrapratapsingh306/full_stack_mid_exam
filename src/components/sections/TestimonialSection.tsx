import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

const SAMPLE_TESTIMONIALS = [
  {
    quote: "The Angaar Labs completely transformed our online sales pipeline. Their Next.js architecture and high-energy ember aesthetic turned our site into a lead generation machine. Unmatched motion quality.",
    clientName: "Rahul Mehta (Sample Endorsement)",
    role: "Founder & CEO",
    company: "Aura Haven Estates",
    rating: 5,
    isSample: true,
  },
  {
    quote: "Working with The Angaar Labs was the best decision for our hospitality brand. They built an interactive digital menu that reduced our third-party app dependencies and boosted direct bookings by 32%.",
    clientName: "Priya Sharma (Sample Endorsement)",
    role: "Managing Director",
    company: "Velvet & Ember Roasters",
    rating: 5,
    isSample: true,
  },
  {
    quote: "When we ran our 10,000 concurrent user capsule drop, the site didn't stutter for a single millisecond. Fast, reliable, and visually head-turning. They are elite full-stack engineers.",
    clientName: "Vikram Kapoor (Sample Endorsement)",
    role: "Creative Director",
    company: "Kuro Atelier Streetwear",
    rating: 5,
    isSample: true,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#1A1614]/40 relative overflow-hidden border-b border-white/5">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            kicker="Client Endorsements"
            title="What Ambitious Leaders"
            titleGradient="Say About Our Work."
            subtitle="Read sample feedback from client founders and directors who entrusted their flagship web projects to The Angaar Labs."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {SAMPLE_TESTIMONIALS.map((t, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <Card hoverEffect variant="glass" className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="live">SAMPLE TESTIMONIAL</Badge>
                    <div className="flex items-center text-[#FACC15] text-xs">
                      {"★".repeat(t.rating)}
                    </div>
                  </div>

                  <p className="text-sm text-[#F5F5F4] italic leading-relaxed mb-6 font-normal">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F2660A] to-[#7C2D12] flex items-center justify-center text-white font-extrabold text-sm shadow-ember-sm">
                    {t.clientName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F5F4] font-heading">{t.clientName}</h4>
                    <p className="text-xs text-[#A8A29E]">
                      {t.role}, <span className="text-[#F2660A]">{t.company}</span>
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
