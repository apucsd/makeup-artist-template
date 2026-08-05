import { ServiceCategory, ServiceItem } from "@/types/service";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "stage1",
    name: "Stage 1 (4+ Months)",
    description: "Single-ingredient and gentle first bites for early infant taste exploration.",
  },
  {
    id: "stage2",
    name: "Stage 2 (6+ Months)",
    description: "Nutrient-rich fruit, vegetable, and grain flavor pairings for growing babies.",
  },
  {
    id: "toddler",
    name: "Toddler Superfoods (12+ Months)",
    description: "Protein & fiber packed smoothie pouches for active little explorers.",
  },
  {
    id: "custom",
    name: "Variety & Subscription Boxes",
    description: "Build a custom box or subscribe for fresh weekly farm-to-pouch delivery.",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "banana-ginger-apple",
    categoryId: "stage1",
    title: "Banana, Ginger & Apple Puree",
    tagline: "Our bestseller gentle digestive blend",
    description:
      "Crafted with organic sweet bananas, crisp Gala apples, and a subtle touch of organic ginger root to soothe little tummies. Zero added sugar or preservatives.",
    price: "$3.49 / pouch",
    duration: "4 oz (113g)",
    popular: true,
    features: [
      "100% Certified USDA Organic",
      "Soothes Tummy & Gentle Digestion",
      "Zero Added Sugars or Concentrates",
      "Non-GMO Verified Ingredients",
      "BPA-Free Recyclable Pouch",
    ],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "sweet-potato-carrot",
    categoryId: "stage2",
    title: "Sweet Potato & Golden Carrot",
    tagline: "Beta-carotene rich golden veggie puree",
    description:
      "A velvety smooth puree of slow-roasted sweet potatoes and crisp golden carrots. Packed with Vitamin A and natural sweetness for baby's developing palette.",
    price: "$3.79 / pouch",
    duration: "4.5 oz (127g)",
    popular: true,
    features: [
      "Rich in Essential Vitamin A & Fiber",
      "Slow-Roasted for Natural Sweetness",
      "Stage 2 Smooth Texture Blend",
      "No Water or Starches Added",
      "Resealable Smart Cap Pouch",
    ],
    image: "https://images.unsplash.com/photo-1598170845058-12ef4a457539?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "chickpea-spinach-superfood",
    categoryId: "toddler",
    title: "Chickpea & Spinach Superfood",
    tagline: "Plant-protein & iron packed smoothie",
    description:
      "Nutritious organic chickpeas blended with tender spinach leaves, green apple, and a splash of organic coconut cream for wholesome toddler energy.",
    price: "$3.99 / pouch",
    duration: "4.5 oz (127g)",
    popular: true,
    features: [
      "4g Plant Protein & 3g Fiber per Pouch",
      "Iron-Rich Organic Greens",
      "Smooth & Creamy Coconut Base",
      "Ideal On-The-Go Toddler Snack",
      "Eco-Friendly Recyclable Pouch",
    ],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "organic-variety-box-12",
    categoryId: "custom",
    title: "12-Pouch Organic Variety Box",
    tagline: "Curated chef selection of top stage 1 & 2 flavors",
    description:
      "Includes 3 Banana Ginger Apple, 3 Sweet Potato Carrot, 3 Pear Spinach, and 3 Blueberry Oat pouches delivered fresh in an insulated box.",
    price: "$38.99",
    duration: "12 Pouches",
    popular: true,
    features: [
      "12 Assorted Organic Puree Pouches",
      "Save 15% Compared to Single Pouches",
      "Insulated Cold-Pack Delivery",
      "Includes Free Feeding Spoon Adapter",
      "Pause or Cancel Anytime",
    ],
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "avocado-sweet-pea",
    categoryId: "stage1",
    title: "Creamy Avocado & Sweet Pea",
    tagline: "Healthy brain fats & gentle greens",
    description:
      "Fresh organic Hass avocados pureed with sweet green peas. Rich in healthy monounsaturated fats for baby's rapid brain growth.",
    price: "$3.59 / pouch",
    duration: "4 oz (113g)",
    popular: false,
    features: [
      "High in Brain-Boosting Healthy Fats",
      "Silky Smooth Texture for First Bites",
      "Fresh Farm Picked Green Peas",
      "Unsweetened & Unsalted",
    ],
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "custom-pouch-box",
    categoryId: "custom",
    title: "Custom Build-Your-Own Box",
    tagline: "Pick 16 or 24 of baby's favorite pouch recipes",
    description:
      "Mix and match any of our 14 certified organic puree recipes. Choose your delivery frequency for convenient farm-fresh nutrition.",
    price: "$49.99 / box",
    duration: "16 Pouches",
    popular: false,
    features: [
      "Choose Any 16 Pouch Flavors",
      "Weekly or Monthly Subscription",
      "Free Insulated Express Shipping",
      "100% Satisfaction Guarantee",
    ],
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=800&auto=format&fit=crop",
  },
];
