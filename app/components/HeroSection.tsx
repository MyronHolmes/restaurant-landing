export default function HeroSection() {
  return (
          <section className="relative bg-[url('/hero.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4">
            <div className="bg-black/60 absolute inset-0"></div>
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Delight in Every Bite
              </h1>
              <p className="text-lg md:text-xl mb-6">
                <strong className="font-black">The Experience,</strong> fine dining with a modern twist.
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
  )
}
