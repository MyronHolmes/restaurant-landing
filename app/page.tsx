import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <BookingForm />
      <Footer />
    </main>
  );
}
