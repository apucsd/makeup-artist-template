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
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-semibold tracking-wider text-neutral-900 group-hover:text-amber-700 transition-colors">
            {siteConfig.name.split(" ")[0]}
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-amber-700 font-light border-l border-neutral-300 pl-2">
            ARTISTRY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                  isActive ? "text-amber-700 font-semibold border-b-2 border-amber-700 pb-1" : "text-neutral-600"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href={navigationConfig.cta.href}
            className="hidden sm:inline-flex bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-2.5 rounded-full text-sm transition-all shadow-sm"
          >
            {navigationConfig.cta.title}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 focus:outline-none"
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
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${
                  pathname === item.href ? "bg-amber-50 text-amber-700 font-semibold" : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href={navigationConfig.cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-full py-2.5 text-center font-medium text-sm"
              >
                {navigationConfig.cta.title}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
