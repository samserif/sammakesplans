import { motion } from "framer-motion";
import { Phone, Map, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "The Quick Pulse",
    icon: Phone,
    focus: "Free 15-min Call",
    description: "A fast chat to see if your group's vision aligns with my expertise. No commitment, just vibes.",
    inclusions: ["Trip vision alignment", "Budget feasibility check", "Service recommendation"],
    investment: "Free",
  },
  {
    title: "Bespoke Planning",
    icon: Map,
    focus: "$75 Planning Fee",
    description: "Full itinerary design, routing, and booking. The fee is credited back to your trip cost once we book.",
    inclusions: ["Custom itinerary design", "Multi-city routing", "VIP hotel perks via Fora", "Real-time mobile itinerary"],
    investment: "$75",
    note: "Credited to trip",
    featured: true,
  },
  {
    title: "Professional Retreats",
    icon: Crown,
    focus: "Custom Quote",
    description: "End-to-end management for corporate teams or wellness communities, including venue sourcing and contract negotiation.",
    inclusions: ["Venue sourcing & buyouts", "Contract negotiation", "On-call concierge", "Split-billing coordination"],
    investment: "Custom",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream-dark" aria-labelledby="services-heading" role="region">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold font-display">Services</span>
          <h2 id="services-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 mb-6 uppercase">
            How I Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            From a quick chat to full-scale retreat management, choose the level of support that fits your journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`relative bg-background rounded-lg p-8 lg:p-10 transition-all duration-500 hover:shadow-medium group border-2 ${
                service.featured
                  ? "border-accent shadow-medium md:-translate-y-4"
                  : "border-transparent shadow-soft hover:-translate-y-2 hover:border-accent/30"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full uppercase tracking-wider font-display">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  service.featured ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                }`} aria-hidden="true">
                  <service.icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-display">{service.focus}</span>
                  <h3 className="font-display text-xl font-bold text-foreground uppercase">{service.title}</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-sans">{service.description}</p>

              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider text-accent font-semibold font-display">Inclusions</span>
                <ul className="mt-3 space-y-2">
                  {service.inclusions.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-display">Investment</span>
                  <div className="text-right">
                    <span className="font-display text-2xl font-extrabold text-foreground">{service.investment}</span>
                    {service.note && (
                      <p className="text-xs text-muted-foreground mt-1 font-sans">{service.note}</p>
                    )}
                  </div>
                </div>
                <Button
                  variant={service.featured ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
                    {service.investment === "Free" ? "Book a Call" : "Get Started"}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
