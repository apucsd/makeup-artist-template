"use client";

import React, { useState } from "react";
import { BeforeAfterItem } from "@/types/before-after";

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
}

export function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-10 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-6">
        <div>
          <span className="text-xs font-mono text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/50">
            {item.category}
          </span>
          <h3 className="font-serif text-2xl font-semibold text-neutral-900 mt-2">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-600 mt-1 max-w-xl">
            {item.description}
          </p>
        </div>
        <div className="text-xs font-mono text-neutral-400 bg-neutral-100 px-3 py-2 rounded-lg self-start md:self-auto">
          ↔ Drag Slider to Compare
        </div>
      </div>

      {/* Slider Container */}
      <div
        className="relative h-[360px] sm:h-[460px] w-full overflow-hidden rounded-2xl select-none cursor-ew-resize touch-none shadow-md"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full background) */}
        <img
          src={item.afterImage}
          alt={`${item.title} - After`}
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        />
        <span className="absolute top-4 right-4 z-10 bg-neutral-900/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          After Glam ✨
        </span>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={item.beforeImage}
            alt={`${item.title} - Before`}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Before (Bare Skin)
          </span>
        </div>

        {/* Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-xl pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-xl border border-neutral-200 text-xs font-bold">
            ↔
          </div>
        </div>
      </div>

      {/* Skin Prep Badges */}
      {item.prepDetails && (
        <div className="pt-2 flex flex-wrap gap-2">
          {item.prepDetails.map((detail, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-100/80 px-3 py-1.5 rounded-full"
            >
              <span className="text-amber-600">✦</span> {detail}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
