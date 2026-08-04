import React from "react";
import { SectionHeader } from "@/components/common/section-header";
import { BookingForm } from "@/components/features/booking/booking-form";

export const metadata = {
  title: "Book an Appointment | Aura Beauty & Artistry",
  description: "Reserve your bridal, event, or editorial makeup session with lead artist Elena Rostova.",
};

export default function BookingPage({
  searchParams,
}: {
  searchParams?: Promise<{ service?: string }>;
}) {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Reserve Your Session"
          title="Book an Appointment"
          description="Fill out the reservation details below. We will check schedule availability and send a booking confirmation within 24 hours."
        />

        <BookingForm />
      </div>
    </div>
  );
}
