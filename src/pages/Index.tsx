import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import HeroSection from "@/components/HeroSection";
import WhyDigitalSection from "@/components/WhyDigitalSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import RamadhanPromo from "@/components/RamadhanPromo";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { PROMO_END } from "@/lib/promoConfig";

const Index = () => {
  const [isPromoActive, setIsPromoActive] = useState(
    () => new Date().getTime() < PROMO_END
  );

  useEffect(() => {
    if (!isPromoActive) return;
    const id = setInterval(() => {
      if (new Date().getTime() >= PROMO_END) {
        setIsPromoActive(false);
        clearInterval(id);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [isPromoActive]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Marquee />
      <HeroSection />
      <AboutSection />
      <WhyDigitalSection />
      <ProcessSection />
      {isPromoActive ? <RamadhanPromo /> : <CTASection />}
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;