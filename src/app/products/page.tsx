"use client";

import React, { useState } from "react";
import Link from "next/link";
import { serviceCategories, servicesData } from "@/data/services";
import { ServiceCategoryId } from "@/types/service";
import { ShieldCheck, ShoppingBag, Filter, Check, Star } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryId | "all">("all");
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const filteredProducts = selectedCategory === "all"
    ? servicesData
    : servicesData.filter((p) => p.categoryId === selectedCategory);

  const handleAddToCart = (id: string) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F7EF] pt-28 pb-20 text-[#243314] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E6D4] text-[#3E5028] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#48592B]" />
            100% USDA Certified Organic Purees
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#243314] tracking-tight">
            Farm Fresh Organic Pouches
          </h1>
          <p className="text-base sm:text-lg text-[#4A5D37] leading-relaxed">
            Nutrient-dense fruit, vegetable, and superfood purees crafted with real whole ingredients. Zero added sugar, zero artificial preservatives.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              selectedCategory === "all"
                ? "bg-[#48592B] text-white shadow-md"
                : "bg-[#EAECE1] text-[#3A4C25] hover:bg-[#DFE2D2]"
            }`}
          >
            All Products ({servicesData.length})
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                selectedCategory === cat.id
                  ? "bg-[#48592B] text-white shadow-md"
                  : "bg-[#EAECE1] text-[#3A4C25] hover:bg-[#DFE2D2]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#DCE1CF] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Shell */}
                <div className="relative h-64 w-full overflow-hidden bg-[#F0F2E8]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.popular && (
                    <span className="absolute top-4 right-4 bg-[#48592B] text-white text-[11px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                      ★ Bestseller
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#243314] text-xs font-bold px-3 py-1 rounded-full border border-[#DCE1CF]">
                    {product.duration}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5C6E42]">
                      {serviceCategories.find((c) => c.id === product.categoryId)?.name}
                    </span>
                    <span className="text-lg font-extrabold text-[#243314]">
                      {product.price}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif font-bold text-[#243314] group-hover:text-[#48592B] transition-colors">
                    {product.title}
                  </h2>

                  <p className="text-xs text-[#4A5D37] leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-[#EAECE1]">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-[#354721]">
                        <Check className="w-3.5 h-3.5 text-[#48592B] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md ${
                    addedItems[product.id]
                      ? "bg-[#33441F] text-white"
                      : "bg-[#48592B] hover:bg-[#37461E] text-white"
                  }`}
                >
                  {addedItems[product.id] ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Basket!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Basket
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription CTA Banner */}
        <div className="mt-16 bg-[#E8EBDD] border border-[#D6DBC4] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#243314]">
            Build Your Custom Monthly Pouch Box
          </h2>
          <p className="text-sm sm:text-base text-[#4A5D37] max-w-xl mx-auto">
            Choose your baby's favorite 16 or 24 organic puree recipes and get free cold-pack shipping delivered fresh to your door.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#48592B] hover:bg-[#37461E] text-white font-bold text-sm px-8 py-3.5 rounded-full uppercase tracking-wider shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Build Custom Box</span>
              <ShoppingBag className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
