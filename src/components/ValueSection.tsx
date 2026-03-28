import { motion } from "framer-motion";

const values = [
  {
    title: "Logistics Mastery",
    description: "I handle the 'how do we get there?' puzzles so your group stays in the moment.",
  },
  {
    title: "VIP Access",
    description: "Through Fora, I secure perks that make you feel truly cared for—like free breakfast and room upgrades.",
  },
  {
    title: "Whole-Trip Support",
    description: "From transfers to insurance and curated local tours, I'm your safety net.",
  },
  {
    title: "Time Saved",
    description: "From research to booking to coordinating group logistics — I take it all off your plate.",
  },
];

export const ValueSection = () => {
  return (
    <section id="value" className="py-24 md:py-32 bg-primary text-primary-foreground" aria-labelledby="value-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-mustard font-display mb-4 block">The Empathetic Advantage</span>
          <h2 id="value-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground uppercase tracking-wide">
            Why Book With Me?
          </h2>
        </motion.div>

        <div className="space-y-10">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-primary-foreground/15 pb-8 last:border-0"
            >
              <h3 className="font-display text-lg md:text-xl font-extrabold text-primary-foreground uppercase tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-primary-foreground/70 text-base leading-relaxed font-sans max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-script text-2xl md:text-3xl text-mustard mt-16"
        >
          "I save my clients 40+ hours of stress so they can just show up and be present."
        </motion.p>
      </div>
    </section>
  );
};
