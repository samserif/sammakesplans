import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "The Quick Pulse",
    detail: "Free 15-min Call",
    description: "A fast chat to see if your vision aligns with my expertise. No commitment, just vibes.",
  },
  {
    title: "Bespoke Planning",
    detail: "$75 Planning Fee — credited to your trip",
    description: "Full itinerary design, routing, and booking. VIP hotel perks via Fora, plus a real-time mobile itinerary.",
  },
  {
    title: "Professional Retreats",
    detail: "Custom Quote",
    description: "End-to-end management for corporate teams or wellness communities. Venue sourcing, contract negotiation, and on-call concierge.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary" aria-labelledby="services-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.2em] text-accent font-display mb-4 block">Services</span>
          <h2 id="services-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-wide">
            How I Work
          </h2>
        </motion.div>

        <div className="divide-y divide-border">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-10 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground tracking-wide">
                    {service.title}
                  </h3>
                  <span className="text-xs tracking-[0.15em] text-accent font-display mt-1 block">
                    {service.detail}
                  </span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed font-sans md:max-w-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <Button variant="outline" size="xl" asChild>
            <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
              Let's Talk
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
