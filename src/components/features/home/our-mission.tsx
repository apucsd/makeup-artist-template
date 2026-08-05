import React from "react";

export function OurMission() {
  const badgeItems = [
    {
      id: "vegan",
      title: "100% VEGAN",
      svg: (
        <svg className="w-28 h-28 sm:w-32 sm:h-32 text-[#48592B] opacity-90 stroke-[1]" viewBox="0 0 120 120" fill="none" stroke="currentColor">
          <circle cx="60" cy="60" r="54" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="60" cy="60" r="49" strokeWidth="1.25" />
          <path d="M92 28 C102 24 104 12 94 16 C84 20 86 32 92 28 Z" fill="none" strokeWidth="1.25" />
          <path d="M28 92 C18 96 16 108 26 104 C36 100 34 88 28 92 Z" fill="none" strokeWidth="1.25" />
          <text x="60" y="52" textAnchor="middle" fill="#48592B" fontSize="13" fontWeight="bold" letterSpacing="1">100%</text>
          <text x="60" y="72" textAnchor="middle" fill="#48592B" fontSize="15" fontWeight="extrabold" letterSpacing="2">VEGAN</text>
        </svg>
      ),
    },
    {
      id: "gluten-free",
      title: "GLUTEN FREE",
      svg: (
        <svg className="w-28 h-28 sm:w-32 sm:h-32 text-[#48592B] opacity-90 stroke-[1]" viewBox="0 0 120 120" fill="none" stroke="currentColor">
          <circle cx="60" cy="60" r="50" strokeWidth="1.25" />
          {/* Curved Text Arc */}
          <path id="glutenArcTop" d="M 22 60 A 38 38 0 0 1 98 60" fill="none" />
          <path id="glutenArcBot" d="M 98 60 A 38 38 0 0 1 22 60" fill="none" />
          <text fontSize="9" fontWeight="bold" letterSpacing="3" fill="#48592B">
            <textPath href="#glutenArcTop" startOffset="50%" textAnchor="middle">GLUTEN</textPath>
          </text>
          <text fontSize="9" fontWeight="bold" letterSpacing="3" fill="#48592B">
            <textPath href="#glutenArcBot" startOffset="50%" textAnchor="middle">FREE</textPath>
          </text>
          {/* Wheat Stalk */}
          <path d="M60 38 V82" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M60 48 Q50 42 46 50 Q56 52 60 48 Z" strokeWidth="1" />
          <path d="M60 48 Q70 42 74 50 Q64 52 60 48 Z" strokeWidth="1" />
          <path d="M60 58 Q48 52 44 60 Q56 62 60 58 Z" strokeWidth="1" />
          <path d="M60 58 Q72 52 76 60 Q64 62 60 58 Z" strokeWidth="1" />
          <path d="M60 68 Q50 62 46 70 Q56 72 60 68 Z" strokeWidth="1" />
          <path d="M60 68 Q70 62 74 70 Q64 72 60 68 Z" strokeWidth="1" />
        </svg>
      ),
    },
    {
      id: "natural-ingredients",
      title: "NATURAL INGREDIENTS",
      svg: (
        <svg className="w-28 h-28 sm:w-32 sm:h-32 text-[#48592B] opacity-90 stroke-[1]" viewBox="0 0 120 120" fill="none" stroke="currentColor">
          <circle cx="60" cy="60" r="50" strokeWidth="1.25" />
          <path id="natArcTop" d="M 20 60 A 40 40 0 0 1 100 60" fill="none" />
          <path id="natArcBot" d="M 100 60 A 40 40 0 0 1 20 60" fill="none" />
          <text fontSize="8" fontWeight="bold" letterSpacing="2.5" fill="#48592B">
            <textPath href="#natArcTop" startOffset="50%" textAnchor="middle">NATURAL</textPath>
          </text>
          <text fontSize="7" fontWeight="bold" letterSpacing="2" fill="#48592B">
            <textPath href="#natArcBot" startOffset="50%" textAnchor="middle">INGREDIENTS</textPath>
          </text>
          {/* Sprout Leaves */}
          <path d="M60 42 V78" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M60 56 C50 40, 36 50, 60 62 C84 50, 70 40, 60 56 Z" strokeWidth="1" />
          <path d="M60 42 Q52 34 60 28 Q68 34 60 42 Z" strokeWidth="1" />
        </svg>
      ),
    },
    {
      id: "cruelty-free",
      title: "CRUELTY FREE",
      svg: (
        <svg className="w-28 h-28 sm:w-32 sm:h-32 text-[#48592B] opacity-90 stroke-[1]" viewBox="0 0 120 120" fill="none" stroke="currentColor">
          <circle cx="60" cy="60" r="50" strokeWidth="1.25" />
          <path id="crueltyArcTop" d="M 20 60 A 40 40 0 0 1 100 60" fill="none" />
          <path id="crueltyArcBot" d="M 100 60 A 40 40 0 0 1 20 60" fill="none" />
          <text fontSize="8" fontWeight="bold" letterSpacing="2" fill="#48592B">
            <textPath href="#crueltyArcTop" startOffset="50%" textAnchor="middle">CRUELTY FREE</textPath>
          </text>
          <text fontSize="8" fontWeight="bold" letterSpacing="2" fill="#48592B">
            <textPath href="#crueltyArcBot" startOffset="50%" textAnchor="middle">CRUELTY FREE</textPath>
          </text>
          {/* Rabbit Silhouette Lineart */}
          <path
            d="M48 76 C42 74, 40 68, 44 64 C42 58, 48 50, 52 50 C54 44, 52 36, 56 36 C58 36, 56 46, 58 48 C62 38, 64 34, 68 36 C70 38, 64 48, 62 52 C66 54, 72 56, 74 62 C76 68, 72 76, 64 78 C56 79, 52 78, 48 76 Z"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 font-sans border-t border-[#D6DBC4]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Title Header matching Image 1 */}
        <div className="space-y-4 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#48592B] tracking-wider uppercase">
            OUR MISSION
          </h2>

          {/* Ornamental Divider with central leaf motif */}
          <div className="flex items-center justify-center gap-3 text-[#A3B585]">
            <span className="w-2 h-2 rounded-full border border-[#85966E] bg-[#EAECE1]" />
            <div className="w-24 sm:w-36 h-[1.5px] bg-[#D6DBC4]" />
            <span className="text-sm">🍃</span>
            <div className="w-24 sm:w-36 h-[1.5px] bg-[#D6DBC4]" />
            <span className="w-2 h-2 rounded-full border border-[#85966E] bg-[#EAECE1]" />
          </div>
        </div>

        {/* 4 Circular Outline Badges matching Image 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto pt-4">
          {badgeItems.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center gap-3 p-4 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="group-hover:text-[#243314] transition-colors filter drop-shadow-xs">
                {badge.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
