import Link from "next/link";
import React from "react";

export function IngredientShowcase() {
  const categories = [
    {
      id: "butternut-pumpkin",
      title: "Butternut Squash & Pumpkin",

      bgClass: "bg-[#F5F7EF]",
      image: "/images/butternut-pumpkin-cutout.png",
      href: "/ingredients-flavors?category=squash-pumpkin",
    },
    {
      id: "banana-apple",
      title: "Sweet Banana & Fresh Apple",

      bgClass: "bg-[#EAECE1]",
      image: "/images/banana-apple-cutout.png",
      href: "/ingredients-flavors?category=banana-apple",
    },
    {
      id: "chickpea-greens",
      title: "Golden Chickpea & Greens",

      bgClass: "bg-[#F3F5EC]",
      image: "/images/chickpea-greens-cutout.png",
      href: "/ingredients-flavors?category=chickpea-greens",
    },
  ];

  return (
    <section className="w-full relative font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${cat.bgClass} relative overflow-hidden p-8 sm:p-10 border-r border-[#D6DBC4]/40 last:border-r-0 min-h-[240px] sm:min-h-[270px] flex flex-col justify-center`}
          >
            {/* Left Content (Title, Subtitle, View All Button) */}
            <div className="relative z-10 max-w-[55%] space-y-3">
              <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#243314] leading-snug">
                {cat.title}
              </h3>

            </div>

            {/* Right Side Floating Ingredient Cutout Image (Clean, Large, No Border/Shadow, No Hover Transform) */}
            <div className="absolute right-0 bottom-0 top-0 w-[52%] flex items-end justify-end pointer-events-none overflow-hidden pr-1 pb-1">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full max-h-[220px] sm:max-h-[255px] object-contain mix-blend-multiply scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[radial-gradient(ellipse_at_top,#DBEECB_0%,#D3EBC4_60%,#C9E6BD_100%)]">
        <img src="/images/three-product.png" alt="" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
