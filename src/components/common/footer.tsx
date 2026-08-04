import Link from "next/link";
import React from "react";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2 text-xs text-neutral-500 font-mono">
              📍 {siteConfig.artist.location}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationConfig.footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-amber-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationConfig.footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-amber-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Connect
            </h4>
            <div className="text-sm space-y-2 text-neutral-400">
              <p>✉️ <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-400">{siteConfig.contact.email}</a></p>
              <p>📞 <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-amber-400">{siteConfig.contact.phone}</a></p>
              <p>📷 <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400">{siteConfig.contact.instagram}</a></p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono">Designed for Luxury Beauty Artistry</p>
        </div>
      </div>
    </footer>
  );
}
