import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 group shrink-0 ${className}`}>
      {/* SVG Emblem */}
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
            <rect x="0" y="0" width="140" height="160" fill="#F7F9F2" />
            <line x1="70" y1="20" x2="70" y2="28" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="54" y1="26" x2="59" y2="31" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="86" y1="26" x2="81" y2="31" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="42" y1="38" x2="48" y2="41" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="98" y1="38" x2="92" y2="41" stroke="#42572C" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="70" cy="50" r="18" fill="#A4C46A" />
            <circle cx="63" cy="46" r="2.2" fill="#243314" />
            <circle cx="77" cy="46" r="2.2" fill="#243314" />
            <path d="M64 52 Q70 58 76 52" stroke="#243314" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M10 72 Q45 50 75 60 Q95 64 135 52 L135 100 L10 100 Z" fill="#92B262" />
            <path d="M45 62 Q85 50 135 64 L135 100 L45 100 Z" fill="#688542" />
            <path d="M10 80 Q70 74 135 80 L135 160 L10 160 Z" fill="#42572C" />
            <path d="M68 70 C63 82 85 92 77 106 C68 118 48 122 52 160 L88 160 C82 136 95 120 88 108 C78 92 76 84 74 70 Z" fill="#F7F9F2" />
            <path d="M32 104 C22 98 20 86 28 82 C34 92 36 100 32 104 Z" fill="#8CAE55" />
            <path d="M42 118 C32 112 30 100 38 96 C44 106 46 114 42 118 Z" fill="#8CAE55" />
            <path d="M32 132 C22 126 20 114 28 110 C34 120 36 128 32 132 Z" fill="#8CAE55" />
            <path d="M108 104 C118 98 120 86 112 82 C106 92 104 100 108 104 Z" fill="#8CAE55" />
            <path d="M98 118 C108 112 110 100 102 96 C96 106 94 114 98 118 Z" fill="#8CAE55" />
            <path d="M108 132 C118 126 120 114 112 110 C106 120 104 128 108 132 Z" fill="#8CAE55" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-serif font-extrabold text-2xl sm:text-3xl tracking-tight text-[#283915] group-hover:text-[#18260B] transition-colors drop-shadow-sm">
            CoveValley
          </span>
          <span className="text-xs font-sans font-bold tracking-widest uppercase text-[#4C6031] mt-1">
            Baby Foods
          </span>
        </div>
      )}
    </Link>
  );
}
