import { motion } from "framer-motion";
import samHeadshot from "@/assets/sam-headshot.png";

export const AboutSection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-background" aria-labelledby="about-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={samHeadshot}
              alt="Samantha Provenza - Travel Advisor"
              className="w-full max-w-md aspect-[4/5] object-cover object-top rounded-sm"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.2em] text-accent font-display mb-4 block">My Story</span>
            <h2 id="about-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 tracking-wide">
              Why Sam?
            </h2>

            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base font-sans">
              <p>
                I've lived in NYC for 10 years and explored 43 countries, but the most important thing I've learned isn't which hotel is the trendiest—it's that a trip is only as good as the connection it fosters.
              </p>
              <p>
                Coming from a background in UX design, I see travel through a different lens. I don't just "book rooms"; I architect experiences where the flow is effortless, so you can be fully present with the people you love. Whether it's a milestone celebration or a remote team retreat, I combine deep industry connections with a detail-obsessed process to build a trip that feels exactly like <em>you</em>.
              </p>
            </div>

            <p className="font-script text-xl text-primary mt-8">
              "Connection is the real destination."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
