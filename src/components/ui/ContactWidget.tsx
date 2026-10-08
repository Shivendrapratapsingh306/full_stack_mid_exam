"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function ContactWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const heroAboutWrapper = document.getElementById("hero-about-wrapper");
      
      if (heroAboutWrapper) {
        // We are on the homepage where the Hero and 2nd section are wrapped together.
        // We check the physical bounding rect of that wrapper.
        const rect = heroAboutWrapper.getBoundingClientRect();
        
        // If rect.bottom is less than or equal to 0, the entire wrapper 
        // (Hero + 2nd Section) has completely scrolled off the top of the viewport.
        // We use a small threshold (like 0 or 50) to make it feel responsive.
        setIsVisible(rect.bottom <= 50);
      } else {
        // For other pages, we can show it after a tiny scroll so it doesn't 
        // instantly pop in on initial load, keeping a consistent feel.
        setIsVisible(window.scrollY > 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial state on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/contact") {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-700 ease-[cubic-bezier(0.215,0.61,0.355,1)] flex items-end",
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <Link href="/contact" className="group flex items-center gap-4 animate-float transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-[0_0_15px_rgba(242,102,10,0.3)]">
        {/* Contact Text Bubble */}
        <div className="bg-[#0C0A09]/90 backdrop-blur-md border border-[#F2660A]/40 text-[#F5F5F4] text-sm md:text-base font-bold py-3 px-6 rounded-full shadow-ember-sm transition-all duration-300 group-hover:border-[#F2660A] group-hover:text-[#F2660A] group-hover:shadow-[0_0_25px_rgba(242,102,10,0.6)]">
          Contact Us
        </div>
        
        {/* Character Image */}
        <img
          src="/character/contact-us.png"
          alt="Contact Us"
          className="h-16 md:h-20 w-auto object-contain"
        />
      </Link>
    </div>
  );
}
