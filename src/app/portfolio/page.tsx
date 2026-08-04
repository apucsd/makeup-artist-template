import React from "react";
import { SectionHeader } from "@/components/common/section-header";
import { PortfolioGrid } from "@/components/features/portfolio/portfolio-grid";
import { portfolioData } from "@/data/portfolio";

export const metadata = {
  title: "Portfolio Gallery | Aura Beauty & Artistry",
  description: "Browse high-resolution gallery of bridal makeup, editorial campaigns, and glam transformations.",
};

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curated Work"
          title="Portfolio & Lookbook"
          description="Explore our collection of luminous bridal creations, fashion editorial campaigns, and red carpet beauty looks."
        />

        <PortfolioGrid items={portfolioData} showFilters={true} />
      </div>
    </div>
  );
}
