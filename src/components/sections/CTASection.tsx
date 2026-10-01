import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRightIcon, FlameIcon } from "@/components/ui/icons";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-[#0C0A09] relative overflow-hidden text-center">
      {/* Intense Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-[#7C2D12]/40 via-[#F2660A]/25 to-[#FF8A1E]/30 rounded-full blur-[150px] pointer-events-none animate-ember-pulse" />

      <Container size="default" className="relative z-10">
        <Reveal direction="up">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <Badge variant="live" className="mb-6 shadow-ember-glow">
              READY TO IGNITE YOUR BRAND?
            </Badge>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-[#F5F5F4] leading-[1.08] mb-6">
              Have a Project in Mind? <br />
              <span className="text-gradient-ember">Let’s Spark a Conversation.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#A8A29E] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Whether you need a flagship website, custom Next.js application, or full visual redesign, our studio is ready to build it.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="text-base sm:text-lg py-4 px-9 shadow-ember-lg"
                  rightIcon={<ArrowUpRightIcon className="w-5 h-5" />}
                >
                  START A PROJECT TODAY
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-base sm:text-lg py-4 px-8"
                  leftIcon={<FlameIcon className="w-5 h-5 text-[#F2660A]" />}
                >
                  Explore Work Grid
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
