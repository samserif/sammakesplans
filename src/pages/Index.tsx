import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
