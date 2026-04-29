import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share your details",
    description: "Answer a few questions about your trip, your dates, and what you’re imagining. Takes about three minutes. No commitment.",
  },
  {
    number: "02",
    title: "Discovery call",
    description: "We talk through the trip — what you want, what you don’t, and what would make it a success for your specific group.",
  },
  {
    number: "03",
    title: "Proposal itinerary",
    description: "A curated proposal with two or three strong choices — all vetted, all right for your group. You pick what resonates.",
  },
  {
    number: "04",
    title: "Let’s get you booked",
    description: "Bookings, confirmations, room blocks, and logistics are handled leading up to your trip.",
  },
];

export const StatementSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background" aria-labelledby="process-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-3xl"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-sans font-medium mb-4 block">How it works</span>
          <h2 id="process-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            How it works.
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-border" aria-hidden="true" />
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-t border-primary pt-6 lg:border-t-0 lg:pr-10"
            >
              <div className="hidden lg:block absolute top-[2.15rem] left-0 h-3 w-3 rounded-full bg-primary ring-4 ring-background" aria-hidden="true" />
              <p className="font-display text-4xl font-black text-primary/25 mb-5">{step.number}</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-sm text-muted-foreground border-l-2 border-primary pl-5"
        >
          Discovery calls are always free. Planning fees apply based on trip type — see below.
        </motion.p>
      </div>
    </section>
  );
};
