import Image from "next/image";

export default function AboutSection() {
  return (
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
  )
}
