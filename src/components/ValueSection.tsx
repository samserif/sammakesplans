import { motion } from "framer-motion";
import { Route, Star, Umbrella, Clock } from "lucide-react";

const values = [
  {
    icon: Route,
    title: "Logistics Mastery",
    description: "I manage the multi-city routing and \"how do we get there?\" questions so you don't have to.",
  },
  {
    icon: Star,
    title: "VIP Access",
    description: "Through my partnership with Fora, I unlock perks like free breakfast, room upgrades, and resort credits at over 4,500+ hotels.",
  },
  {
    icon: Umbrella,
    title: "Ancillary Support",
    description: "I don't just book the room. I handle your airport transfers, travel insurance, and curated local tours.",
  },
  {
    icon: Clock,
    title: "Time Saved",
    description: "From research to booking to coordinating group logistics — I take it all off your plate.",
  },
];

export const ValueSection = () => {
  return (
    <section id="value" className="py-24 md:py-32 bg-primary text-primary-foreground" aria-labelledby="value-heading" role="region">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold font-display">The Difference</span>
          <h2 id="value-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mt-4 mb-6 uppercase">
            Why Book With Me?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <item.icon className="w-7 h-7 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-3 uppercase">{item.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed font-sans">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Handwritten accent note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-script text-2xl md:text-3xl text-mustard">
            "I save my clients an average of 40+ hours of planning time."
          </p>
          <p className="text-primary-foreground/50 text-sm mt-2 font-sans">— Sam's Pro Tip</p>
        </motion.div>
      </div>
    </section>
  );
};
