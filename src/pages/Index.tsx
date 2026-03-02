import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import HeroSection from "@/components/HeroSection";
import WhyDigitalSection from "@/components/WhyDigitalSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Marquee />
      <HeroSection />
      <AboutSection />
      <WhyDigitalSection />
      <ProcessSection />
      <CTASection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default Index;
