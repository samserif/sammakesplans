import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const serviceTiers = [
  {
    id: "direct-booking",
    title: "Direct Booking",
    fee: "Free",
    bestFor: "You know your hotel and dates, you just want rates",
    description:
      "You already have a hotel or cruise in mind—I check rates, secure the best available perks, and handle the booking.",
    included: [
      "Rate comparison and booking execution",
      "Preferred partner perks and amenities (upgrades, credits, etc.)",
      "Confirmation and support for any changes",
    ],
    howItWorks: "No fee to you. I earn commission from travel partners.",
  },
  {
    id: "trip-planning",
    title: "Trip Planning (1–5 travelers)",
    fee: "$75 deposit",
    bestFor: "Couples, families, or solo travelers who need research and recommendations",
    description:
      "You're not sure where to stay, want options compared, or need help planning.",
    included: [
      "Destination consultation and recommendations",
      "Hotel/villa research and comparison",
      "Activity and experience suggestions",
      "Itinerary design",
      "All bookings handled once you decide",
    ],
    howItWorks:
      "$75 deposit due before planning begins. If you book through me, the $75 is credited back (essentially free). If you don't book, the deposit is non-refundable (covers my research time).",
  },
  {
    id: "group-trips",
    title: "Group Trips (6+ travelers)",
    fee: "$150 flat fee",
    bestFor: "Friend groups, celebrations, wellness retreats",
    description:
      "Coordinating a group trip is complex—this flat fee covers the logistics.",
    included: [
      "Everything in Trip Planning, plus:",
      "Group logistics coordination",
      "Room block research and holds",
      "Group activity planning",
      "Payment coordination guidance",
    ],
    howItWorks:
      "$150 one-time planning fee due before work begins. Fee is non-refundable (covers coordination time regardless of outcome).",
  },
  {
    id: "large-corporate",
    title: "Large Groups & Corporate (15+)",
    fee: "Custom quote",
    bestFor: "Corporate retreats, large events, complex multi-destination trips",
    description: "",
    included: [],
    howItWorks:
      "Free discovery call to understand scope. Custom quote based on group size, duration, and complexity. Fees discussed on a case-by-case basis.",
  },
];

const faqs = [
  {
    q: "Why do I have to pay if you also get commission?",
    a: "If you already know what you want, it's free—I just book it and earn commission. The deposit is for when you need me to do research and planning. It gets credited back when you book, so you're not paying extra.",
  },
  {
    q: "Other advisors don't charge fees.",
    a: "Many don't, and that's fine if you just need a booking. The deposit is for planning work—and you get it back when you book. It just makes sure I can dedicate real time to your trip.",
  },
  {
    q: "What if I don't end up booking?",
    a: "The deposit covers my research time, so it's non-refundable if you don't book. But I always start with a free discovery call so we're both confident it's a good fit before you put anything down.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary" aria-labelledby="services-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs tracking-[0.2em] text-accent font-display mb-4 block">Services</span>
          <h2 id="services-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-wide">
            Working With Me
          </h2>
        </motion.div>

        {/* Service Tiers Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {serviceTiers.map((tier) => (
              <AccordionItem
                key={tier.id}
                value={tier.id}
                className="bg-background rounded-xl border-none px-6 md:px-8"
                style={{ boxShadow: "8px 8px 0px hsl(var(--primary))" }}
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="font-display text-lg font-extrabold text-foreground text-left">
                      {tier.title}
                    </span>
                    <span className="text-sm text-accent font-display shrink-0 ml-4">
                      {tier.fee}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pb-2">
                    <p className="text-xs tracking-[0.15em] text-accent font-display uppercase">
                      Best for: {tier.bestFor}
                    </p>
                    {tier.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                        {tier.description}
                      </p>
                    )}
                    {tier.included.length > 0 && (
                      <div>
                        <p className="text-sm font-display font-semibold text-foreground mb-2">What's included:</p>
                        <ul className="space-y-1.5">
                          {tier.included.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground font-sans flex items-start gap-2">
                              <span className="text-accent mt-1 shrink-0">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tier.howItWorks && (
                      <div>
                        <p className="text-sm font-display font-semibold text-foreground mb-1">How it works:</p>
                        <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                          {tier.howItWorks}
                        </p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Not Sure Yet? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14"
        >
          <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground mb-2">
            Not Sure Yet?
          </h3>
          <p className="text-muted-foreground text-sm font-sans mb-4">
            Book a free discovery call where we discuss:
          </p>
          <ul className="space-y-1.5">
            {[
              "Your travel goals and style",
              "Which service tier fits your needs",
              "Whether we're a good fit to work together",
            ].map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground font-sans flex items-start gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="https://calendar.app.google/ziozYiHLnjXDsFp37" target="_blank" rel="noopener noreferrer">
              Book a Discovery Call
            </a>
          </Button>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16"
        >
          <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground mb-6">
            FAQ
          </h3>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border/40 rounded-lg px-6 bg-transparent"
              >
                <AccordionTrigger className="hover:no-underline py-4 text-left">
                  <span className="font-sans text-sm font-medium text-foreground">
                    "{faq.q}"
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed pb-1">
                    "{faq.a}"
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
