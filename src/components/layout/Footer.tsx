"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ArrowUpIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0C0A09] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Ember Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#7C2D12]/20 blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10 relative z-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 text-2xl font-black text-white mb-4">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-ember-glow border border-[#F2660A]/40 bg-black flex items-center justify-center">
                  <Image
                    src="/logo.jpg"
                    alt="The Angaar Labs Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="font-extrabold tracking-tight">
                  ANGAAR<span className="text-[#F2660A]">LABS</span>
                </span>
              </Link>
              <p className="text-[#A8A29E] text-sm leading-relaxed max-w-sm">
                We craft high-energy, world-class digital products and web experiences that turn heads, spark action, and scale ambitious brands.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs text-[#A8A29E]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span>Available for new projects in Q4 2026</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F4] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A8A29E]">
              <li>
                <Link href="/" className="hover:text-[#F2660A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F2660A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-[#F2660A] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F2660A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#F2660A] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F2660A] transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F4] mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A8A29E]">
              <li>Web Architecture</li>
              <li>Custom Next.js Apps</li>
              <li>UI/UX & Motion Design</li>
              <li>E-Commerce Solutions</li>
              <li>Headless CMS & APIs</li>
              <li>Performance Audits</li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F4] mb-4">
              Connect
            </h4>
            <p className="text-sm text-[#A8A29E] mb-4">
              Have a high-impact project in mind? Let’s spark a conversation.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#1A1614] border border-white/10 text-[#A8A29E] hover:text-[#F2660A] hover:border-[#F2660A]/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#1A1614] border border-white/10 text-[#A8A29E] hover:text-[#F2660A] hover:border-[#F2660A]/40 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#1A1614] border border-white/10 text-[#A8A29E] hover:text-[#F2660A] hover:border-[#F2660A]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@angaarlabs.dev"
                className="p-2.5 rounded-lg bg-[#1A1614] border border-white/10 text-[#A8A29E] hover:text-[#F2660A] hover:border-[#F2660A]/40 transition-colors"
                aria-label="Email"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A29E]">
          <p>© {new Date().getFullYear()} The Angaar Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Crafted with passion & motion</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              leftIcon={<ArrowUpIcon className="w-3.5 h-3.5" />}
              className="text-xs py-1 px-2.5"
            >
              Back to top
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
