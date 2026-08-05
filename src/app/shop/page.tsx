"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ShoppingBag, Check, ShieldCheck, Truck, Sparkles, RefreshCw } from "lucide-react";

export default function ShopPage() {
  const [boxSize, setBoxSize] = useState<16 | 24>(16);
  const [frequency, setFrequency] = useState<"one-time" | "weekly" | "monthly">("monthly");
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "banana-ginger-apple": 4,
    "sweet-potato-carrot": 4,
    "chickpea-spinach-superfood": 4,
    "avocado-sweet-pea": 4,
  });
  const [orderComplete, setOrderComplete] = useState(false);

  const totalSelected = Object.values(quantities).reduce((a, b) => a + b, 0);

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F7EF] pt-28 pb-20 text-[#243314] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E6D4] text-[#3E5028] text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-4 h-4 text-[#48592B]" />
            Custom Pouch Box Builder
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#243314] tracking-tight">
            Order Organic Pouch Subscription
          </h1>
          <p className="text-base sm:text-lg text-[#4A5D37] leading-relaxed">
            Mix and match your baby's favorite 100% USDA Certified Organic puree recipes. Save up to 20% with flexible farm subscriptions.
          </p>
        </div>

        {orderComplete ? (
          <div className="bg-white border border-[#DCE1CF] rounded-3xl p-12 text-center max-w-2xl mx-auto space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#E2E6D4] text-[#48592B] flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#243314]">
              Order Placed Successfully!
            </h2>
            <p className="text-sm text-[#4A5D37] leading-relaxed">
              Thank you for choosing Cove Valley Organics! Your {boxSize}-pouch organic box is being packed in our insulated cold packaging and will arrive fresh at your door.
            </p>
            <div className="pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-[#48592B] hover:bg-[#37461E] text-white rounded-full px-8 py-3.5 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Box Customizer Left Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Step 1: Select Box Size */}
              <div className="bg-white border border-[#DCE1CF] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-[#243314] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#48592B] text-white text-xs flex items-center justify-center font-sans font-bold">1</span>
                  Select Box Size
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[16, 24].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setBoxSize(size as 16 | 24)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        boxSize === size
                          ? "border-[#48592B] bg-[#EAECE1] shadow-md"
                          : "border-[#DCE1CF] bg-white hover:bg-[#F9FAF5]"
                      }`}
                    >
                      <span className="block text-2xl font-serif font-extrabold text-[#243314]">{size} Pouches</span>
                      <span className="text-xs text-[#5C6E42] font-semibold">
                        {size === 16 ? "Popular for bi-weekly feeding" : "Best value for monthly feeding (Save 20%)"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Delivery Frequency */}
              <div className="bg-white border border-[#DCE1CF] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-[#243314] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#48592B] text-white text-xs flex items-center justify-center font-sans font-bold">2</span>
                  Select Delivery Frequency
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "monthly", label: "Monthly (Save 15%)" },
                    { id: "weekly", label: "Every 2 Weeks" },
                    { id: "one-time", label: "One-Time Box" },
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id as any)}
                      className={`p-4 rounded-xl border text-center text-xs font-bold transition-all ${
                        frequency === freq.id
                          ? "border-[#48592B] bg-[#48592B] text-white shadow-md"
                          : "border-[#DCE1CF] bg-[#F9FAF5] text-[#354721] hover:bg-[#EAECE1]"
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Pick Pouch Flavors */}
              <div className="bg-white border border-[#DCE1CF] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-xl font-bold text-[#243314] flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#48592B] text-white text-xs flex items-center justify-center font-sans font-bold">3</span>
                    Choose Your Flavors
                  </h2>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    totalSelected === boxSize
                      ? "bg-[#48592B] text-white"
                      : "bg-[#E2E6D4] text-[#354721]"
                  }`}>
                    {totalSelected} / {boxSize} Pouches Selected
                  </span>
                </div>

                <div className="space-y-4 pt-2">
                  {servicesData.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 rounded-2xl bg-[#F9FAF5] border border-[#DCE1CF]"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 rounded-xl object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-sm text-[#243314]">{item.title}</h3>
                          <span className="text-xs text-[#5C6E42] font-semibold">{item.duration} • {item.price}</span>
                        </div>
                      </div>

                      {/* Counter Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-8 h-8 rounded-lg bg-white border border-[#DCE1CF] text-[#243314] font-bold text-sm flex items-center justify-center hover:bg-[#EAECE1]"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-bold text-sm text-[#243314]">
                          {quantities[item.id] || 0}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-8 h-8 rounded-lg bg-[#48592B] text-white font-bold text-sm flex items-center justify-center hover:bg-[#37461E]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white border border-[#DCE1CF] rounded-3xl p-6 space-y-6 shadow-sm sticky top-28">
                <h2 className="font-serif text-2xl font-bold text-[#243314]">
                  Box Summary
                </h2>

                <div className="space-y-3 border-b border-[#EAECE1] pb-4 text-xs font-semibold text-[#4A5D37]">
                  <div className="flex justify-between">
                    <span>Box Size</span>
                    <span className="text-[#243314] font-bold">{boxSize} Pouches</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frequency</span>
                    <span className="text-[#243314] font-bold uppercase">{frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cold-Pack Shipping</span>
                    <span className="text-[#48592B] font-bold">FREE</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-lg font-bold text-[#243314]">
                  <span>Total Due Today</span>
                  <span className="text-2xl font-extrabold text-[#48592B]">
                    ${boxSize === 16 ? "44.99" : "64.99"}
                  </span>
                </div>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Shipping Address"
                    className="w-full rounded-xl border border-[#DCE1CF] bg-[#F9FAF5] px-4 py-3 text-xs outline-none focus:border-[#48592B]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Card Number (0000 0000 0000 0000)"
                    className="w-full rounded-xl border border-[#DCE1CF] bg-[#F9FAF5] px-4 py-3 text-xs outline-none focus:border-[#48592B]"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#48592B] hover:bg-[#37461E] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Complete Order</span>
                  </button>
                </form>

                <div className="space-y-2 pt-2 text-[11px] text-[#5C6E42] font-semibold">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#48592B]" />
                    <span>30-Day Happiness Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#48592B]" />
                    <span>Ships in Insulated Cold Packaging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
