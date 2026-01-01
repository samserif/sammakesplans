import { motion } from "framer-motion";
import { Hotel, Map, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    tier: "Tier 1",
    title: "Booking",
    icon: Hotel,
    focus: "Single-destination hotel and resort stays.",
    ux: "You have the destination; I have the keys. I use my Fora Advanced status to unlock $1,200+ in average value per stay.",
    inclusions: ["Room upgrades", "Daily breakfast", "$100 resort credits", "VIP status"],
    investment: "$0",
    note: "Commission-based",
  },
  {
    tier: "Tier 2",
    title: "Itinerary",
    icon: Map,
    focus: "Custom-built itineraries for small groups (up to 8 people).",
    ux: "Total friction removal. I design the \"flow\" of your trip, coordinating multi-city transfers, vetted local guides, and 2 curated \"Hero Moments.\"",
    inclusions: ["Real-time mobile itinerary", "Multi-city coordination", "Vetted local guides", "2 Hero Moments"],
    investment: "Starting at $200",
    featured: true,
  },
  {
    tier: "Tier 3",
    title: "Enterprise",
    icon: Crown,
    focus: "Large-scale groups (10+), corporate retreats, or \"Life Milestone\" celebrations.",
    ux: "Enterprise-level planning. Private villa/island buy-outs where the environment is entirely yours. Includes split-billing coordination for high-net-worth groups.",
    inclusions: ["On-call concierge during travel", "Private air coordination", "Localized \"fixers\"", "Split-billing coordination"],
    investment: "Contact for pricing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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
    <section id="services" className="py-24 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4 mb-6">
            Levels of Engagement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From seamless bookings to enterprise-level group coordination, choose the level of design that fits your journey.
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
              className={`relative bg-background rounded-lg p-8 lg:p-10 transition-all duration-500 hover:shadow-medium group ${
                service.featured
                  ? "ring-2 ring-primary shadow-medium md:-translate-y-4"
                  : "shadow-soft hover:-translate-y-2"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  service.featured ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                }`}>
                  <service.icon size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{service.tier}</span>
                  <h3 className="font-serif text-2xl font-medium text-foreground">{service.title}</h3>
                </div>
              </div>

              <p className="text-sm font-medium text-foreground mb-4">{service.focus}</p>

              <div className="mb-6 p-4 bg-cream rounded-lg">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">The UX</span>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{service.ux}</p>
              </div>

              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Inclusions</span>
                <ul className="mt-3 space-y-2">
                  {service.inclusions.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Investment</span>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-medium text-foreground">{service.investment}</span>
                    {service.note && (
                      <p className="text-xs text-muted-foreground mt-1">{service.note}</p>
                    )}
                  </div>
                </div>
                <Button
                  variant={service.featured ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
                    Get Started
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
