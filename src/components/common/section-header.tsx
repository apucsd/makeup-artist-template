import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-amber-700 uppercase bg-amber-50 rounded-full mb-3 border border-amber-200/60">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-neutral-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
