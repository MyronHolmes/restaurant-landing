"use client";

import Image from "next/image";
import { useState } from "react";
import { bookTable } from "./actions/book";
import { IoChevronUp } from "react-icons/io5";
import Form from "next/form";

export default function Home() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    const result = await bookTable(formData);
    if (result?.success) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000); // Hide after 4s
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      {/* Fixed Header */}
      <header>
        <a
          href="#top"
          className="fixed right-5 bottom-5 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg hover:border-red-500 transition"
        >
          <IoChevronUp className="text-red-500 text-2xl" />
        </a>
      </header>

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

      <section className="relative bg-[url('/hero.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4">
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Delight in Every Bite
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experience fine dining with a modern twist
          </p>
          <div>
            <a
              href="#book"
              className="border border-white/10 bg-red-500 hover:bg-red-600 text-white px-6 py-3 mx-1 rounded-lg font-semibold transition hover:border-white"
            >
              Book Your Experience
            </a>
            <a
              href="#menu"
              className="border border-red-100/10 bg-neutral-100 text-red-500 hover:bg-neutral-200 hover:text-red-600  px-6 py-3 mx-1 rounded-lg font-semibold transition hover:border-red-600"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto mb-8">
          At <strong>The Experience</strong>, we serve handcrafted dishes made
          from locally sourced ingredients. Our chefs blend traditional flavors
          with modern presentation for a dining experience you won’t forget.
        </p>
        <Image
          src={"/about.jpg"}
          alt="Restaurant interior"
          width={600}
          height={500}
          loading="lazy"
          className="rounded-lg shadow-lg mx-auto"
        />
      </section>

      {/* Menu Section */}
      <section id="menu" className="bg-gray-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Signature Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Salmon Sushi", "Lamb Chops", "King Soup"].map((dish, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
            >
              <Image
                src={`/dish${i + 1}.jpg`}
                alt={dish}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dish}</h3>
                <p className="text-gray-600">
                  A delightful taste of freshness and flavor.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="book"
        className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20 text-center"
      >
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
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} The Experience. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
