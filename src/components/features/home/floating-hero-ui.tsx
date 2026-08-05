"use client";

import Link from "next/link";
import React from "react";

export function FloatingHeroUI() {
  return (
    <section className="w-full h-full min-h-[90vh] relative z-10 flex items-center font-sans bg-transparent py-8 pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto">

        {/* LEFT COLUMN: Light, Bright & Crisp Typography */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Pill Badges (Crisp White Glass) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/80 text-white text-xs font-bold tracking-wide shadow-sm">
              • 100% USDA Organic
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/80 text-white text-xs font-bold tracking-wide shadow-sm">
              • Zero Added Sugar
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/80 text-white text-xs font-bold tracking-wide shadow-sm">
              • Cold-Packed Freshness
            </span>
          </div>

          {/* Main Hero Headline in Luminous Pure White */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-white leading-[1.08] tracking-tight drop-shadow-md">
            Pure Organic <br />
            <span className="text-[#F5F7EF] drop-shadow-lg">Goodness For Baby</span>
          </h1>

          {/* Subtitle Paragraph in Bright White */}
          <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-md font-semibold drop-shadow-sm">
            Boost your baby's growth, early palate, and daily nutrition with every pouch. Living-soil organic ingredients, zero preservatives!
          </p>

          {/* Search / Subscribe Pill Capsule Input (Bright Glass Capsule) */}
          <div className="pt-2 max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center bg-white/30 backdrop-blur-md border border-white/80 rounded-full p-1.5 shadow-lg">
              <input
                type="email"
                placeholder="Subscribe to pouch box..."
                className="w-full bg-transparent text-white placeholder-white/80 px-4 text-xs font-semibold focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white hover:bg-[#F5F7EF] text-[#243314] text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Bottom Left Thumbnails + Feature Banner (Enlarged Glass Badges) */}
          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/80 bg-white/30 backdrop-blur-md flex items-center justify-center p-0.5 shadow-sm">
                <img src="/images/banana-apple-cutout.png" alt="Sweet Banana & Apple" className="w-full h-full object-contain scale-125" />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/80 bg-white/30 backdrop-blur-md flex items-center justify-center p-0.5 shadow-sm">
                <img src="/images/butternut-pumpkin-cutout.png" alt="Butternut Squash & Pumpkin" className="w-full h-full object-contain scale-125" />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/80 bg-white/30 backdrop-blur-md flex items-center justify-center p-0.5 shadow-sm">
                <img src="/images/chickpea-greens-cutout.png" alt="Chickpea & Greens" className="w-full h-full object-contain scale-125" />
              </div>
              <div className="h-16 sm:h-20 px-4 rounded-2xl border border-white/80 bg-white/30 backdrop-blur-md flex items-center justify-center text-xs font-extrabold text-white uppercase tracking-wider text-center shadow-sm">
                +100 Organic Farms
              </div>
            </div>

            <div className="flex items-center gap-3 text-white pt-1 drop-shadow-sm">
              <span className="text-2xl">🌱</span>
              <h4 className="text-base sm:text-lg font-serif font-bold tracking-tight text-white">
                Pediatrician Endorsed Infant Nutrition
              </h4>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: 100% Fully Transparent Cards */}
        <div className="lg:col-span-5 space-y-6 flex flex-col items-end">
          
          {/* Top Right Card (Fully Transparent Background with Crisp White Borders & Text) */}
          <div className="w-full max-w-xs sm:max-w-sm rounded-3xl bg-transparent border border-white/80 text-white p-6 sm:p-7 space-y-5 shadow-lg">
            <span className="inline-block px-3.5 py-1 rounded-full bg-transparent border border-white/80 text-white text-[10px] font-bold uppercase tracking-wider">
              Stage 1 & Stage 2 Purees
            </span>

            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white leading-snug drop-shadow-sm">
              Help Your Baby Grow Strong, Healthy And Happy 24/7
            </h3>

            <div>
              <Link
                href="/products"
                className="w-full inline-block bg-white hover:bg-[#F5F7EF] text-[#243314] text-xs font-extrabold uppercase tracking-wider py-3.5 rounded-full text-center transition-all shadow-md"
              >
                Start Pouch Subscription →
              </Link>
            </div>
          </div>

          {/* Bottom Right Card (Fully Transparent Background with Crisp White Borders & Text) */}
          <div className="w-full max-w-xs sm:max-w-sm rounded-3xl bg-transparent border border-white/80 p-6 text-white space-y-4 shadow-lg">
            <p className="text-xs font-mono text-white font-bold uppercase tracking-widest drop-shadow-xs">
              Pouch Subscription
            </p>

            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs text-white/80 uppercase font-bold">Monthly</span>
                <p className="text-3xl font-serif font-extrabold text-white drop-shadow-xs">
                  $39 <span className="text-xs font-normal text-white/80">/Month</span>
                </p>
              </div>

              <ul className="text-xs text-white space-y-1 font-semibold text-right drop-shadow-xs">
                <li>• 16 Organic Pouches</li>
                <li>• Free Insulated Shipping</li>
                <li>• Stage 1 & 2 Custom Mix</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
