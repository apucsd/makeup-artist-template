import { ServiceCategory, ServiceItem } from "@/types/service";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "bridal",
    name: "Bridal Artistry",
    description: "Tailored luxury bridal makeup ensuring flawless endurance for your special day.",
  },
  {
    id: "glam",
    name: "Evening & Glamour",
    description: "Sophisticated red carpet, gala, and special event makeup looks.",
  },
  {
    id: "editorial",
    name: "Editorial & Photoshoot",
    description: "High-definition camera-ready makeup designed for fashion campaigns and portraits.",
  },
  {
    id: "lessons",
    name: "Masterclasses & Lessons",
    description: "One-on-one personalized makeup application lessons and routine curation.",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "signature-bridal",
    categoryId: "bridal",
    title: "Signature Bridal Experience",
    tagline: "The ultimate luxury bridal package",
    description:
      "Includes a 90-minute pre-wedding trial session, skin prep with premium serums, full long-wear bridal application, premium mink-style lashes, and a full-size touch-up luxury kit.",
    price: "$450",
    duration: "120 mins + Trial",
    popular: true,
    features: [
      "Full Pre-Wedding Preview Session",
      "Custom Airbrush & Luxury Skin Prep",
      "Individual or Strip Premium Lashes",
      "Deluxe Touch-Up Kit Included",
      "Lashes & Chest/Collarbone Glow",
    ],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bridal-party",
    categoryId: "bridal",
    title: "Bridesmaid & Guest Glam",
    tagline: "Coordinated elegance for your bridal party",
    description:
      "Full face makeup application tailored to complement the wedding theme and attire, designed for long-lasting photo perfection.",
    price: "$180",
    duration: "60 mins",
    popular: false,
    features: [
      "Customized Skin Preparation",
      "Full Face Makeup Application",
      "Complimentary False Lashes",
      "Mini Lip Touch-Up Kit",
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "luxury-event-glam",
    categoryId: "glam",
    title: "Soft Glam & Gala Makeup",
    tagline: "Effortless, luminous evening beauty",
    description:
      "Luminous skin, blended eye artistry, and customized contouring perfect for galas, red carpet events, and anniversaries.",
    price: "$220",
    duration: "75 mins",
    popular: true,
    features: [
      "Hydrating Radiance Skin Prep",
      "Custom Eye Artistry & Winged Liner",
      "Sculpted Contour & Highlighting",
      "Custom Lash Application",
    ],
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "editorial-campaign",
    categoryId: "editorial",
    title: "Editorial & High Fashion",
    tagline: "Creative vision for shoots & media",
    description:
      "High-definition camera ready techniques for fashion shoots, music videos, lookbooks, and commercial campaigns.",
    price: "$350",
    duration: "Half-day / Project",
    popular: false,
    features: [
      "HD Camera & Studio Lighting Optimized",
      "Creative & Avant-Garde Concepts",
      "On-set Touch-ups & Look Changes",
      "Collaboration with Art Directors",
    ],
    image: "https://images.unsplash.com/photo-1500840218059-b1d0017596c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "1on1-masterclass",
    categoryId: "lessons",
    title: "Private 1-on-1 Beauty Masterclass",
    tagline: "Master your personal makeup routine",
    description:
      "Comprehensive hands-on lesson covering everyday elegance to night glam, color matching, brush techniques, and audit of your makeup bag.",
    price: "$300",
    duration: "150 mins",
    popular: false,
    features: [
      "Personal Makeup Bag Audit",
      "Half-Face Demonstration & Practice",
      "Custom Face Chart & Product Guide",
      "Skin Type & Color Analysis",
    ],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop",
  },
];
