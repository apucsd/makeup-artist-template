export type ServiceCategoryId = "bridal" | "glam" | "editorial" | "lessons";

export interface ServiceItem {
  id: string;
  categoryId: ServiceCategoryId;
  title: string;
  tagline: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
  features: string[];
  image: string;
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: string;
  description: string;
}
