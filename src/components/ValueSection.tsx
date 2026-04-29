import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const intakeUrl = "https://secure.foratravel.com/intake/KXd4bQ64FK";
const calendarUrl = "https://calendar.app.google/ziozYiHLnjXDsFp37";

export const ValueSection = () => {
  return (
    <section id="value" className="py-24 md:py-32 bg-foreground text-background" aria-labelledby="value-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs tracking-[0.2em] text-background/60 font-sans font-medium mb-4 block">Ready when you are</span>
          <h2 id="value-heading" className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-background leading-tight">
            Tell me about your trip.
          </h2>
          <p className="text-background/75 text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto mt-7 mb-10">
            Fill out the intake form or book a free discovery call. No pressure, no commitment — just a conversation about what you’re planning and whether I’m the right fit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={intakeUrl} target="_blank" rel="noopener noreferrer">
                Start the intake form →
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                Book a discovery call →
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
