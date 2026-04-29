import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Megan G.",
    destination: "Group trip · Egypt",
    quote:
      "She narrowed down what we wanted, gave us a few options we could easily pick between. As a project manager, I live and die by the details — and she nailed it. Our 2-week Egypt tour was a raving success because of Sam.",
  },
  {
    name: "Ryan W.",
    destination: "Group ski trip · Big Sky, Montana",
    quote:
      "Sam handled every detail seamlessly — from arranging ski equipment delivered straight to the house, to coordinating our rental car at the airport. Her attention to detail, responsiveness, and organization made planning effortless.",
  },
  {
    name: "Josh G.",
    destination: "Morocco",
    quote:
      "Samantha captured my travel style perfectly. She found amazing hotels and tours, every detail was covered including transportation, and I didn’t have a single worry as I bounced around Morocco.",
  },
  {
    name: "Giselle B.",
    destination: "El Salvador",
    quote:
      "Sam brought an incredible level of care and attention to detail. She handled confirmations, reminded me of important details, and ensured everything was secure — which gave me complete peace of mind for an international booking.",
  },
  {
    name: "Yuan S.",
    destination: "Portugal",
    quote:
      "Her pro tip to rent a car was super smart and made my trip so much easier. She is very responsive, thoughtful, and genuinely wants you to have a great time. Her expertise saved me so much time.",
  },
  {
    name: "Alex M.",
    destination: "Boston",
    quote:
      "I now plan on using Sam for every trip I take going forward. She found an amazing hotel at a better price than we could find ourselves, then got the hotel to give us extra perks. Couldn’t recommend her more.",
  },
];

const stats = [
  { value: "40+", label: "Countries traveled first-hand" },
  { value: "50+", label: "Trips designed" },
  { value: "5★", label: "Across every review on Fora" },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-background" aria-labelledby="reviews-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-sans font-medium mb-4 block">Client Reviews</span>
          <h2 id="reviews-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            What clients say.
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 md:gap-8 text-center mt-10 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl md:text-6xl font-display font-black text-foreground">
                {stat.value}
              </span>
              <div className="w-10 h-1 bg-primary rounded-full mt-3 mb-2" />
              <span className="text-xs md:text-sm text-muted-foreground font-sans max-w-32">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-secondary rounded-sm border border-border p-7 flex min-h-[22rem] flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-4" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed font-sans mb-6">
                  “{review.quote}”
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">{review.name}</p>
                <p className="text-muted-foreground text-xs font-sans">{review.destination}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
