"use client";

import React, { useState } from "react";
import { PortfolioCategory, PortfolioItem } from "@/types/portfolio";

interface PortfolioGridProps {
  items: PortfolioItem[];
  showFilters?: boolean;
}

export function PortfolioGrid({ items, showFilters = true }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");

  const categories: { id: PortfolioCategory; label: string }[] = [
    { id: "all", label: "All Flavors" },
    { id: "fruits", label: "Fruit Purees" },
    { id: "veggies", label: "Veggie Blends" },
    { id: "superfoods", label: "Superfood Blends" },
    { id: "smoothies", label: "Pouch Smoothies" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8 font-sans text-[#243314]">
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                activeCategory === cat.id
                  ? "bg-[#48592B] text-white shadow-md"
                  : "bg-white text-[#3A4C25] hover:bg-[#DFE2D2] border border-[#DCE1CF]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-3xl bg-white border border-[#DCE1CF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-72 w-full overflow-hidden bg-[#F0F2E8]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#243314] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#DCE1CF]">
                {item.categoryLabel}
              </span>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#243314] group-hover:text-[#48592B] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#4A5D37] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.client && (
                <div className="mt-4 pt-4 border-t border-[#EAECE1] flex items-center justify-between text-xs text-[#5C6E42]">
                  <span>Puree Stage</span>
                  <span className="text-[#243314] font-bold">{item.client}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
