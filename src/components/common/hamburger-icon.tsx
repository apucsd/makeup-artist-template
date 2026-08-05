import React from "react";

interface HamburgerIconProps {
  isOpen: boolean;
  className?: string;
}

export function HamburgerIcon({ isOpen, className = "" }: HamburgerIconProps) {
  if (isOpen) {
    return (
      <svg
        className={`w-8 h-6 ${className}`}
        viewBox="0 0 36 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <line x1="8" y1="4" x2="28" y2="20" />
        <line x1="8" y1="20" x2="28" y2="4" />
      </svg>
    );
  }

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
