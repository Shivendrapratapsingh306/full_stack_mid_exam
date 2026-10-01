"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

import { CharacterJourney } from "@/components/sections/CharacterJourney";

export function AngaarHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const supportingRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      const chars = titleRef.current?.querySelectorAll(".char");
      
      if (chars) {
        tl.fromTo(
          chars,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: "back.out(1.7)" },
          "+=0.2"
        );
      }

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        supportingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.2"
      );

      if (titleRef.current) {
        gsap.to(titleRef.current, {
          textShadow: "0px 0px 20px rgba(242,102,10,0.5)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[700px] flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/70 via-[#0C0A09]/50 to-[#0C0A09] z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex justify-center mt-12 md:mt-0">
        <div className="relative flex flex-col items-center text-center">
          
          <CharacterJourney />

          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-9xl font-black font-heading tracking-tighter text-white mb-4"
          >
            {"ANGAAR LABS".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p 
            ref={subtitleRef}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F2660A] mb-6 tracking-tight drop-shadow-lg"
          >
            Building Ideas That Move.
          </p>

          <p 
            ref={supportingRef}
            className="text-lg md:text-xl text-white/80 max-w-2xl font-medium mb-10 drop-shadow-md"
          >
            Technology, creativity and innovation brought together.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="#about">
              <Button variant="primary" size="lg" className="shadow-ember-lg text-lg px-8">
                Explore
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRightIcon className="w-5 h-5" />} className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 text-lg px-8">
                Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-80">
        <span className="text-xs font-bold uppercase tracking-widest text-white/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
