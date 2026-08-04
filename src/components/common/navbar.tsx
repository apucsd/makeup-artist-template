"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent border-b border-transparent text-emerald-950">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-emerald-900 group-hover:text-emerald-700 transition-colors drop-shadow-sm">
            {siteConfig.name.split(" ")[0]} {siteConfig.name.split(" ")[1]}
          </span>
          <span className="text-xs font-sans tracking-widest uppercase text-emerald-700 font-semibold bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">
            ORGANICS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans">
          {navigationConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-emerald-700 drop-shadow-sm ${
                  isActive
                    ? "text-emerald-800 font-bold border-b-2 border-emerald-600 pb-1"
                    : "text-emerald-900/90 hover:text-emerald-950"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 font-sans">
          <Link
            href="/booking"
            className="hidden sm:inline-flex bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-emerald-700/20"
          >
            Shop Organic Pouches
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden p-2 rounded-md text-emerald-900 hover:bg-emerald-100/50 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-200 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl text-emerald-950 font-sans">
          <div className="flex flex-col space-y-3">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 px-3 rounded-md transition-colors ${
                  pathname === item.href ? "bg-emerald-100 text-emerald-900 font-bold" : "text-emerald-900 hover:bg-emerald-50"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-full py-2.5 text-center font-bold text-sm shadow-md"
              >
                Shop Organic Pouches
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
