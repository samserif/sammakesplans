import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Group of travelers sharing a meal under warm ambient lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h1 id="hero-heading" className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground mb-6 leading-[1.05] tracking-tight uppercase">
            Because It's Never
            <br />
            <span className="font-script text-mustard text-[0.7em] normal-case italic">just</span>{" "}
            About The Destination.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Travel is as unique as the people you share it with. I design bespoke group adventures and retreats that prioritize the <em>who</em> as much as the <em>where</em>. I handle the logistics; you focus on the memories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
                Start Your Trip Inquiry
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#services">
                View Services
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#story"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Scroll down to learn more"
          >
            <span className="text-xs uppercase tracking-widest font-display font-semibold" aria-hidden="true">Explore</span>
            <ArrowDown size={20} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
