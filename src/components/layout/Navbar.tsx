"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/services" },
  { name: "Projects", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastSecondSection, setPastSecondSection] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Hero is 100vh, Second Section is min-h-screen (100vh). 
      // The second section ends roughly around 1.8 * innerHeight
      setPastSecondSection(window.scrollY > window.innerHeight * 1.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [mobileMenuOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[92%] max-w-7xl rounded-2xl",
          pastSecondSection
            ? "bg-[#0C0A09]/95 backdrop-blur-xl border-2 border-[#F2660A] shadow-[0_0_30px_rgba(242,102,10,0.4)] py-3"
            : scrolled
            ? "bg-[#0C0A09]/80 backdrop-blur-md border border-[#F2660A]/30 shadow-[0_0_15px_rgba(242,102,10,0.15)] py-3"
            : "bg-[#0C0A09]/40 backdrop-blur-sm border border-white/10 py-4"
        )}
      >
        <div className="px-6 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 text-xl font-black tracking-wider text-white select-none z-50"
          >
            <div className="relative w-10 h-10 overflow-hidden shadow-ember-glow transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Angaar Labs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-extrabold tracking-tight text-xl sm:text-2xl">
              ANGAAR<span className="text-[#F2660A]">LABS</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-semibold transition-all duration-200 z-10 select-none uppercase tracking-widest",
                    isActive
                      ? "text-[#F2660A]"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-transparent border border-white/10 text-white hover:text-[#F2660A] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span
                  className={cn(
                    "w-5 h-0.5 bg-current rounded-full transition-all duration-300 absolute",
                    mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "w-5 h-0.5 bg-current rounded-full transition-all duration-300 absolute",
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "w-5 h-0.5 bg-current rounded-full transition-all duration-300 absolute",
                    mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0C0A09]/95 backdrop-blur-3xl flex flex-col justify-center px-6 overflow-y-auto animate-in fade-in duration-300">
          <nav className="flex flex-col gap-6 relative z-10">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-3xl font-extrabold font-heading tracking-widest uppercase transition-all duration-200 text-center",
                    isActive
                      ? "text-[#F2660A]"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
