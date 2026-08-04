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
    { id: "all", label: "All Looks" },
    { id: "bridal", label: "Bridal" },
    { id: "glam", label: "Glamour" },
    { id: "editorial", label: "Editorial" },
    { id: "events", label: "Special Events" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === cat.id
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
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
            className="group relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-80 w-full overflow-hidden bg-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {item.categoryLabel}
              </span>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.client && (
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>Client / Project</span>
                  <span className="text-neutral-700 font-sans font-medium">{item.client}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
