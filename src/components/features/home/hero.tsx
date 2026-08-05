"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

const TOTAL_USER_FRAMES = 112;

const getUserFramePath = (index: number) => {
  const frameNumber = String(index + 1).padStart(3, "0");
  return `/user-hero-frames/frame-${frameNumber}.jpg`;
};

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Preload extracted 2944x1170 Ultra-HD frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_USER_FRAMES; i++) {
      const img = new Image();
      img.src = getUserFramePath(i);
      img.onload = () => {
        if (i === 0) {
          drawFrame(0);
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // Instant 60fps Canvas Drawing with HiDPI Retina support
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = canvas.clientWidth || window.innerWidth;
    const displayHeight = canvas.clientHeight || window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const canvasWidth = displayWidth;
    const canvasHeight = displayHeight;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const x = (canvasWidth - imgWidth * scale) / 2;
    const y = (canvasHeight - imgHeight * scale) / 2;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    ctx.restore();
  };

  // Resize canvas handler
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrame);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentFrame]);

  // Sticky Scroll Handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const containerTop = containerRef.current.offsetTop;
          const containerHeight = containerRef.current.clientHeight;
          const viewportHeight = window.innerHeight;
          const scrollY = window.scrollY;

          const maxScrollableDistance = containerHeight - viewportHeight;
          const relativeScroll = scrollY - containerTop;
          const progress = maxScrollableDistance > 0
            ? Math.min(Math.max(relativeScroll / maxScrollableDistance, 0), 1)
            : 0;

          setScrollProgress(progress);

          const frameIndex = Math.min(
            Math.floor(progress * (TOTAL_USER_FRAMES - 1)),
            TOTAL_USER_FRAMES - 1
          );

          setCurrentFrame(frameIndex);
          drawFrame(frameIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll-driven text fade
  const textOpacity = scrollProgress > 0.03
    ? Math.max(0, 1 - (scrollProgress - 0.03) * 6)
    : 1;

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-transparent">
      {/* Sticky Viewport Shell */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Full Viewport Canvas Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <canvas
            ref={canvasRef}
            className="h-full w-full object-cover opacity-100"
          />
        </div>

        {/* Content Typography Overlay - Hidden on Mobile, Shown on Desktop/Tablet */}
        <div
          className="hidden sm:flex relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 transition-all duration-300 ease-out flex-col justify-between h-full"
          style={{
            opacity: textOpacity,
            transform: `translateY(${(-1 + textOpacity) * 20}px)`,
            pointerEvents: textOpacity < 0.1 ? "none" : "auto",
          }}
        >
          {/* Spacer for Navbar */}
          <div className="h-24" />



          {/* Bottom Scroll Cue */}
          <div className="text-center animate-bounce text-xs font-mono text-emerald-900 font-semibold tracking-widest uppercase pb-4">
            ↓ Scroll down to explore pouch animation
          </div>
        </div>

        {/* Minimal Scroll Indicator for Mobile Devices */}
        <div className="sm:hidden absolute bottom-6 inset-x-0 z-10 text-center animate-bounce text-xs font-mono text-emerald-950 font-bold tracking-widest uppercase pointer-events-none drop-shadow-md">
          ↓ SCROLL DOWN
        </div>

        {/* Floating Frame Badge when text is hidden */}
        {textOpacity < 0.2 && (
          <div className="absolute bottom-6 right-6 z-20 bg-emerald-950/90 border border-emerald-400/50 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono backdrop-blur-md shadow-2xl transition-all duration-300 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-200 font-semibold">
              ANIMATION {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
