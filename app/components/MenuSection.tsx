import Image from "next/image";

export default function MenuSection() {
  return (
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
  );
};
