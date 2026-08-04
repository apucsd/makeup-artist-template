

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
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-emerald-800 uppercase bg-emerald-100/80 rounded-full mb-3 border border-emerald-200">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-neutral-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
