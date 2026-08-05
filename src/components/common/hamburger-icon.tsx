
interface HamburgerIconProps {
  className?: string;
}

export function HamburgerIcon({ className = "" }: HamburgerIconProps) {
  return (
    <svg
      className={`w-9 h-6 ${className}`}
      viewBox="0 0 36 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="2" y1="5" x2="34" y2="5" />
      <line x1="2" y1="12" x2="34" y2="12" />
      <line x1="2" y1="19" x2="34" y2="19" />
    </svg>
  );
}
