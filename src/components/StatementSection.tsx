import { motion } from "framer-motion";

export const StatementSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary" aria-label="Brand statement">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug uppercase tracking-wide"
        >
          A lot of group travel falls apart because nobody wants to be the planner.{" "}
          <span className="text-muted-foreground">
            I step in so the trip actually happens — and when it does, it's seamless, personal, and built around the people, not just the place.
          </span>
        </motion.p>
      </div>
    </section>
  );
};
