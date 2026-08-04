import Link from "next/link";
import React from "react";
import { SectionHeader } from "@/components/common/section-header";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About the Artist | Aura Beauty & Artistry",
  description: "Learn about lead artist Elena Rostova, her beauty philosophy, credentials, and artistry approach.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 space-y-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Behind the Artistry"
          title={`About ${siteConfig.artist.name}`}
          description={siteConfig.artist.role}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Artist Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop"
                alt={siteConfig.artist.name}
                className="w-full h-[520px] object-cover object-center"
              />
            </div>
          </div>

          {/* Artist Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-base">
            <h3 className="font-serif text-2xl font-semibold text-neutral-900">
              "Beauty isn't about masking who you are—it's about enhancing your authentic luminescence."
            </h3>

            <p>
              For over a decade, Elena has worked with brides, celebrities, and fashion houses to deliver timeless, elevated makeup looks. Trained under industry masters in Paris and Los Angeles, her signature style blends skin-first hydration with precise color harmonization.
            </p>

            <p>
              Whether preparing a bride for her walk down the aisle or crafting a bold editorial concept for print campaigns, Elena brings an atmosphere of calm confidence, meticulous hygiene, and luxurious care to every chair.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-sm font-medium text-neutral-900 border-t border-neutral-200">
              <div>
                <span className="block text-xs font-mono text-amber-700 uppercase">Specialization</span>
                Luxury Bridal & Soft Glam
              </div>
              <div>
                <span className="block text-xs font-mono text-amber-700 uppercase">Location Base</span>
                {siteConfig.artist.location}
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-8 py-3.5 font-medium transition-colors"
              >
                Reserve an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
