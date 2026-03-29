import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Josh G.",
    destination: "Morocco",
    quote:
      "Samantha's the best and curated a spectacular Moroccan experience! She took the time to learn about me and what I was hoping to see, and put together a trip that was superbly balanced between adventure and luxury.",
    rating: 5,
  },
  {
    name: "Giselle B.",
    destination: "El Salvador",
    quote:
      "Sam brought an incredible level of care and attention to detail to planning my birthday stay. She thoughtfully presented options, helped me narrow down the perfect place to stay, and managed every step of the process from start to finish.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    destination: "Portugal",
    quote:
      "Sam was incredibly helpful and professional in helping us plan our stay in Madeira. Her insights helped us settle on a destination that would best suit our needs when we were in a state of decision fatigue with wedding planning.",
    rating: 5,
  },
  {
    name: "Jonathan L.",
    destination: "Las Vegas",
    quote:
      "Sam always helps me pick the best hotels to stay wherever I travel — this time it was the newest casino/hotel on the strip that lived up to its five-star rating!",
    rating: 5,
  },
  {
    name: "Valerie C.",
    destination: "New York",
    quote:
      "Excellent service. Provided few options for me to choose. Did follow-up and make sure everything was good! Will definitely book with her again in the future.",
    rating: 5,
  },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-background" aria-labelledby="reviews-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm text-accent font-display mb-4 block">14 reviews on Fora Travel</span>
          <h2 id="reviews-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Client Love
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-secondary rounded-xl p-7 flex flex-col justify-between"
              style={{
                boxShadow: "6px 6px 0px hsl(var(--primary))",
              }}
            >
              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-mustard text-mustard" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed font-sans italic mb-6">
                  "{review.quote}"
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">{review.name}</p>
                <p className="text-muted-foreground text-xs font-sans">Travel to {review.destination}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.foratravel.com/advisor/samantha-provenza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent font-display hover:underline underline-offset-4"
          >
            See all 14 reviews on Fora →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
