"use client";

import React, { useState, useEffect, useTransition, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard, ProjectCardSkeleton } from "@/components/work/ProjectCard";
import { getProjects } from "@/lib/projects";
import { ProjectData } from "@/content/projectsData";
import { FlameIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = [
  { label: "All Sectors", value: "ALL" },
  { label: "Real Estate", value: "REAL_ESTATE" },
  { label: "Cafe & Dining", value: "CAFE" },
  { label: "Clothing & Apparel", value: "CLOTHING" },
  { label: "Healthcare", value: "HEALTHCARE" },
  { label: "Enterprise CRM", value: "CRM" },
  { label: "E-Commerce", value: "ECOMMERCE" },
  { label: "Custom Apps", value: "OTHER" },
];

function WorkPageInner() {
  const searchParams = useSearchParams();
  const initialIndustry = searchParams.get("industry") || "ALL";

  const [activeFilter, setActiveFilter] = useState<string>(initialIndustry);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchProjectsData = async (industryFilter: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProjects({ industry: industryFilter });
      setProjects(data);
    } catch (err: any) {
      setError(err?.message || "Failed to load projects portfolio.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectsData(activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (value: string) => {
    startTransition(() => {
      setActiveFilter(value);
    });
  };

  return (
    <>
      {/* 2. Interactive Industry Filter Bar */}
      <section className="sticky top-[73px] z-30 py-4 bg-[#0C0A09]/90 backdrop-blur-xl border-y border-white/10">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => handleFilterChange(cat.value)}
                  className={cn(
                    "relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300 select-none",
                    isActive
                      ? "text-white bg-[#F2660A] shadow-ember-glow"
                      : "text-[#A8A29E] bg-[#1A1614] border border-white/10 hover:text-white hover:border-[#F2660A]/50"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Portfolio Grid Section */}
      <section className="mt-12">
        <Container>
          {error && (
            <div className="p-8 rounded-3xl bg-[#1A1614] border border-red-500/30 text-center max-w-xl mx-auto my-12">
              <p className="text-red-400 font-semibold mb-4">{error}</p>
              <Button variant="primary" onClick={() => fetchProjectsData(activeFilter)}>
                Retry Loading
              </Button>
            </div>
          )}

          {(loading || isPending) && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && !isPending && !error && projects.length === 0 && (
            <div className="p-12 sm:p-16 rounded-3xl bg-[#1A1614] border border-white/10 text-center max-w-2xl mx-auto my-12">
              <div className="w-12 h-12 rounded-xl bg-[#F2660A]/20 flex items-center justify-center text-[#F2660A] mx-auto mb-4">
                <FlameIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F4] font-heading mb-2">
                No Case Studies Found
              </h3>
              <p className="text-sm text-[#A8A29E] mb-6">
                We haven't added sample case studies for this specific industry filter yet. Select another sector or get in touch for custom samples.
              </p>
              <Button variant="secondary" onClick={() => setActiveFilter("ALL")}>
                View All Projects
              </Button>
            </div>
          )}

          {!loading && !isPending && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="transition-all duration-300 ease-out"
                >
                  <ProjectCard project={project} priority={index < 3} />
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

export default function WorkPage() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      }

      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Pause initially
    if (videoRef.current) {
      videoRef.current.pause();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen py-12 sm:py-20 flex flex-col gap-16 sm:gap-24">
      {/* Fixed Video Background - Plays only on scroll */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover object-center z-[-2] pointer-events-none"
      >
        <source src="/projects.mp4" type="video/mp4" />
      </video>
      {/* Background Dark Overlay for Readability */}
      <div className="fixed inset-0 z-[-1] bg-[#0C0A09]/75 pointer-events-none" />

      {/* 1. Portfolio Hero Header */}
      <section className="relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#7C2D12]/25 blur-[140px] pointer-events-none" />

        <Container>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <Badge variant="live" className="mb-6 shadow-ember-glow">
                OUR CASE STUDIES
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-[#F5F5F4] leading-tight mb-6">
                Flagship Work & <br />
                <span className="text-gradient-ember">Digital Products That Scale.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A8A29E] max-w-2xl leading-relaxed">
                Explore sample case studies showcasing our Next.js engineering, UI/UX motion design, and high-conversion e-commerce solutions.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2 & 3. Suspense-wrapped filter and portfolio grid */}
      <Suspense fallback={<div className="p-8 text-center text-[#A8A29E]">Loading portfolio grid...</div>}>
        <WorkPageInner />
      </Suspense>

      {/* 4. Portfolio Bottom CTA */}
      <section className="pt-8">
        <Container>
          <Reveal direction="up">
            <div className="p-12 sm:p-16 rounded-3xl bg-[#1A1614] border border-[#F2660A]/30 text-center relative overflow-hidden shadow-ember-glow">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F4] font-heading mb-4">
                Have a Unique Project Requirement?
              </h2>
              <p className="text-base text-[#A8A29E] max-w-xl mx-auto mb-8">
                We craft custom digital platforms tailored to your specific industry goals.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowUpRightIcon className="w-5 h-5" />}>
                  DISCUSS YOUR PROJECT
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
