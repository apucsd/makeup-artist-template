"use client";

import Link from "next/link";
import React from "react";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
  HeartHandshake,
} from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

interface NavDrawerProps {
  isOpen: boolean;
  isVisible: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export function NavDrawer({
  isOpen,
  isVisible,
  onClose,
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
}: NavDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop with Ultra-Light Minimal Tint */}
      <div
        className={`fixed inset-0 bg-black/5 transition-opacity duration-300 ease-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Side Panel Container with High-Brightness Luminous Glass */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div
          className={`w-screen max-w-md bg-white/40 backdrop-blur-2xl backdrop-brightness-125 border-l border-white/80 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto transform transition-transform duration-350 ${isVisible ? "translate-x-0" : "translate-x-full"
            }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#D6DBC4]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#48592B] stroke-[1.25]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#354721]">
                100% USDA Certified Organic
              </span>
            </div>
            {/* Elongated & Thin Close X Icon */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#354721] hover:bg-[#EAECE1] transition-colors"
              aria-label="Close side panel"
            >
              <svg
                className="w-8 h-6 stroke-[#354721]"
                viewBox="0 0 36 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              >
                <line x1="6" y1="3" x2="30" y2="21" />
                <line x1="6" y1="21" x2="30" y2="3" />
              </svg>
            </button>
          </div>

          {/* Body Content */}
          <div className="py-6 space-y-6">
            {/* Search Bar inside Sidebar for Mobile Viewports */}
            <form
              onSubmit={(e) => {
                onSearchSubmit(e);
                onClose();
              }}
              className="flex md:hidden items-center bg-[#C7CEBA] border border-[#B8BFAB] rounded-full px-4 py-2"
            >
              <input
                type="text"
                placeholder="search organic purees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent focus:outline-none placeholder-[#667650] italic text-xs font-normal w-full text-[#243314]"
              />
              <button type="submit" aria-label="Search" className="text-[#55663A] shrink-0">
                <Search className="w-4 h-4 stroke-[1.25]" />
              </button>
            </form>

            {/* Puree Stages & Flavors */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#48592B] stroke-[1.25]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#5C6E42]">
                  Puree Stages & Varieties
                </h3>
              </div>
              <div className="space-y-2">
                {navigationConfig.footerNav.services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between group p-3 rounded-xl hover:bg-[#EAECE1] transition-all text-sm font-bold text-[#243314]"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-5 h-4 text-[#48592B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all stroke-[1.25]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Our Organic Promise Standards */}
            <div className="pt-4 border-t border-[#D6DBC4]">
              <div className="flex items-center gap-2 mb-3">
                <HeartHandshake className="w-4 h-4 text-[#48592B] stroke-[1.25]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#5C6E42]">
                  Our Organic Promise
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#354721]">
                <div className="bg-[#EAECE1] p-2.5 rounded-lg">🌱 100% Non-GMO</div>
                <div className="bg-[#EAECE1] p-2.5 rounded-lg">🍏 Zero Sugar Added</div>
                <div className="bg-[#EAECE1] p-2.5 rounded-lg">♻️ BPA-Free Pouches</div>
                <div className="bg-[#EAECE1] p-2.5 rounded-lg">🚜 Farm Fresh Crops</div>
              </div>
            </div>

            {/* Delivery Perks */}
            <div className="pt-4 border-t border-[#D6DBC4]">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-4 h-4 text-[#48592B] stroke-[1.25]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#5C6E42]">
                  Fast Cold Shipping
                </h3>
              </div>
              <p className="text-xs text-[#48592B] leading-relaxed">
                Free insulated cold-pack shipping on orders over $35. Flexible weekly & monthly pouch subscriptions.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="pt-4 border-t border-[#D6DBC4] space-y-2.5 text-xs text-[#48592B]">
              <h3 className="font-bold uppercase tracking-widest text-[#5C6E42] mb-1">
                Customer Support & Farm
              </h3>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#48592B] stroke-[1.25]" />
                <span className="font-semibold">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#48592B] stroke-[1.25]" />
                <span className="font-semibold">{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#48592B] stroke-[1.25]" />
                <span className="font-semibold">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Quick Action */}
          <div className="pt-5 border-t border-[#D6DBC4]">
            <Link
              href="/products"
              onClick={onClose}
              className="block w-full bg-[#48592B] hover:bg-[#37461E] text-white font-bold text-sm text-center py-3 rounded-full uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Shop Organic Pouches</span>
              <ArrowRight className="w-5 h-4 stroke-[1.25]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
