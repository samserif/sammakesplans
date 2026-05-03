import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/animated-icons-website.mp4";

const intakeUrl = "https://secure.foratravel.com/intake/KXd4bQ64FK";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-contain object-center opacity-20 mix-blend-multiply md:opacity-30 lg:object-right lg:opacity-50"
        aria-label="Animated travel planning icons"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl lg:max-w-[48%] xl:max-w-2xl"
        >
          <h1
            id="hero-heading"
            className="font-display text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-foreground leading-[0.98] text-balance"
          >
            Group travel, <span className="text-primary">designed for you.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-8 mb-10 leading-relaxed font-sans">
            I design seamless group getaways and milestone celebrations, so your only job is showing up.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <Button variant="hero" size="xl" asChild>
              <a href={intakeUrl} target="_blank" rel="noopener noreferrer">
                Start Planning →
              </a>
            </Button>
            <a
              href="#how-it-works"
              className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors"
            >
              See how it works ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
