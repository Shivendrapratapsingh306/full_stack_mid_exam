"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SAMPLE_PROJECTS } from "@/content/projectsData";
import { ArrowUpRightIcon, ArrowRightIcon } from "@/components/ui/icons";

export function FeaturedWorkSection() {
  const featuredProjects = SAMPLE_PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-[#0C0A09] relative overflow-hidden border-b border-white/5">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C2D12]/20 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <SectionHeading
              kicker="Featured Portfolio"
              title="Flagship Case Studies &"
              titleGradient="Digital Craft."
              subtitle="Explore sample case studies demonstrating our UI/UX design, Next.js engineering, and performance optimization."
              className="mb-0 max-w-2xl"
            />
            <Link href="/work" className="mt-6 md:mt-0 shrink-0">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowUpRightIcon className="w-4 h-4" />}
              >
                Explore Full Portfolio
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* Featured Projects Grid */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={index * 0.1}>
              <div className="group relative rounded-3xl bg-[#1A1614] border border-white/10 overflow-hidden hover:border-[#F2660A]/50 hover:shadow-ember-glow transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Project Media Thumbnail with Hover Parallax Zoom */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden bg-[#0C0A09]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1A1614] opacity-90" />
                  
                  {/* Sample Badge Indicator */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="live" className="bg-[#0C0A09]/80 backdrop-blur-md">
                      SAMPLE CASE STUDY
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="ember">{project.industryLabel}</Badge>
                      <span className="text-xs font-semibold text-[#A8A29E] font-mono">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] mb-4 font-heading group-hover:text-[#F2660A] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#A8A29E] leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="tech">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Link Button */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#A8A29E]">Client: {project.clientName}</span>
                    <Link href={`/work/${project.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:text-[#F2660A]"
                        rightIcon={<ArrowRightIcon className="w-4 h-4" />}
                      >
                        Read Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
