import { motion } from "framer-motion";
import { MapPin, Plane, Users } from "lucide-react";
import samHeadshot from "@/assets/sam-headshot.png";

const stats = [
  { icon: Plane, value: "43", label: "Countries Explored" },
  { icon: MapPin, value: "10+", label: "Years in NYC" },
  { icon: Users, value: "100+", label: "Groups Planned" },
];

export const AboutSection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-background" aria-labelledby="about-heading" role="region">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold font-display">My Story</span>
          <h2 id="about-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 mb-4 uppercase">
            Why Sam?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src={samHeadshot}
                alt="Samantha Provenza - Travel Advisor"
                className="w-full h-full object-cover object-top rounded-lg shadow-medium"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" aria-hidden="true" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 font-sans">
              <p>
                I've lived in NYC for 10 years and explored 43 countries, but the most important thing I've learned isn't which hotel is the trendiest—it's that a trip is only as good as the connection it fosters.
              </p>
              <p>
                Coming from a background in UX design, I see travel through a different lens. I don't just "book rooms"; I architect experiences where the flow is effortless, so you can be fully present with the people you love. Whether it's a milestone celebration or a remote team retreat, I combine deep industry connections with a detail-obsessed process to build a trip that feels exactly like <em>you</em>.
              </p>
            </div>

            {/* Handwritten note */}
            <div className="mb-8 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="font-script text-xl text-primary">
                "Connection is the real destination."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4" role="list" aria-label="Experience statistics">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-card rounded-lg" role="listitem">
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" aria-hidden="true" />
                  <span className="block font-display text-2xl font-extrabold text-foreground" aria-label={`${stat.value} ${stat.label}`}>{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-sans">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
