"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqsData.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen ? "bg-white border-amber-300 shadow-md ring-1 ring-amber-200" : "bg-white border-neutral-200 hover:border-neutral-300"
            }`}
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-serif text-lg font-medium text-neutral-900 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-transform duration-300 ${isOpen ? "rotate-180 bg-amber-100 text-amber-900" : ""}`}>
                ↓
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
