"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
  color: string;
}

export function EmberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette for embers
    const emberColors = [
      "rgba(242, 102, 10, ",  // Primary Ember #F2660A
      "rgba(255, 138, 30, ",  // Secondary Flame #FF8A1E
      "rgba(250, 204, 21, ",  // Gold Spark #FACC15
      "rgba(124, 45, 18, ",   // Ember Glow #7C2D12
    ];

    const particleCount = Math.min(Math.floor(width / 35), 45);
    const particles: Particle[] = [];

    const createParticle = (isInitial = false): Particle => {
      const maxOpacity = Math.random() * 0.6 + 0.2;
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + Math.random() * 50,
        size: Math.random() * 2.5 + 0.8,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: isInitial ? Math.random() * maxOpacity : 0,
        maxOpacity,
        fadeSpeed: Math.random() * 0.008 + 0.003,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move upward with subtle drift
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.15;

        // Fade in when starting, fade out as it rises near top
        if (p.y > height * 0.7 && p.opacity < p.maxOpacity) {
          p.opacity += p.fadeSpeed;
        } else if (p.y < height * 0.3) {
          p.opacity -= p.fadeSpeed * 1.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.opacity)})`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = "#F2660A";
        ctx.fill();

        // Reset particle if out of bounds or invisible
        if (p.y < -20 || p.opacity <= 0) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
