import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const intakeUrl = "https://secure.foratravel.com/intake/KXd4bQ64FK";

const serviceTiers = [
  {
    id: "direct-booking",
    title: "Direct Booking",
    fee: "Free",
    bestFor: "Best for travelers who already know where they want to stay.",
    description:
      "You’ve already picked a hotel or cruise. I check rates, lock in the best available perks through my preferred partner network, and handle the booking. No charge to you — I earn commission from the travel partner.",
    included: [
      "Rate comparison and booking",
      "Preferred partner perks — upgrades, credits, amenities you won’t get booking direct",
      "Confirmation management and support for any changes",
    ],
  },
  {
    id: "trip-planning",
    title: "Trip Planning",
    fee: "1–5 travelers · $75 planning fee",
    bestFor: "Best for couples and families planning a trip.",
    description:
      "You need help deciding — comparing hotels, getting recommendations, building an itinerary. I do the research, narrow it down, and come back with options that actually fit. A planning fee is due before work begins; we always start with a free discovery call so we're both confident it's the right fit.",
    included: [
      "Destination research and recommendations",
      "Accommodation research and comparison",
      "Activity and experience suggestions",
      "Itinerary design",
      "All bookings handled once you decide",
      "Pre-trip support",
    ],
  },
  {
    id: "group-trips",
    title: "Group Trip Planning",
    fee: "$150 planning fee",
    bestFor: "Best for friend groups, celebrations, and trips with multiple bookings to coordinate.",
    description:
      "Coordinating a group trip is a different kind of work — multiple rooms, different budgets, everyone needing to land in the same place at the same time. A $150 planning fee covers all of it, due before work begins.",
    included: [
      "Everything in Trip Planning, plus",
      "Multi-room coordination",
      "Itinerary design and activity suggestions",
    ],
  },
  {
    id: "large-corporate",
    title: "Large Groups & Corporate",
    fee: "Custom quote",
    bestFor: "Best for anything requiring room blocks, buyouts, or corporate-level coordination.",
    description:
      "For large group buyouts, corporate or wellness retreats, or any trip where you need 10+ rooms under one block — the scope varies too much for a flat fee. I put together a custom quote based on your group size, timeline, and complexity. Always starts with a free discovery call.",
    included: [
      "Room block research, negotiation, and holds",
      "Multi-destination and multi-property coordination",
      "Vendor management and event logistics",
    ],
  },
];

const faqs = [
  {
    q: "Why do I have to pay a fee if you also get commission?",
    a: "If you already know what you want, my services are free — I book it and earn commission from the travel partner. The planning fee is for when you need me to do the research and legwork. We always start with a free discovery call, so by the time any fee is due, we're both confident it's worth it.",
  },
  {
    q: "What kinds of trips do you specialize in?",
    a: "Group travel is my focus — friend trips, milestone celebrations, and group getaways. Most of my clients are coordinating multiple people who all need to show up in the same place at the same time. I've booked trips across the US, Europe, the Caribbean, North Africa, Central America, and beyond. I work across the full range of accommodations, from boutique hotels and house rentals to luxury villas. If you have a group and a general idea, I can make it happen almost anywhere.",
  },
  {
    q: "What if I don’t end up booking with you or wish to book with points?",
    a: "The planning fee covers my research time and is non-refundable. If you don't end up booking through me or want to use points, that's totally fine.",
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
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-sans font-medium mb-4 block">
            Services & Fees
          </span>
          <h2
            id="services-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight"
          >
            Pick the level of help you need.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-sans max-w-2xl mt-6">
            How I charge depends on what your trip needs. If you already know what you want, booking is free.
          </p>
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
                className="bg-background rounded-sm border border-border px-6 md:px-8 transition-smooth hover:border-primary/50 data-[state=open]:border-primary data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full pr-4 gap-2">
                    <span className="font-display text-xl font-bold text-foreground text-left">{tier.title}</span>
                    <span className="text-sm text-primary font-sans font-medium text-left sm:text-right shrink-0">
                      {tier.fee}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-5 pb-3">
                    <p className="text-primary text-sm leading-relaxed font-sans font-medium">{tier.bestFor}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">{tier.description}</p>
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
            If you already know what you want, I’ll just book it — that part’s on me. The planning fee is for when you
            need me to dig in.
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
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">FAQ</h3>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-sm px-6 bg-transparent">
                <AccordionTrigger className="hover:no-underline py-4 text-left">
                  <span className="font-sans text-sm font-medium text-foreground">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed pb-1">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
