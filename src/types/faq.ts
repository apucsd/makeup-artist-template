export interface FAQItem {
  id: string;
  category: "ordering" | "shipping" | "prep" | "safety";
  question: string;
  answer: string;
}
