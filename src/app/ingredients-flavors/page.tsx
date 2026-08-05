"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { PortfolioCategory } from "@/types/portfolio";
import { Sparkles, ShieldCheck, Heart, Leaf, ArrowRight } from "lucide-react";

export default function IngredientsFlavorsPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");

  const items = activeCategory === "all"
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F7EF] pt-28 pb-20 text-[#243314] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E6D4] text-[#3E5028] text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-4 h-4 text-[#48592B]" />
            Pure Whole Food Sourcing
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#243314] tracking-tight">
            Ingredients & Flavor Pairings
          </h1>
          <p className="text-base sm:text-lg text-[#4A5D37] leading-relaxed">
            Every ingredient in Cove Valley pouches is selected for peak nutritional density and natural flavor harmony. No artificial flavors, synthetic colors, or hidden additives.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
          {[
            { id: "all", label: "All Flavors" },
            { id: "fruits", label: "Fruit Purees" },
            { id: "veggies", label: "Veggie Blends" },
            { id: "superfoods", label: "Superfood Blends" },
            { id: "smoothies", label: "Pouch Smoothies" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as PortfolioCategory)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                activeCategory === tab.id
                  ? "bg-[#48592B] text-white shadow-md"
                  : "bg-[#EAECE1] text-[#3A4C25] hover:bg-[#DFE2D2]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Flavors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#DCE1CF] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-[#F0F2E8]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#243314] text-xs font-bold uppercase px-3 py-1 rounded-full border border-[#DCE1CF]">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold text-[#5C6E42] uppercase tracking-wider">
                    {item.client}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#243314] group-hover:text-[#48592B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A5D37] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#48592B] hover:text-[#243314] transition-colors"
                >
                  <span>Order Pouch Variety</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Nutritional Standards Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#DCE1CF] rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#E2E6D4] flex items-center justify-center text-[#48592B]">
              🌱
            </div>
            <h4 className="font-serif font-bold text-lg text-[#243314]">100% Non-GMO Crops</h4>
            <p className="text-xs text-[#4A5D37] leading-relaxed">
              Organically grown fruits and vegetables harvested at peak ripeness for maximum nutrient retention.
            </p>
          </div>

          <div className="bg-white border border-[#DCE1CF] rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#E2E6D4] flex items-center justify-center text-[#48592B]">
              🍏
            </div>
            <h4 className="font-serif font-bold text-lg text-[#243314]">Zero Sugar or Fillers</h4>
            <p className="text-xs text-[#4A5D37] leading-relaxed">
              We never add cane sugar, high fructose corn syrup, artificial colors, or starch thickeners.
            </p>
          </div>

          <div className="bg-white border border-[#DCE1CF] rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#E2E6D4] flex items-center justify-center text-[#48592B]">
              🔬
            </div>
            <h4 className="font-serif font-bold text-lg text-[#243314]">Heavy Metal Tested</h4>
            <p className="text-xs text-[#4A5D37] leading-relaxed">
              Every production lot undergoes third-party lab testing for heavy metals and pesticides before release.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
