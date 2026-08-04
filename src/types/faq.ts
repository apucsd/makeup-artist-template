export interface FAQItem {
  id: string;
  category: "booking" | "travel" | "prep" | "hygiene";
  question: string;
  answer: string;
}
