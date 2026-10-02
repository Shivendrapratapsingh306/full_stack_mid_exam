import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { getProjectBySlug, getNextProject } from "@/lib/projects";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  FlameIcon,
  ZapIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@/components/ui/icons";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | The Angaar Labs",
    };
  }

  return {
    title: `${project.title} | Case Study - The Angaar Labs`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | The Angaar Labs Case Study`,
      description: project.summary,
      images: [project.coverImage],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = await getNextProject(slug);

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-16 sm:gap-24">
      {/* 1. Project Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#7C2D12]/20 blur-[150px] pointer-events-none" />

        <Container size="large">
          <Reveal direction="up">
            <div className="max-w-4xl mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Link href="/work">
                  <Button variant="ghost" size="sm" className="text-xs">
                    ← Back to Portfolio
                  </Button>
                </Link>
                <Badge variant="live">SAMPLE CASE STUDY</Badge>
                <Badge variant="ember">{project.industryLabel}</Badge>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-[#F5F5F4] leading-[1.05] tracking-tight mb-6">
                {project.title}
              </h1>

              <p className="text-lg sm:text-2xl text-[#A8A29E] leading-relaxed font-normal">
                {project.summary}
              </p>
            </div>
          </Reveal>

          {/* High-Resolution Hero Cover Image */}
          <Reveal direction="up" delay={0.1}>
            <div className="relative h-[350px] sm:h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-ember-lg bg-[#1A1614] group">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-transparent to-transparent opacity-60" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Main Case Study Content & Sticky Sidebar */}
      <section>
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Metadata Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <Card variant="glass" className="border-[#F2660A]/30 shadow-ember-glow space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#A8A29E] block mb-1">
                    CLIENT / PARTNER
                  </span>
                  <p className="text-base font-bold text-[#F5F5F4] font-heading">
                    {project.clientName}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-[#A8A29E] block mb-1">
                    INDUSTRY SECTOR
                  </span>
                  <Badge variant="ember">{project.industryLabel}</Badge>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-[#A8A29E] block mb-1">
                    YEAR DELIVERED
                  </span>
                  <p className="text-sm font-semibold text-[#F5F5F4] font-mono">
                    {project.year}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-[#A8A29E] block mb-2">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <div className="pt-4 border-t border-white/10">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full block">
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full justify-center"
                        rightIcon={<ArrowUpRightIcon className="w-4 h-4" />}
                      >
                        Visit Live Demo
                      </Button>
                    </a>
                  </div>
                )}
              </Card>
            </div>

            {/* Editorial Case Study Body */}
            <div className="lg:col-span-8 space-y-16">
              {/* Problem Section */}
              <Reveal direction="up">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#F2660A] text-xs font-mono uppercase font-bold tracking-widest">
                    <FlameIcon className="w-4 h-4" />
                    01 // THE CHALLENGE
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F4] font-heading">
                    The Problem
                  </h2>
                  <p className="text-base sm:text-lg text-[#A8A29E] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </Reveal>

              {/* Solution Section */}
              <Reveal direction="up">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#FF8A1E] text-xs font-mono uppercase font-bold tracking-widest">
                    <ZapIcon className="w-4 h-4" />
                    02 // THE ARCHITECTURE
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F4] font-heading">
                    The Solution
                  </h2>
                  <p className="text-base sm:text-lg text-[#A8A29E] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </Reveal>

              {/* Visual Gallery Showcase */}
              {project.gallery && project.gallery.length > 0 && (
                <Reveal direction="up">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-[#FACC15] text-xs font-mono uppercase font-bold tracking-widest">
                      <SparklesIcon className="w-4 h-4" />
                      03 // VISUAL SHOWCASE
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] font-heading mb-6">
                      Project Screens & Interfaces
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.gallery.map((imgUrl, idx) => (
                        <div
                          key={idx}
                          className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#1A1614] group"
                        >
                          <Image
                            src={imgUrl}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Result & Impact */}
              <Reveal direction="up">
                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1A1614] to-[#0C0A09] border border-[#F2660A]/40 shadow-ember-glow space-y-4">
                  <div className="flex items-center gap-2 text-[#F2660A] text-xs font-mono uppercase font-bold tracking-widest">
                    <ShieldCheckIcon className="w-4 h-4" />
                    04 // MEASURABLE OUTCOMES
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] font-heading">
                    Business Result
                  </h2>
                  <p className="text-base sm:text-xl font-bold text-gradient-ember leading-relaxed">
                    "{project.result}"
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Next Project Navigation Section */}
      <section className="pt-8 border-t border-white/10">
        <Container size="large">
          <Reveal direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-12 rounded-3xl bg-[#1A1614] border border-white/10 hover:border-[#F2660A]/50 transition-all duration-300 group">
              <div>
                <span className="text-xs font-mono uppercase text-[#F2660A] font-bold block mb-2">
                  UP NEXT IN CASE STUDIES
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F4] font-heading group-hover:text-[#F2660A] transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-[#A8A29E] mt-2">
                  {nextProject.industryLabel} • {nextProject.summary}
                </p>
              </div>

              <Link href={`/work/${nextProject.slug}`} className="shrink-0">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRightIcon className="w-5 h-5" />}
                >
                  View Next Project
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
