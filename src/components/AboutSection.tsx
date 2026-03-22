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
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/20 rounded-lg -z-10" aria-hidden="true" />
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
                I've lived in NYC for 10 years and explored 43 countries. In my "other life" in tech, I build products that are easy for people to use. I realized travel should be the same way.
              </p>
              <p>
                Most group trips are stressful because the logistics don't match the dream. I started Sam Makes Plans to bridge that gap. I combine my obsession for detail with my deep connections in the travel industry to design seamless adventures for "experience junkies" who want hidden gems, not just tourist traps.
              </p>
            </div>

            {/* Handwritten note */}
            <div className="mb-8 p-4 bg-mustard/10 border-l-4 border-mustard rounded-r-lg">
              <p className="font-script text-xl text-mustard">
                "I save my clients an average of 40+ hours of planning time."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4" role="list" aria-label="Experience statistics">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-cream-dark rounded-lg" role="listitem">
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
