export const siteConfig = {
  name: "Aura Beauty & Artistry",
  title: "Aura Beauty & Artistry | Luxury Bridal & Editorial Makeup Artist",
  description:
    "Elevated bridal, editorial, and special occasion makeup artistry tailored to celebrate your natural beauty.",
  url: "https://aurabeautyartistry.com",
  ogImage: "https://aurabeautyartistry.com/og-image.jpg",
  artist: {
    name: "Elena Rostova",
    role: "Lead Celebrity & Bridal Makeup Artist",
    bio: "With over 10 years of experience in high-fashion editorial and luxury bridal artistry, Elena creates timeless, glowing looks that make every client feel effortlessly radiant.",
    location: "Los Angeles, CA & Worldwide Travel",
  },
  contact: {
    email: "hello@aurabeautyartistry.com",
    phone: "+1 (310) 555-0192",
    instagram: "@aurabeauty.artistry",
    instagramUrl: "https://instagram.com",
    pinterestUrl: "https://pinterest.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
