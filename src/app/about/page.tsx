import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  FlameIcon,
  ZapIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowUpRightIcon,
} from "@/components/ui/icons";

// Sample Team Data
const TEAM_MEMBERS = [
  {
    name: "Aman Verma (Sample Profile)",
    role: "Lead Software Architect",
    bio: "Specializes in Next.js App Router, distributed systems, and MongoDB architecture.",
    skills: ["Next.js", "TypeScript", "System Design"],
    initials: "AV",
  },
  {
    name: "Riya Kapoor (Sample Profile)",
    role: "Design & Motion Lead",
    bio: "Crafts high-energy UI visual systems, 60fps Framer Motion interactions, and brand guidelines.",
    skills: ["Figma", "UI/UX", "Motion Design"],
    initials: "RK",
  },
  {
    name: "Devansh Patel (Sample Profile)",
    role: "Full-Stack Engineer",
    bio: "Focuses on Zod validation pipelines, JWT authentication, and Cloudinary media flows.",
    skills: ["Node.js", "MongoDB", "Tailwind CSS"],
    initials: "DP",
  },
];

// Studio Values
const STUDIO_VALUES = [
  {
    title: "Bold Originality",
    description: "We refuse to ship generic templates. Every pixel, transition, and layout is custom-crafted to make visitors stop and stare.",
    icon: FlameIcon,
  },
  {
    title: "60fps Motion Quality",
    description: "Motion is not an afterthought; it is our primary storytelling tool. Hardware-accelerated and smooth on every device.",
    icon: SparklesIcon,
  },
  {
    title: "Production Integrity",
    description: "Robust Zod validation, secure httpOnly JWT authentication, zero raw stack trace leaks, and clean TypeScript schemas.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Relentless Speed",
    description: "Optimized WebP media, sub-second route changes, and Lighthouse scores ≥ 85 on desktop and mobile.",
    icon: ZapIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-12 sm:py-20 flex flex-col gap-20 sm:gap-28">
      {/* Fixed Page Background */}
      <div 
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about.png')" }}
      />
      {/* Background Dark Overlay for Readability */}
      <div className="fixed inset-0 z-[-1] bg-[#0C0A09]/70" />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#7C2D12]/25 blur-[140px] pointer-events-none" />

        <Container>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <Badge variant="live" className="mb-6 shadow-ember-glow">
                ABOUT THE ANGAAR LABS
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-[#F5F5F4] leading-tight mb-6">
                We Turn Ambitious Brands Into <br />
                <span className="text-gradient-ember">Digital Category Leaders.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A8A29E] max-w-2xl leading-relaxed">
                The Angaar Labs is an elite web development studio dedicated to crafting high-energy digital products, custom Next.js applications, and flagship web experiences.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Studio Mission */}
      <section className="relative">
        <Container>
          <Reveal direction="up">
            <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1A1614] to-[#0C0A09] border border-[#F2660A]/30 shadow-ember-lg relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#F2660A]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl relative z-10">
                <Badge variant="ember" className="mb-4">
                  OUR MISSION
                </Badge>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F4] font-heading mb-6 leading-snug">
                  "To eliminate dull, generic web templates and build digital experiences that demand attention."
                </h2>
                <p className="text-base text-[#A8A29E] leading-relaxed">
                  We believe your website is your single most valuable digital asset. When a potential client lands on your page, the craft, speed, and motion of the site itself should immediately convince them that your brand is unmatched.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. Core Studio Values */}
      <section>
        <Container>
          <Reveal direction="up">
            <SectionHeading
              kicker="What Drives Us"
              title="Built On Uncompromising"
              titleGradient="Engineering Standards."
              subtitle="Our core values guide every design decision, code commit, and animation keyframe."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {STUDIO_VALUES.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <Reveal key={val.title} direction="up" delay={idx * 0.08}>
                  <Card hoverEffect glowOnHover variant="glass" className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#F2660A]/10 border border-[#F2660A]/30 flex items-center justify-center text-[#F2660A] mb-5 shadow-ember-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#F5F5F4] mb-3 font-heading">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#A8A29E] leading-relaxed">
                      {val.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Team Showcase (Sample Content) */}
      <section className="py-8">
        <Container>
          <Reveal direction="up">
            <SectionHeading
              kicker="The Craftsmen"
              title="Meet The Core"
              titleGradient="Development Team."
              subtitle="Sample profile cards showcasing our multidisciplinary engineering and design leads."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <Reveal key={member.name} direction="up" delay={idx * 0.1}>
                <Card hoverEffect variant="glass" className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F2660A] to-[#7C2D12] text-white flex items-center justify-center font-extrabold text-xl shadow-ember-sm">
                        {member.initials}
                      </div>
                      <Badge variant="live">SAMPLE PROFILE</Badge>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#F5F5F4] font-heading mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#F2660A] mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-[#A8A29E] leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="tech">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Culture & Work Ethic */}
      <section className="py-8">
        <Container>
          <Reveal direction="up">
            <SectionHeading
              kicker="Studio Culture"
              title="High Energy,"
              titleGradient="High Velocity."
              subtitle="How we collaborate and ship production-grade software at breakneck speed."
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card hoverEffect variant="glass">
              <span className="text-xs font-mono text-[#F2660A] font-bold block mb-2">01 // CULTURE</span>
              <h3 className="text-lg font-bold text-[#F5F5F4] mb-2 font-heading">Vibe Coding & Precision</h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                We leverage state-of-the-art AI tooling paired with deep manual architectural oversight to ship standard-setting applications.
              </p>
            </Card>

            <Card hoverEffect variant="glass">
              <span className="text-xs font-mono text-[#F2660A] font-bold block mb-2">02 // CULTURE</span>
              <h3 className="text-lg font-bold text-[#F5F5F4] mb-2 font-heading">Direct Developer Access</h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                No middle managers or account executives. Clients communicate directly with the software architects building their project.
              </p>
            </Card>

            <Card hoverEffect variant="glass">
              <span className="text-xs font-mono text-[#F2660A] font-bold block mb-2">03 // CULTURE</span>
              <h3 className="text-lg font-bold text-[#F5F5F4] mb-2 font-heading">Zero Compromise QA</h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Every route undergoes strict TypeScript compilation, Zod validation checks, and mobile breakpoint testing before deployment.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* 6. Page CTA */}
      <section className="pt-8">
        <Container>
          <Reveal direction="up">
            <div className="p-10 sm:p-14 rounded-3xl bg-[#1A1614] border border-[#F2660A]/30 text-center relative overflow-hidden shadow-ember-glow">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F4] font-heading mb-4">
                Ready to Work With Our Studio?
              </h2>
              <p className="text-base text-[#A8A29E] max-w-xl mx-auto mb-8">
                Let’s collaborate to build your flagship digital presence.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowUpRightIcon className="w-5 h-5" />}>
                  START A PROJECT TODAY
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
