import React from "react";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "@/components/features/services/service-card";
import { servicesData, serviceCategories } from "@/data/services";

export const metadata = {
  title: "Services & Pricing | Aura Beauty & Artistry",
  description: "Explore luxury bridal, editorial, and special event makeup application packages and pricing.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 space-y-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Services & Investment"
          title="Makeup Packages & Rates"
          description="Every service includes custom skin preparation, premium lashes, and personalized color matching tailored to your unique skin type."
        />

        {/* Categories Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:border-amber-400 transition-colors"
            >
              <h3 className="font-serif font-semibold text-lg text-neutral-900 mb-2">
                {cat.name}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-neutral-200 shadow-sm space-y-8">
          <h3 className="font-serif text-2xl font-semibold text-neutral-900 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6 text-sm text-neutral-700">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-1">
                Do you travel on-location for bridal parties?
              </h4>
              <p className="text-neutral-600">
                Yes! We provide full on-location makeup services throughout Southern California and are available for destination weddings worldwide.
              </p>
            </div>
            <div className="border-t border-neutral-100 pt-4">
              <h4 className="font-semibold text-neutral-900 mb-1">
                When should I book my bridal makeup trial?
              </h4>
              <p className="text-neutral-600">
                We recommend scheduling your trial 2 to 4 months prior to your wedding day, ideally on a day when you have an engagement shoot or dress fitting!
              </p>
            </div>
            <div className="border-t border-neutral-100 pt-4">
              <h4 className="font-semibold text-neutral-900 mb-1">
                What makeup brands do you use in your kit?
              </h4>
              <p className="text-neutral-600">
                Our kit features luxury, high-performance luxury brands including Charlotte Tilbury, Tom Ford, NARS, Dior Beauty, Natasha Denona, and Armani Beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
