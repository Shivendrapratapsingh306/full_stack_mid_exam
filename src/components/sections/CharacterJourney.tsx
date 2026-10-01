"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BASE_FRAMES = [
  "/character/walk-1.png",
  "/character/walk-2.png",
  "/character/walk-3.png",
  "/character/walk-4.png"
];

export function CharacterJourney() {
  const characterRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [frameSrc, setFrameSrc] = useState("/character/idle.png");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleFrameUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setFrameSrc(customEvent.detail);
    };
    window.addEventListener('character-frame-update', handleFrameUpdate);

    // Preload all character images to prevent flickering/blank frames
    const allImages = ["/character/idle.png", ...BASE_FRAMES, "/character/idle-2.png"];
    allImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Add a slight delay to ensure layout is painted
    let ctx: gsap.Context;
    const initTimer = setTimeout(() => {
      const wrapper = document.getElementById("hero-about-wrapper");
      const textContainer = document.getElementById("about-text-container");

      if (!wrapper || !characterRef.current || !textContainer) return;

      ctx = gsap.context(() => {
        let currentFrameSrc = "/character/idle.png";

        gsap.to(characterRef.current, {
          x: () => {
            const t = characterRef.current!.style.transform;
            characterRef.current!.style.transform = "none";
            const charRect = characterRef.current!.getBoundingClientRect();
            characterRef.current!.style.transform = t;
            
            const textRect = textContainer.getBoundingClientRect();
            
            // The character artwork is anchored to the RIGHT side of the charRect bounding box (justify-end).
            // We want the LEFT side of the visible artwork to be exactly at `textRect.right + gap`.
            const visibleCharWidth = charRect.width * 0.5; // Dynamically scale visual width estimate
            const targetVisualLeft = textRect.right + 150; // Pushed much further right
            const targetVisualRight = targetVisualLeft + visibleCharWidth;
            
            // Since the artwork is on the right edge of charRect, targetVisualRight is the new charRect.right
            // So targetX (the new charRect.left) is:
            let targetX = targetVisualRight - charRect.width;
            
            // Safety constraint: Never walk off the right screen edge
            const maxAllowedX = window.innerWidth - charRect.width;
            targetX = Math.min(targetX, maxAllowedX);
            targetX = Math.max(targetX, 0); // never off left edge
            
            return targetX - charRect.left;
          },
          y: () => {
            const t = characterRef.current!.style.transform;
            characterRef.current!.style.transform = "none";
            const charRect = characterRef.current!.getBoundingClientRect();
            characterRef.current!.style.transform = t;
            
            const textRect = textContainer.getBoundingClientRect();
            
            // Vertically center the character with the text block
            const textCenter = textRect.top + textRect.height / 2;
            const charCenter = charRect.top + charRect.height / 2;
            
            return textCenter - charCenter;
          },
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              let nextSrc = "/character/idle.png";
              
              if (p >= 0.99) {
                nextSrc = "/character/idle-2.png";
              } else if (p > 0.01) {
                const cycles = 8;
                const frameIndex = Math.floor(p * BASE_FRAMES.length * cycles) % BASE_FRAMES.length;
                nextSrc = BASE_FRAMES[frameIndex];
              }
              
              if (nextSrc !== currentFrameSrc) {
                currentFrameSrc = nextSrc;
                
                if (characterRef.current) {
                  const img = characterRef.current.querySelector('img');
                  if (img) img.src = nextSrc;
                }
                
                window.dispatchEvent(new CustomEvent('character-frame-update', { detail: nextSrc }));
              }
            },
          }
        });
        
        window.addEventListener("resize", () => {
          ScrollTrigger.refresh();
        });
      }, wrapper);
    }, 100);

    return () => {
      window.removeEventListener('character-frame-update', handleFrameUpdate);
      clearTimeout(initTimer);
      if (ctx) ctx.revert();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={characterRef}
      className="absolute bottom-[-5vh] right-[100%] mr-0 md:-mr-4 lg:-mr-8 xl:-mr-16 z-[15] pointer-events-none opacity-80 md:opacity-100 flex justify-end items-end"
      style={{ 
        height: "clamp(400px, 70vh, 700px)",
        width: "clamp(400px, 70vh, 700px)", // Lock the bounding box perfectly square to prevent layout shifts
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={frameSrc} 
        alt="Character" 
        className="w-full h-full object-contain object-bottom" 
      />
    </div>
  );
}
