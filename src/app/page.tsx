import Link from "next/link";
import React from "react";
import { HomeHero } from "@/components/features/home/hero";
import { FloatingHeroUI } from "@/components/features/home/floating-hero-ui";
import { OurMission } from "@/components/features/home/our-mission";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "@/components/features/services/service-card";
import { PortfolioGrid } from "@/components/features/portfolio/portfolio-grid";
import { FAQAccordion } from "@/components/features/faq/faq-accordion";
import { InstagramFeed } from "@/components/features/instagram/instagram-feed";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
import { testimonialsData } from "@/data/testimonials";

export default function HomePage() {
  const featuredProducts = servicesData.filter((s) => s.popular);
  const featuredIngredients = portfolioData.filter((p) => p.featured);

  return (
    <div className="pb-28 bg-transparent">
      {/* 1. 3D Pouch Canvas Hero with Floating Glass UI Overlay & Parallax Mission */}
      <HomeHero>
        <FloatingHeroUI />
      </HomeHero>
      <OurMission />

      <div className="space-y-28 pt-24">
        {/* 3. Farm Promise & Organic Philosophy Banner (Pastel Green Style) */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#EAECE1] text-[#2B3B18] p-8 md:p-14 border border-[#85966E] shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#A4C46A]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono text-[#48592B] font-bold uppercase tracking-widest">
                  🌱 100% USDA Certified Organic Farm Promise
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-snug text-[#18260B]">
                  "Zero added sugar, zero preservatives, and living-soil cultivation for nutrient-dense infant nutrition."
                </h2>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-[#688542] hover:bg-[#48592B] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors shadow-sm uppercase tracking-wider"
                >
                  Our Farm Story →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Featured Puree Catalog */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Stage 1 & Stage 2 Purees"
            title="Featured Organic Purees"
            description="Cold-packed nutrient dense fruit, veggie, and grain purees designed for your baby's key development stages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-[#85966E] bg-white px-8 py-3.5 text-sm font-bold text-[#243314] hover:bg-[#243314] hover:text-white transition-colors shadow-sm uppercase tracking-wider"
            >
              Explore Full Puree Catalog →
            </Link>
          </div>
        </section>

        {/* 5. Ingredient Pairings & Nutrition Standards Showcase */}
        <section className="bg-[#EAECE1]/60 py-24 border-y border-[#D6DBC4]/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Nutritional Excellence"
              title="Superfood & Organic Ingredient Pairings"
              description="Explore how we pair organic butternut squash, golden pumpkin, sweet bananas, fresh apples, and chickpeas."
            />

            <PortfolioGrid items={featuredIngredients} showFilters={false} />

            <div className="mt-12 text-center">
              <Link
                href="/ingredients-flavors"
                className="inline-flex items-center justify-center bg-[#688542] hover:bg-[#48592B] text-white rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                Explore All Ingredient Pairings
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Pediatrician & Parent Reviews */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Parent & Doctor Endorsed"
            title="What Parents & Pediatricians Say"
            description="Read real experiences from parents and pediatricians who trust CoveValley for early infant nutrition."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-8 border border-[#DCE1CF] shadow-sm flex flex-col justify-between hover:border-[#688542] transition-colors"
              >
                <div>
                  <div className="flex text-amber-500 text-lg mb-4">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="text-[#243314] italic text-sm leading-relaxed mb-6">
                    "{review.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F5F7EF]">
                  <p className="font-serif font-bold text-[#243314] text-base">
                    {review.clientName}
                  </p>
                  <p className="text-xs font-mono text-[#5C6E42] mt-0.5">{review.eventType}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Organic Baby Food FAQs */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Parenting Support"
            title="Frequently Asked Questions"
            description="Everything you need to know about pouch storage, cold shipping, allergen testing, and puree stages."
          />

          <FAQAccordion />
        </section>

        {/* 8. Live Instagram Feed */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InstagramFeed />
        </section>

        {/* 9. Box Builder / Subscription CTA (Pastel Green Style) */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#D7EDCA]/90 text-[#2B3B18] px-8 py-16 md:px-16 md:py-20 text-center shadow-lg border border-[#85966E]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#A4C46A]/30 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3E5028] bg-white/60 px-4 py-1.5 rounded-full border border-[#85966E] font-bold">
                Free Insulated Shipping Over $35
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-[#18260B]">
                Ready to Build Your Organic Pouch Box?
              </h2>
              <p className="text-[#3E5028] text-base leading-relaxed font-medium">
                Customize a 16 or 24 pouch box filled with butternut squash, golden pumpkin, sweet banana, apple, and chickpea purees.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center bg-[#688542] hover:bg-[#48592B] text-white font-bold px-9 py-4 rounded-full text-base transition-all transform hover:-translate-y-0.5 shadow-md uppercase tracking-wider"
                >
                  Build Custom Pouch Box Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
