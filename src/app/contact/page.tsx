"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="Contact & Studio Inquiries"
          description="Have questions regarding destination travel, group bookings, or press inquiries? Send us a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-neutral-900 text-white rounded-3xl p-8 md:p-10 space-y-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Studio & Booking Office
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                We are based in Los Angeles, California and travel internationally for weddings and fashion weeks.
              </p>

              <div className="space-y-6 text-sm">
                <div>
                  <span className="block text-xs font-mono text-amber-300 uppercase">Email Enquiries</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-base text-white hover:text-amber-300 transition-colors font-medium">
                    {siteConfig.contact.email}
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-mono text-amber-300 uppercase">Studio Phone</span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-base text-white hover:text-amber-300 transition-colors font-medium">
                    {siteConfig.contact.phone}
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-mono text-amber-300 uppercase">Social Media</span>
                  <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noreferrer" className="text-base text-white hover:text-amber-300 transition-colors font-medium">
                    {siteConfig.contact.instagram}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 text-xs text-neutral-400 font-mono">
              Business Hours: Mon - Sat: 9:00 AM - 6:00 PM PST
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 p-8 md:p-10 shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-neutral-900">
              Send a General Inquiry
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-2xl">
                  ✓
                </div>
                <h4 className="font-serif text-xl font-semibold text-neutral-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-neutral-600">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Destination Wedding / Commercial Shoot / Question"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you?"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-amber-500 outline-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl py-4 font-medium">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
