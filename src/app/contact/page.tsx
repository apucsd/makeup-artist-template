"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Check, Send, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F7EF] pt-28 pb-20 text-[#243314] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E6D4] text-[#3E5028] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-[#48592B]" />
            Farm Customer Support & Inquiries
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#243314] tracking-tight">
            We'd Love To Hear From You
          </h1>
          <p className="text-base sm:text-lg text-[#4A5D37] leading-relaxed">
            Have questions about baby puree ingredients, subscription box deliveries, or wholesale farm orders? Reach out to our dedicated team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#3B4D25] text-white rounded-3xl p-8 md:p-10 space-y-8 flex flex-col justify-between shadow-xl">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4 text-[#DCE7CD]">
                Farm HQ & Customer Service
              </h2>
              <p className="text-[#DCE7CD]/80 text-xs leading-relaxed mb-8">
                Our farm headquarters are located in Sunny Valley, California. Our support team is available Monday to Saturday.
              </p>

              <div className="space-y-6 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#A4C46A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-mono text-[#A4C46A] uppercase tracking-wider">Email Us</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-base text-white hover:text-[#DCE7CD] transition-colors font-bold">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#A4C46A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-mono text-[#A4C46A] uppercase tracking-wider">Toll-Free Hotline</span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-base text-white hover:text-[#DCE7CD] transition-colors font-bold">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A4C46A] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-mono text-[#A4C46A] uppercase tracking-wider">Farm Address</span>
                    <span className="text-sm text-white font-medium">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#4E6632] flex items-center gap-2 text-xs text-[#DCE7CD]/80 font-mono">
              <Clock className="w-4 h-4 text-[#A4C46A]" />
              <span>Hours: Mon - Sat: 8:00 AM - 6:00 PM PST</span>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#DCE1CF] rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#243314]">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E2E6D4] text-[#48592B] text-2xl">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#243314]">
                  Message Received!
                </h3>
                <p className="text-xs text-[#4A5D37]">
                  Thank you for contacting Cove Valley Organics. Our farm team will reply within 24 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#354721] mb-1.5">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Parent or Guardian Name"
                    className="w-full rounded-xl border border-[#DCE1CF] bg-[#F9FAF5] px-4 py-3 text-xs text-[#243314] focus:border-[#48592B] focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#354721] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    className="w-full rounded-xl border border-[#DCE1CF] bg-[#F9FAF5] px-4 py-3 text-xs text-[#243314] focus:border-[#48592B] focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#354721] mb-1.5">Inquiry Type</label>
                  <select
                    className="w-full rounded-xl border border-[#DCE1CF] bg-[#F9FAF5] px-4 py-3 text-xs text-[#243314] focus:border-[#48592B] focus:bg-white outline-none transition-all"
                  >
                    <option>Product & Ingredient Questions</option>
                    <option>Subscription Box Delivery</option>
                    <option>Wholesale & Retail Orders</option>
                    <option>General Farm Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#354721] mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help your little one?"
                    className="w-full rounded-xl border border-[#DCE1CF] bg-[#F9FAF5] px-4 py-3 text-xs text-[#243314] focus:border-[#48592B] focus:bg-white outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#48592B] hover:bg-[#37461E] text-white rounded-full py-3.5 font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
