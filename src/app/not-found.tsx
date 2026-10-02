import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FlameIcon, ArrowRightIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36 min-h-[70vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7C2D12]/30 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <Badge variant="live" className="mb-6 shadow-ember-glow">
            404 • PAGE NOT FOUND
          </Badge>

          <div className="w-16 h-16 rounded-2xl bg-[#F2660A]/15 border border-[#F2660A]/40 flex items-center justify-center text-[#F2660A] mb-6 shadow-ember-sm">
            <FlameIcon className="w-8 h-8 animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F5F4] mb-4">
            Lost In The Embers.
          </h1>

          <p className="text-base sm:text-lg text-[#A8A29E] mb-8 leading-relaxed">
            The page or case study you are looking for doesn't exist or has been moved. Explore our work portfolio or return to the homepage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/work">
              <Button variant="primary" size="md" rightIcon={<ArrowRightIcon className="w-4 h-4" />}>
                Explore Work Portfolio
              </Button>
            </Link>
            <Link href="/">
              <Button variant="secondary" size="md">
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
