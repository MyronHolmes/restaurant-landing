"use client";

import { useState } from "react";
import { bookTable } from "../actions/book";
import Form from "next/form";

export default function BookingForm() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    const result = await bookTable(formData);
    if (result?.success) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000); // Hide after 4s
    }
  }
  return (
    <section
      id="book"
      className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20 text-center"
    >
      {/* ✅ Success Alert */}
      {success && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in"
        >
          🎉 Table booked successfully!
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6">Book Your Experience</h2>
      <p className="mb-10 text-gray-600">
        Reserve your table and enjoy a culinary experience like no other.
      </p>

      <Form
        action={handleSubmit}
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
        />
        <input
          type="datetime-local"
          name="date"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
        />
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Book Now
          </button>
        </div>
      </Form>
    </section>
  );
};
