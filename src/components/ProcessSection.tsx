import { motion } from "framer-motion";
import { Phone, Palette, PenLine, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Intro Call",
    description: "A 15-minute intro call to see if our tastes align and understand your vision.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Visual Direction",
    description: "I send a visual direction for your trip with curated options and inspiration.",
  },
  {
    number: "03",
    icon: PenLine,
    title: "Build & Refine",
    description: "I build your Fora itinerary, we refine together until it feels perfect.",
  },
  {
    number: "04",
    icon: Send,
    title: "You're Set",
    description: "You receive your final mobile-ready itinerary. I handle all the bookings.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-background" aria-labelledby="process-heading" role="region">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">Process</span>
          <h2 id="process-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6">
            How I Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, refined process designed to lower the barrier and deliver exceptional experiences.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {/* Connecting Line (desktop only) - decorative */}
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center lg:text-center"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-cream-dark flex items-center justify-center mb-3 relative z-10 shadow-soft" aria-hidden="true">
                    <step.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-5xl font-serif font-medium text-cream-dark absolute -top-2 -right-6 select-none" aria-hidden="true">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
