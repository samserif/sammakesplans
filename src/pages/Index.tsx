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
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why do I have to pay a fee if you also get commission?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you already know what you want, my services are free — I book it and earn commission from the travel partner. The planning fee is for when you need me to do the research and legwork. We always start with a free discovery call, so by the time any fee is due, we're both confident it's worth it."
              }
            },
            {
              "@type": "Question",
              "name": "What kinds of trips do you specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Group travel is my focus — friend trips, milestone celebrations, and group getaways. Most of my clients are coordinating multiple people who all need to show up in the same place at the same time. I've booked trips across the US, Europe, the Caribbean, North Africa, Central America, and beyond. I work across the full range of accommodations, from boutique hotels and house rentals to luxury villas. If you have a group and a general idea, I can make it happen almost anywhere."
              }
            },
            {
              "@type": "Question",
              "name": "What if I don't end up booking with you or wish to book with points?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The planning fee covers my research time and is non-refundable. If you don't end up booking through me or want to use points, that's totally fine."
              }
            }
          ]
        })}</script>
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
