import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ValueSection } from "@/components/ValueSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ValueSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
