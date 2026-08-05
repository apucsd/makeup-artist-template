import Link from "next/link";
import React from "react";

export function IngredientShowcase() {
  const categories = [
    {
      id: "butternut-pumpkin",
      title: "Butternut Squash & Pumpkin",
      bgClass: "bg-[#F5F7EF]/70 backdrop-blur-md",
      image: "/images/butternut-pumpkin-cutout.png",
      href: "/ingredients-flavors?category=squash-pumpkin",
    },
    {
      id: "banana-apple",
      title: "Sweet Banana & Fresh Apple",
      bgClass: "bg-[#EAECE1]/70 backdrop-blur-md",
      image: "/images/banana-apple-cutout.png",
      href: "/ingredients-flavors?category=banana-apple",
    },
    {
      id: "chickpea-greens",
      title: "Golden Chickpea & Greens",
      bgClass: "bg-[#F3F5EC]/70 backdrop-blur-md",
      image: "/images/chickpea-greens-cutout.png",
      href: "/ingredients-flavors?category=chickpea-greens",
    },
  ];

  return (
    <section className="w-full relative z-10 font-sans bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${cat.bgClass} relative overflow-hidden p-8 sm:p-10 border-r border-[#D6DBC4]/40 last:border-r-0 min-h-[240px] sm:min-h-[270px] flex flex-col justify-center shadow-xs`}
          >
            {/* Left Content */}
            <div className="relative z-10 max-w-[55%] space-y-3">
              <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#243314] leading-snug">
                {cat.title}
              </h3>
            </div>

            {/* Right Side Floating Ingredient Cutout Image */}
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

      {/* Transparent Banner Container */}
      <div className="bg-transparent backdrop-blur-sm py-4">
        <img
          src="/images/three-product.png"
          alt="Cove Valley Organic Baby Food Pouches"
          className="w-full h-full max-h-80 object-contain mx-auto"
        />
      </div>
    </section>
  );
}
