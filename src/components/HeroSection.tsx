import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/animated-icons-website.mp4";

const intakeUrl = "https://www.foratravel.com/intake/KXd4bQ64FK";

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
          <p className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] text-muted-foreground mb-6">
            Samantha Provenza · Travel Designer · Fora Travel · NYC
          </p>

          <h1
            id="hero-heading"
            className="font-display text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-foreground leading-[0.98] text-balance"
          >
            The right trip. <span className="text-primary">No guesswork.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-8 mb-10 leading-relaxed font-sans">
            Effortless group travel, handled with care. You focus on the group chat. I’ll handle the rest.
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

          <p className="mt-5 text-sm text-muted-foreground font-sans">
            Fora advisor perks at 4,500+ hotels and partners.
          </p>

          <div className="mt-14 max-w-xl border-t border-primary pt-5">
            <p className="text-xs tracking-[0.2em] text-muted-foreground font-sans font-medium mb-3">Client note</p>
            <blockquote className="text-lg md:text-xl font-display font-bold text-foreground">
              “She thinks of everything before you think to ask.”
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
