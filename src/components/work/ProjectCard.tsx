"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectData } from "@/content/projectsData";
import { ArrowUpRightIcon } from "@/components/ui/icons";

interface ProjectCardProps {
  project: ProjectData;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="block group h-full">
      <div className="rounded-3xl bg-[#1A1614] border border-white/10 overflow-hidden h-full flex flex-col justify-between group-hover:border-[#F2660A]/50 group-hover:shadow-ember-glow transition-all duration-500 relative">
        <div>
          {/* Media Thumbnail Container */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0C0A09]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-transparent opacity-90" />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <Badge variant="live" className="bg-[#0C0A09]/80 backdrop-blur-md">
                SAMPLE CASE STUDY
              </Badge>
              {project.featured && (
                <Badge variant="gold" className="bg-[#0C0A09]/80 backdrop-blur-md">
                  FEATURED
                </Badge>
              )}
            </div>
          </div>

          {/* Card Content Details */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="ember">{project.industryLabel}</Badge>
              <span className="text-xs font-mono text-[#A8A29E]">{project.year}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#F5F5F4] mb-3 font-heading group-hover:text-[#F2660A] transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="text-sm text-[#A8A29E] leading-relaxed mb-6 line-clamp-3">
              {project.summary}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="tech">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A8A29E]">
          <span className="truncate max-w-[200px]">{project.clientName}</span>
          <span className="text-[#F2660A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Case Study
            <ArrowUpRightIcon className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * Skeleton Loader Component for ProjectCard
 */
export function ProjectCardSkeleton() {
  return (
    <div className="rounded-3xl bg-[#1A1614] border border-white/5 overflow-hidden h-[450px] animate-pulse flex flex-col justify-between">
      <div>
        <div className="h-64 w-full bg-[#26201D]" />
        <div className="p-6 space-y-4">
          <div className="h-4 w-24 bg-[#26201D] rounded-full" />
          <div className="h-7 w-3/4 bg-[#26201D] rounded-lg" />
          <div className="h-4 w-full bg-[#26201D] rounded" />
          <div className="h-4 w-2/3 bg-[#26201D] rounded" />
        </div>
      </div>
      <div className="p-6 border-t border-white/5 flex justify-between">
        <div className="h-4 w-32 bg-[#26201D] rounded" />
        <div className="h-4 w-20 bg-[#26201D] rounded" />
      </div>
    </div>
  );
}
