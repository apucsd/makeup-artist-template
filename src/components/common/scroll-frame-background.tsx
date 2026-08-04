"use client";

import React, { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 240;

const getFramePath = (index: number) => {
  const frameNumber = String(index + 1).padStart(3, "0");
  return `/hero-frames/ezgif-frame-${frameNumber}.jpg`;
};

export function ScrollFrameBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);

  // Preload frames into memory
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // Draw frame to canvas maintaining cover aspect ratio
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const x = (canvasWidth - imgWidth * scale) / 2;
    const y = (canvasHeight - imgHeight * scale) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
  };

  // Resize canvas handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawFrame(currentFrame);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentFrame]);

  // Global page scroll listener mapping 0%..100% document height to frame 0..239
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;

          const frameIndex = Math.min(
            Math.floor(progress * (TOTAL_FRAMES - 1)),
            TOTAL_FRAMES - 1
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

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Full Viewport Canvas */}
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover opacity-50 filter saturate-125 transition-opacity duration-300"
      />

      {/* Luxury Vignette & Dark Overlay for Text Legibility across the website */}
      <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/90" />

      {/* Floating Bottom-Right Frame Scrub Pill */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto bg-neutral-900/90 border border-amber-500/40 text-white px-4 py-2 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs font-mono">
        <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-amber-300 font-semibold">
          FRAME {String(currentFrame + 1).padStart(3, "0")} / {TOTAL_FRAMES}
        </span>
        <span className="text-neutral-400 border-l border-neutral-700 pl-2">
          {Math.round(((currentFrame + 1) / TOTAL_FRAMES) * 100)}% PAGE SCROLL
        </span>
      </div>
    </div>
  );
}
