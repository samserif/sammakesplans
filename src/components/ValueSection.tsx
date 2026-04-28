import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const intakeUrl = "https://www.foratravel.com/intake/KXd4bQ64FK";

const details = [
  "Discovery calls are always free",
  "Planning fees discussed upfront — no surprises",
  "Group trips from 6 to 100+ people",
  "International-first, US destinations welcome",
  "I stay in touch from first search to final booking",
];

export const ValueSection = () => {
  return (
    <section id="value" className="py-24 md:py-32 bg-foreground text-background" aria-labelledby="value-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.2em] text-background/60 font-sans font-medium mb-4 block">CTA</span>
          <h2 id="value-heading" className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-background leading-tight">
            Tell me about your trip.
          </h2>
          <p className="text-background/75 text-base md:text-lg leading-relaxed font-sans max-w-2xl mt-7 mb-10">
            Fill out the intake form and I’ll follow up with a free discovery call. No pressure, no commitment — just a conversation about what you’re planning and whether I’m the right fit.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href={intakeUrl} target="_blank" rel="noopener noreferrer">
              Start the intake form →
            </a>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mt-14">
          {details.map((detail, index) => (
            <motion.div
              key={detail}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="border-t border-primary pt-4"
            >
              <p className="text-sm text-background/75 font-sans">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
