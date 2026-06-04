import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StatementSection } from "@/components/StatementSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ValueSection } from "@/components/ValueSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Samantha Provenza | Group Travel Designer</title>
        <meta
          name="description"
          content="Effortless group travel, handled with care. Fora Advanced Certified Advisor."
        />
        <link rel="canonical" href="https://sammakesplans.com/" />
        <meta property="og:title" content="Samantha Provenza | Group Travel Designer" />
        <meta property="og:description" content="Effortless group travel, handled with care. Fora Advanced Certified Advisor." />
        <meta property="og:url" content="https://sammakesplans.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <HeroSection />
        <StatementSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <ValueSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
