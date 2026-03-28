import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden" aria-labelledby="hero-heading">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center pt-28 pb-20">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 id="hero-heading" className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] tracking-tight uppercase">
            Because It's
            <br />
            Never{" "}
            <span className="font-script text-mustard text-[0.65em] normal-case italic">just</span>
            <br />
            About The
            <br />
            Destination.
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/75 max-w-lg mt-8 mb-10 leading-relaxed font-sans">
            Travel is as unique as the people you share it with. I design bespoke group adventures and retreats that prioritize the <em>who</em> as much as the <em>where</em>.
          </p>

          <Button variant="hero-outline" size="xl" asChild>
            <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
              Start Your Trip Inquiry
            </a>
          </Button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block"
        >
          <img
            src={heroImage}
            alt="Group of travelers sharing a meal under warm ambient lighting"
            className="w-full h-[70vh] object-cover rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};
