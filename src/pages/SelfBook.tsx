import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Coffee, HandCoins, BedDouble, Clock, Gift } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const portalUrl = "https://trips.foratravel.com/samantha-provenza/book";
const intakeUrl = "https://secure.foratravel.com/intake/XzBS7KkrM5";

const steps = [
  "Login via the self-booking portal.",
  "Browse and book your hotel stay with perks.",
  "I'll manage your reservation and reach out personally to make sure your stay is customized to your liking.",
];

const amenities = [
  { icon: Coffee, label: "Daily breakfast" },
  { icon: HandCoins, label: "Hotel credit" },
  { icon: BedDouble, label: "Room upgrade" },
  { icon: Clock, label: "Early/late checkout" },
  { icon: Gift, label: "Welcome amenity" },
];

const SelfBook = () => {
  return (
    <>
      <Helmet>
        <title>Book with Perks | Samantha Provenza</title>
        <meta
          name="description"
          content="Access the self-booking portal to book your next hotel stay with complimentary VIP perks."
        />
        <link rel="canonical" href="https://sammakesplans.com/self-book" />
      </Helmet>

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="py-6 border-b border-border bg-background" role="banner">
        <div className="container mx-auto px-6 lg:px-12">
          <a href="/" className="flex flex-col leading-none w-fit" aria-label="Samantha Provenza - Home">
            <span className="font-display font-black text-primary text-2xl">SP</span>
          </a>
        </div>
      </header>

      <main id="main-content" className="min-h-screen bg-background">
        <section className="py-24 md:py-32" aria-labelledby="self-book-heading">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-xs tracking-[0.2em] text-muted-foreground font-sans font-medium mb-4 block">
                  Self-Booking Portal
                </span>
                <h1
                  id="self-book-heading"
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.98] text-balance mb-8"
                >
                  Book with <span className="text-primary">perks.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed font-sans mb-4">
                  Access the self-booking portal to book your next hotel stay with{" "}
                  <strong className="text-foreground font-semibold">complimentary perks</strong>.
                </p>

                <ol className="space-y-4 my-8">
                  {steps.map((step, i) => (
                    <li key={i} className="flex gap-4 text-sm text-muted-foreground font-sans leading-relaxed">
                      <span className="font-display font-black text-primary/40 text-xl shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>

                <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-3">
                  Not sure yet where you want to stay, or looking for recommendations? No problem — you'll get access
                  to these VIP perks when you work with me on any of{" "}
                  <a href="/#services" className="text-primary underline-offset-4 hover:underline">
                    my services
                  </a>
                  .
                </p>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  <strong className="text-foreground">Remember:</strong> this portal is new, so more hotels will be
                  added soon. I have perks at many more hotels than what's currently listed — if you don't see what
                  you're looking for, reach out and I'll book it directly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-6"
              >
                <div className="bg-secondary rounded-sm border border-border p-8 md:p-10 text-center">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">Existing clients start here</h2>
                  <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                    <a href={portalUrl} target="_blank" rel="noopener noreferrer">
                      Go to self-booking portal →
                    </a>
                  </Button>
                </div>

                <div className="bg-foreground text-background rounded-sm p-8 md:p-10 text-center">
                  <h2 className="font-display text-2xl font-bold text-background mb-3">New here?</h2>
                  <p className="text-background/75 text-sm font-sans leading-relaxed mb-6 max-w-sm mx-auto">
                    Fill out a quick intake form and I'll set you up with portal access and your own VIP perks.
                  </p>
                  <Button variant="hero-outline" size="xl" asChild className="w-full sm:w-auto border-background/40 text-background hover:bg-background hover:text-foreground">
                    <a href={intakeUrl} target="_blank" rel="noopener noreferrer">
                      Get started →
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mt-20 pt-16 border-t border-border"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-8 text-center">
                What's included
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
                {amenities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-3">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    <span className="text-xs text-muted-foreground font-sans leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SelfBook;
