import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import PhotoCarousel from "@/components/photo-carousel";
import AboutSection from "@/components/about-section";
import ClassesSection from "@/components/classes-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import NoticeBoardSection from "@/components/notice-board-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <PhotoCarousel />
      <AboutSection />
      <ClassesSection />
      <GallerySection />
      <TestimonialsSection />
      <NoticeBoardSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
