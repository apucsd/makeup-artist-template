import Link from "next/link";
import React from "react";
import { ServiceItem } from "@/types/service";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${
        service.popular ? "border-amber-400 ring-1 ring-amber-400/50" : "border-neutral-200"
      }`}
    >
      {service.popular && (
        <span className="absolute -top-3.5 right-6 px-3 py-1 text-xs font-semibold tracking-wider text-amber-950 uppercase bg-amber-300 rounded-full shadow-sm">
          Most Requested
        </span>
      )}

      <div>
        {/* Header & Price */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-6 mb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
              {service.duration}
            </span>
            <h3 className="text-xl font-serif font-semibold text-neutral-900 mt-1">
              {service.title}
            </h3>
            <p className="text-xs font-medium text-amber-700 mt-0.5">{service.tagline}</p>
          </div>
          <div className="text-right">
            <span className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
              {service.price}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features Checklist */}
        <ul className="space-y-2.5 mb-8 text-sm text-neutral-700">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Booking CTA */}
      <Link
        href={`/booking?service=${service.id}`}
        className={`block w-full py-3.5 rounded-xl font-medium text-center transition-all ${
          service.popular
            ? "bg-neutral-900 hover:bg-amber-600 text-white"
            : "bg-neutral-100 hover:bg-neutral-900 text-neutral-800 hover:text-white"
        }`}
      >
        Book This Service
      </Link>
    </div>
  );
}
