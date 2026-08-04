export interface BookingFormData {
  serviceId: string;
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventTime: string;
  location: string;
  numberOfPeople: number;
  notes: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  bookingId?: string;
}
