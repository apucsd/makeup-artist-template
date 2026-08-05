import Link from "next/link";
import React from "react";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";
import { ShieldCheck, HeartHandshake, Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2B391A] text-[#DCE7CD] border-t border-[#3B4D25] font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              {siteConfig.name}
            </h3>
            <p className="text-xs text-[#B8C8A3] leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2 text-xs text-[#A4C46A] flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Certified USDA Organic</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navigationConfig.footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#A4C46A] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Puree Stages */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
              Puree Stages
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navigationConfig.footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#A4C46A] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
              Connect
            </h4>
            <div className="text-xs space-y-2.5 text-[#B8C8A3]">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A4C46A]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#A4C46A] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A4C46A]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#A4C46A] transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#A4C46A]" />
                <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-[#A4C46A] transition-colors">
                  {siteConfig.contact.instagram}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#3B4D25] flex flex-col sm:flex-row items-center justify-between text-xs text-[#98AC7C]">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-sans">Crafted with Pure Organic Baby Nutrition</p>
        </div>
      </div>
    </footer>
  );
}
