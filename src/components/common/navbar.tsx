"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Search, Menu, X, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Sparkles, Truck, HeartHandshake } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    if (drawerOpen) {
      const timer = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(timer);
    } else {
      setIsVisible(false);
    }
  }, [drawerOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const closeDrawer = () => {
    setIsVisible(false);
    setTimeout(() => {
      setDrawerOpen(false);
    }, 350);
  };

  const toggleDrawer = () => {
    if (drawerOpen) {
      closeDrawer();
    } else {
      setDrawerOpen(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo - Larger emblem with fancy bold serif font */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-12 h-14 sm:w-14 sm:h-16 shrink-0 group-hover:scale-105 transition-transform filter drop-shadow-sm">
            <svg className="w-full h-full" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="coveValleyClip">
                  <ellipse cx="70" cy="80" rx="55" ry="68" />
                </clipPath>
              </defs>

              {/* Outer Oval Border Frame */}
              <ellipse cx="70" cy="80" rx="58" ry="71" stroke="#42572C" strokeWidth="6" fill="#F7F9F2" />

              {/* Content Inside Oval */}
              <g clipPath="url(#coveValleyClip)">
                {/* Sky */}
                <rect x="0" y="0" width="140" height="160" fill="#F7F9F2" />

                {/* Sun Rays */}
                <line x1="70" y1="20" x2="70" y2="28" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="54" y1="26" x2="59" y2="31" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="86" y1="26" x2="81" y2="31" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="42" y1="38" x2="48" y2="41" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="98" y1="38" x2="92" y2="41" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />

                {/* Smiling Sun */}
                <circle cx="70" cy="50" r="18" fill="#A4C46A" />
                <circle cx="63" cy="46" r="2.2" fill="#243314" />
                <circle cx="77" cy="46" r="2.2" fill="#243314" />
                <path d="M64 52 Q70 58 76 52" stroke="#243314" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                {/* Background Hills */}
                <path d="M10 72 Q45 50 75 60 Q95 64 135 52 L135 100 L10 100 Z" fill="#92B262" />
                <path d="M45 62 Q85 50 135 64 L135 100 L45 100 Z" fill="#688542" />

                {/* Foreground Field */}
                <path d="M10 80 Q70 74 135 80 L135 160 L10 160 Z" fill="#42572C" />

                {/* Winding River */}
                <path d="M68 70 C63 82 85 92 77 106 C68 118 48 122 52 160 L88 160 C82 136 95 120 88 108 C78 92 76 84 74 70 Z" fill="#F7F9F2" />

                {/* Sprouts */}
                <path d="M32 104 C22 98 20 86 28 82 C34 92 36 100 32 104 Z" fill="#8CAE55" />
                <path d="M42 118 C32 112 30 100 38 96 C44 106 46 114 42 118 Z" fill="#8CAE55" />
                <path d="M32 132 C22 126 20 114 28 110 C34 120 36 128 32 132 Z" fill="#8CAE55" />

                <path d="M108 104 C118 98 120 86 112 82 C106 92 104 100 108 104 Z" fill="#8CAE55" />
                <path d="M98 118 C108 112 110 100 102 96 C96 106 94 114 98 118 Z" fill="#8CAE55" />
                <path d="M108 132 C118 126 120 114 112 110 C106 120 104 128 108 132 Z" fill="#8CAE55" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-extrabold text-2xl sm:text-3xl tracking-tight text-[#283915] group-hover:text-[#18260B] transition-colors drop-shadow-sm">
              CoveValley
            </span>
            <span className="text-xs font-sans font-bold tracking-widest uppercase text-[#4C6031] mt-1">
              Baby Foods
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans">
          {navigationConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-[#243314] border-b-2 border-[#48592B] pb-0.5"
                    : "text-[#48592B] hover:text-[#243314]"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Search Input Bar with Slider Line Indicator o------------o from Reference Image */}
        <div className="hidden md:flex flex-col items-center relative">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-[#C7CEBA] hover:bg-[#BEC5B0] focus-within:bg-white border border-[#B8BFAB] rounded-full px-4 py-1 text-xs text-[#243314] transition-all w-52 sm:w-64 lg:w-72 justify-between"
          >
            <input
              type="text"
              placeholder="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent focus:outline-none placeholder-[#667650] italic text-xs font-normal w-full text-[#243314]"
            />
            <button type="submit" aria-label="Submit Search" className="text-[#55663A] hover:text-[#243314] shrink-0">
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </form>

          {/* Underneath slider indicator line with end circles: o───────────────────o */}
          <div className="w-[108%] flex items-center justify-between mt-1 pointer-events-none">
            <span className="w-2 h-2 rounded-full border border-[#85966E] bg-[#EAECE1] shrink-0" />
            <div className="flex-1 h-[1.5px] bg-[#85966E] mx-0.5" />
            <span className="w-2 h-2 rounded-full border border-[#85966E] bg-[#EAECE1] shrink-0" />
          </div>
        </div>

        {/* Basket & Hamburger Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* [ 3 ] Badge + [ MY BASKET ] Button */}
          <div className="flex items-center gap-2">
            <div className="bg-[#48592B] border-2 border-[#A3B585] text-white font-bold text-xs w-6 h-6 rounded-sm flex items-center justify-center shadow-sm">
              3
            </div>
            <Link
              href="/services"
              className="bg-[#48592B] hover:bg-[#37461E] text-white font-bold text-xs uppercase px-3.5 py-1 rounded-sm tracking-wider shadow-sm transition-colors inline-block"
            >
              MY BASKET
            </Link>
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleDrawer}
            className="p-1 text-[#48592B] hover:text-[#243314] focus:outline-none transition-colors"
            aria-label="Toggle Navigation Drawer"
          >
            {drawerOpen && isVisible ? (
              <X className="w-7 h-7 stroke-[2.5]" />
            ) : (
              <Menu className="w-7 h-7 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Slide-over Sidebar Drawer with Smooth Spring Entrance & Exit Animations */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Backdrop with Smooth Fade In/Out */}
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={closeDrawer}
          />

          {/* Side Panel Container with Spring Physics Curve */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <div
              className={`w-screen max-w-md bg-[#F5F7EF] border-l border-[#D6DBC4] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto transform transition-transform duration-350 ${
                isVisible ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#D6DBC4]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#48592B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#354721]">
                    100% USDA Certified Organic
                  </span>
                </div>
                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-full text-[#354721] hover:bg-[#EAECE1] transition-colors"
                  aria-label="Close side panel"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body Content */}
              <div className="py-6 space-y-6">
                {/* Search Bar inside Sidebar for Mobile Viewports */}
                <form
                  onSubmit={(e) => {
                    handleSearchSubmit(e);
                    closeDrawer();
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
                    <Search className="w-4 h-4" />
                  </button>
                </form>

                {/* Puree Stages & Flavors */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-[#48592B]" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#5C6E42]">
                      Puree Stages & Varieties
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {navigationConfig.footerNav.services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeDrawer}
                        className="flex items-center justify-between group p-3 rounded-xl hover:bg-[#EAECE1] transition-all text-sm font-bold text-[#243314]"
                      >
                        <span>{item.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#48592B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Our Organic Promise Standards */}
                <div className="pt-4 border-t border-[#D6DBC4]">
                  <div className="flex items-center gap-2 mb-3">
                    <HeartHandshake className="w-4 h-4 text-[#48592B]" />
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
                    <Truck className="w-4 h-4 text-[#48592B]" />
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
                    <Phone className="w-3.5 h-3.5 text-[#48592B]" />
                    <span className="font-semibold">{siteConfig.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#48592B]" />
                    <span className="font-semibold">{siteConfig.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#48592B]" />
                    <span className="font-semibold">{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>

              {/* Footer Quick Action */}
              <div className="pt-5 border-t border-[#D6DBC4]">
                <Link
                  href="/services"
                  onClick={closeDrawer}
                  className="block w-full bg-[#48592B] hover:bg-[#37461E] text-white font-bold text-sm text-center py-3 rounded-full uppercase tracking-wider shadow-md transition-all"
                >
                  Shop Organic Pouches
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}





