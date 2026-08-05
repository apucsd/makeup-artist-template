export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const navigationConfig = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Ingredients & Flavors", href: "/ingredients-flavors" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],
  cta: {
    title: "Shop Organic Pouches",
    href: "/shop",
  },
  footerNav: {
    explore: [
      { title: "Products & Pricing", href: "/products" },
      { title: "Ingredients & Flavors", href: "/ingredients-flavors" },
      { title: "About Us", href: "/about" },
      { title: "Order Subscription", href: "/shop" },
    ],
    services: [
      { title: "Stage 1", href: "/products#stage1" },
      { title: "Stage 2", href: "/products#stage2" },
      { title: "Toddler", href: "/products#toddler" },
      { title: "Custom Baby Food Box", href: "/products#custom" },
    ],
  },
};
