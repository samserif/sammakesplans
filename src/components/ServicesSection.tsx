import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const intakeUrl = "https://www.foratravel.com/intake/KXd4bQ64FK";

const serviceTiers = [
  {
    id: "direct-booking",
    title: "Direct Booking",
    fee: "Free",
    description:
      "You’ve already picked a hotel or cruise. I check rates, lock in the best available perks through my preferred partner network, and handle the booking. No charge to you — I earn commission from the travel partner.",
    included: [
      "Rate comparison and booking execution",
      "Preferred partner perks — upgrades, credits, amenities you won’t get booking direct",
      "Confirmation management and support for any changes",
    ],
  },
  {
    id: "trip-planning",
    title: "Trip Planning",
    fee: "1–5 travelers · $75 planning fee",
    description:
      "You need help deciding — comparing hotels, getting recommendations, building an itinerary. The $75 deposit is due before planning begins and covers my research time. Non-refundable, but always preceded by a free discovery call so we’re both confident it’s a good fit.",
    included: [
      "Destination consultation and recommendations",
      "Hotel and villa research and comparison",
      "Activity and experience suggestions",
      "Itinerary design",
      "All bookings handled once you decide",
    ],
  },
  {
    id: "group-trips",
    title: "Group Trips",
    fee: "6–15 travelers · $150 planning fee",
    description:
      "Coordinating a group trip is a different kind of work — room blocks, group dynamics, logistics at scale. This flat fee covers all of it, due before planning begins.",
    included: [
      "Everything in Trip Planning, plus",
      "Group logistics coordination",
      "Room block research and holds",
      "Group activity planning",
      "Payment coordination guidance",
    ],
  },
  {
    id: "large-corporate",
    title: "Large Groups & Corporate",
    fee: "15+ travelers · Custom quote",
    description:
      "For corporate retreats, large events, or complex multi-destination trips, I put together a custom quote based on scope. Starts with a free discovery call.",
    included: [],
  },
];

const faqs = [
  {
    q: "Why do I have to pay if you also get commission?",
    a: "If you already know what you want, it’s free — I just book it and earn commission from the travel partner. The planning deposit is for when you need me to do research. It covers my time regardless of outcome.",
  },
  {
    q: "Do we talk before any fee is due?",
    a: "Yes. We always start with a free discovery call so we’re both confident before you put anything down.",
  },
  {
    q: "What if I don’t end up booking?",
    a: "The deposit covers my research time, so it’s non-refundable if you don’t book. You’ll know the planning fee upfront before any work begins.",
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
          className="mb-12"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-sans font-medium mb-4 block">Services & Fees</span>
          <h2 id="services-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            Simple, transparent.
          </h2>
        </motion.div>

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
                className="bg-background rounded-sm border border-border px-6 md:px-8"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full pr-4 gap-2">
                    <span className="font-display text-xl font-bold text-foreground text-left">
                      {tier.title}
                    </span>
                    <span className="text-sm text-primary font-sans font-medium text-left sm:text-right shrink-0">
                      {tier.fee}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-5 pb-3">
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      {tier.description}
                    </p>
                    {tier.included.length > 0 && (
                      <div>
                        <p className="text-sm font-sans font-medium text-foreground mb-2">Includes:</p>
                        <ul className="space-y-1.5">
                          {tier.included.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground font-sans flex items-start gap-2">
                              <span className="text-primary mt-1 shrink-0">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 border-l-2 border-primary pl-5"
        >
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            If you already know what you want, it’s free — I just book it and earn commission from the travel partner. The planning deposit is for when you need me to do research.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Button variant="hero" size="xl" asChild>
            <a href={intakeUrl} target="_blank" rel="noopener noreferrer">
              Start the intake form →
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            FAQ
          </h3>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-sm px-6 bg-transparent"
              >
                <AccordionTrigger className="hover:no-underline py-4 text-left">
                  <span className="font-sans text-sm font-medium text-foreground">
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed pb-1">
                    {faq.a}
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
