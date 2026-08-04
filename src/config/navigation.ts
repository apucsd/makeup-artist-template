export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const navigationConfig = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],
  cta: {
    title: "Book Appointment",
    href: "/booking",
  },
  footerNav: {
    explore: [
      { title: "Services & Pricing", href: "/services" },
      { title: "Portfolio Gallery", href: "/portfolio" },
      { title: "About Elena", href: "/about" },
      { title: "Book Session", href: "/booking" },
    ],
    services: [
      { title: "Bridal Makeup", href: "/services#bridal" },
      { title: "Editorial & Glam", href: "/services#editorial" },
      { title: "Special Occasion", href: "/services#event" },
      { title: "Private Lessons", href: "/services#lessons" },
    ],
  },
};
