import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Experience | Fine Dining Restaurant",
  description: "Experience fine dining with a modern twist at The Experience. Book your Experience today.",
  keywords: "restaurant, fine dining, food, cuisine, The Experience, reservations",
  openGraph: {
    title: "The Experience | Fine Dining Restaurant",
    description: "Delight in Every Bite — handcrafted dishes and elegant dining.",
    url: "https://yourdomain.com",
    siteName: "The Experience",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "The Experience Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">{children}</body>
    </html>
  );
}
