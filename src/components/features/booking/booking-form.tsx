"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { BookingFormData } from "@/types/booking";
import { Button } from "@/components/ui/button";

interface BookingFormProps {
  initialServiceId?: string;
}

export function BookingForm({ initialServiceId = "" }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId || servicesData[0]?.id || "",
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "10:00",
    location: "",
    numberOfPeople: 1,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedService = servicesData.find((s) => s.id === formData.serviceId);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-12 text-center max-w-2xl mx-auto shadow-sm space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-3xl">
          ✓
        </div>
        <h3 className="font-serif text-3xl font-semibold text-neutral-900">
          Booking Request Received!
        </h3>
        <p className="text-neutral-600 text-base leading-relaxed">
          Thank you, <strong className="text-neutral-900">{formData.fullName}</strong>. We have received your inquiry for{" "}
          <strong className="text-amber-700">{selectedService?.title}</strong> on{" "}
          <span className="font-semibold">{formData.eventDate}</span>.
        </p>
        <p className="text-sm text-neutral-500">
          Our team will review artist availability and confirm your reservation via email within 24 hours.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-8 py-3"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-10 shadow-sm space-y-8">
      <div className="border-b border-neutral-100 pb-6">
        <h3 className="font-serif text-2xl font-semibold text-neutral-900">
          Appointment Request Form
        </h3>
        <p className="text-sm text-neutral-500 mt-1">
          Please fill in your event details to check artist availability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Selection */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Select Artistry Package *
          </label>
          <select
            value={formData.serviceId}
            onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
            required
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
          >
            {servicesData.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title} — {service.price} ({service.duration})
              </option>
            ))}
          </select>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Jessica Sterling"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="jessica@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Event Date *
          </label>
          <input
            type="date"
            required
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Location / Venue *
          </label>
          <input
            type="text"
            required
            placeholder="Studio / Malibu, CA / On-location venue"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </div>

        {/* Number of People */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Party Size (Number of Persons)
          </label>
          <input
            type="number"
            min={1}
            max={15}
            value={formData.numberOfPeople}
            onChange={(e) => setFormData({ ...formData, numberOfPeople: parseInt(e.target.value) || 1 })}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </div>

        {/* Special Notes */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Special Requests / Skin Concerns / Theme Details
          </label>
          <textarea
            rows={4}
            placeholder="Share any vision details, skin sensitivity notes, or timeline specifications..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-4 rounded-xl text-base transition-all"
      >
        Submit Booking Inquiry
      </Button>
    </form>
  );
}
