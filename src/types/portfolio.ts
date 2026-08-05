export type PortfolioCategory = "all" | "fruits" | "veggies" | "superfoods" | "smoothies";

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  categoryLabel: string;
  image: string;
  description: string;
  client?: string;
  featured?: boolean;
}
