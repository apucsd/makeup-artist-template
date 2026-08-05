import Link from "next/link";
import React from "react";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Leaf, Heart, Sprout, Award, Truck } from "lucide-react";

export const metadata = {
  title: "About Us | Cove Valley Organics",
  description: "Learn about our farm-to-pouch organic baby food philosophy, USDA organic certifications, and sustainable packaging.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F7EF] pt-28 pb-20 text-[#243314] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E6D4] text-[#3E5028] text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-4 h-4 text-[#48592B]" />
            Farm To Pouch Pure Nutrition
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#243314] tracking-tight">
            Our Organic Story & Philosophy
          </h1>
          <p className="text-base sm:text-lg text-[#4A5D37] leading-relaxed">
            Founded on the belief that every baby deserves pure, nutrient-dense food made with 100% real organic ingredients—straight from local organic fields to your pouch.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-[#DCE1CF] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#DCE1CF]">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop"
                alt="Cove Valley Organic Farm"
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#4A5D37] leading-relaxed text-base">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#243314]">
              "We care for your baby's growth and healthy wellbeing with zero compromises."
            </h2>

            <p>
              Cove Valley Organics was born right on our family organic farm. When our founder couldn't find truly clean, unrefined baby purees without hidden concentrates or synthetic preservatives on supermarket shelves, we decided to craft our own.
            </p>

            <p>
              Today, we collaborate with certified organic growers who cultivate heirloom produce in nutrient-rich organic soil. We gently cold-press and flash-steam our purees to lock in natural vitamins, vibrant colors, and authentic farm flavors.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs sm:text-sm font-bold text-[#243314] border-t border-[#EAECE1]">
              <div>
                <span className="block text-[10px] font-mono text-[#5C6E42] uppercase tracking-wider">Certification</span>
                100% USDA Certified Organic
              </div>
              <div>
                <span className="block text-[10px] font-mono text-[#5C6E42] uppercase tracking-wider">Farm Base</span>
                Sunny Valley, CA Farm
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-[#48592B] hover:bg-[#37461E] text-white rounded-full px-8 py-3.5 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Explore Organic Pouches
              </Link>
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#E8EBDD] border border-[#D6DBC4] rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#48592B] text-white flex items-center justify-center font-bold text-lg">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#243314]">100% Organic Soil</h3>
            <p className="text-xs text-[#4A5D37] leading-relaxed">
              We never use synthetic fertilizers or chemical pesticides. Our fruits and veggies grow naturally in living, nutrient-dense organic soil.
            </p>
          </div>

          <div className="bg-[#E8EBDD] border border-[#D6DBC4] rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#48592B] text-white flex items-center justify-center font-bold text-lg">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#243314]">Tested For Purity</h3>
            <p className="text-xs text-[#4A5D37] leading-relaxed">
              Independent 3rd-party lab testing on every single batch ensures zero heavy metals, zero pesticide residues, and zero artificial additives.
            </p>
          </div>

          <div className="bg-[#E8EBDD] border border-[#D6DBC4] rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#48592B] text-white flex items-center justify-center font-bold text-lg">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#243314]">Eco-Friendly Pouches</h3>
            <p className="text-xs text-[#4A5D37] leading-relaxed">
              Packaged in BPA-free, PVC-free, recyclable pouches designed to keep food fresh without harmful plastic leaching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
