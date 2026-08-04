import Link from "next/link";
import React from "react";
import { HomeHero } from "@/components/features/home/hero";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "@/components/features/services/service-card";
import { PortfolioGrid } from "@/components/features/portfolio/portfolio-grid";
import { BeforeAfterSlider } from "@/components/features/before-after/before-after-slider";
import { FAQAccordion } from "@/components/features/faq/faq-accordion";
import { InstagramFeed } from "@/components/features/instagram/instagram-feed";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
import { testimonialsData } from "@/data/testimonials";
import { beforeAfterData } from "@/data/before-after";

export default function HomePage() {
  const featuredServices = servicesData.filter((s) => s.popular);
  const featuredPortfolio = portfolioData.filter((p) => p.featured);

  return (
    <div className="space-y-28 pb-28 bg-stone-50/50">
      {/* 1. Premium Hero Section */}
      <HomeHero />

      {/* 2. Brand Philosophy / Highlight Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-14 border border-neutral-800 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                Our Beauty Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-snug">
                "Skin-first preparation meets precision color theory for weightless, 16-hour endurance."
              </h2>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-white text-neutral-950 font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-amber-300 transition-colors"
              >
                Learn About Our Technique →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services & Pricing */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curated Artistry Packages"
          title="Services & Investment"
          description="Handcrafted packages designed for high-profile events, luxury weddings, and editorial campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-8 py-3.5 text-sm font-medium text-neutral-800 hover:bg-neutral-900 hover:text-white transition-colors shadow-sm"
          >
            Explore Complete Service Menu & Pricing →
          </Link>
        </div>
      </section>

      {/* 4. Interactive Before & After Transformation Slider */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Real Transformations"
          title="Before & After Artistry Showcase"
          description="Drag the slider to compare bare natural skin against our signature luminous glam application."
        />

        <div className="space-y-12 max-w-5xl mx-auto">
          {beforeAfterData.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 5. Portfolio Showcase */}
      <section className="bg-neutral-100/80 py-24 border-y border-neutral-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Visual Gallery"
            title="Recent Transformations & Lookbook"
            description="A curated gallery of recent bridal creations, fashion editorials, and red-carpet glam."
          />

          <PortfolioGrid items={featuredPortfolio} showFilters={false} />

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-8 py-3.5 text-sm font-medium transition-colors shadow-md"
            >
              Explore Full Portfolio Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Client Reviews"
          title="Words From Our Clients"
          description="Read genuine experiences from brides, event hosts, and creative fashion directors."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-colors"
            >
              <div>
                <div className="flex text-amber-400 text-lg mb-4">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-neutral-700 italic text-sm leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <p className="font-serif font-semibold text-neutral-900 text-base">
                  {review.clientName}
                </p>
                <p className="text-xs font-mono text-amber-700 mt-0.5">{review.eventType}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Interactive FAQ Accordion */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Common Questions"
          title="Frequently Asked Questions"
          description="Everything you need to know regarding booking, travel, sanitation, and bridal trials."
        />

        <FAQAccordion />
      </section>

      {/* 8. Live Instagram Feed */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InstagramFeed />
      </section>

      {/* 9. Final Reservation CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 text-white px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl border border-neutral-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/40">
              Limited Season Availability
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight">
              Ready to Reserve Your Custom Look?
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              Dates for wedding seasons and special event weekends fill quickly. Inquire today to secure artist availability for your date.
            </p>
            <div className="pt-2">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold px-9 py-4 rounded-full text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-400/20"
              >
                Reserve Your Appointment Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
