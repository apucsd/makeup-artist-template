"use client";

import React, { useEffect, useRef, useState } from "react";

const TOTAL_USER_FRAMES = 112;

const getUserFramePath = (index: number) => {
  const frameNumber = String(index + 1).padStart(3, "0");
  return `/user-hero-frames/frame-${frameNumber}.jpg`;
};

interface HomeHeroProps {
  children?: React.ReactNode;
}

export function HomeHero({ children }: HomeHeroProps) {
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

  // Fast Parallax Scroll Handler (180vh scroll height for immediate responsive feel)
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

  // Immediate upward parallax translation: starts moving up right away on scroll
  const parallaxOffset = Math.max(0, (1 - scrollProgress) * 75);

  return (
    <div ref={containerRef} className="relative h-[180vh] bg-transparent">
      {/* Sticky Viewport Shell for 3D Canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover opacity-100"
        />
      </div>

      {/* Parallax Overlay Container - Ascends Immediately & Smoothly */}
      {children && (
        <div
          className="relative z-10 w-full transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${parallaxOffset}vh)`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
