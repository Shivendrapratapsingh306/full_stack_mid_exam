import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden min-h-screen flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/video-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0C0A09]/60 z-[1]" />
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <Reveal direction="up" className="md:col-start-2 md:col-span-8 lg:col-start-3 lg:col-span-6">
            <div id="about-text-container" className="relative">
              <SectionHeading
                kicker="Who We Are"
                title="We Build"
                titleGradient="Ideas That Move."
                subtitle="Angaar Labs is a premium web development and motion design studio. We craft digital experiences that demand attention and drive results."
                className="mb-8 max-w-xl"
              />
              <Link href="/about">
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRightIcon className="w-4 h-4" />}
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
