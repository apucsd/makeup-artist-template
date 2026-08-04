import Link from "next/link";
import React from "react";
import { siteConfig } from "@/config/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white py-24 md:py-36">
      {/* Dynamic Glow Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-amber-900/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text & Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Luxury Bridal & Editorial Artistry</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[1.1] text-white">
              Unveil Your Natural <br />
              <span className="italic font-light text-amber-200 underline decoration-amber-500/40 underline-offset-8">
                Radiant Luster
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed">
              {siteConfig.artist.bio} High-definition skin preparation, bespoke color harmony, and long-wear luxury techniques tailored for your most memorable moments.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold px-8 py-4 rounded-full text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-400/20"
              >
                Reserve Your Date
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center border border-neutral-700/80 bg-neutral-900/50 hover:bg-neutral-800 text-white font-medium px-8 py-4 rounded-full text-base transition-all backdrop-blur-md"
              >
                View Lookbook Gallery
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-neutral-800/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-3xl font-serif font-medium text-white">10+</p>
                <p className="text-xs text-neutral-400 font-mono mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-medium text-white">450+</p>
                <p className="text-xs text-neutral-400 font-mono mt-1">Happy Brides</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-medium text-white">5.0 ★</p>
                <p className="text-xs text-neutral-400 font-mono mt-1">Client Rating</p>
              </div>
            </div>
          </div>

          {/* Luxury Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/30 to-amber-900/10 blur-xl opacity-75" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop"
                  alt="Luxury Bridal Makeup"
                  className="w-full h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Floating Artist Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 shadow-lg flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 border border-amber-400">
                    <img
                      src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=200&auto=format&fit=crop"
                      alt={siteConfig.artist.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-serif font-semibold text-white">{siteConfig.artist.name}</p>
                    <p className="text-xs font-mono text-amber-300">{siteConfig.artist.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
