import { motion } from "framer-motion";
import { MapPin, Plane, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import samProfile from "@/assets/sam-profile.png";

const stats = [
  { icon: Plane, value: "41", label: "Countries Explored" },
  { icon: MapPin, value: "∞", label: "Tattoo Souvenirs" },
  { icon: Users, value: "100+", label: "Groups Designed" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                src={samProfile}
                alt="Samantha Provenza - Travel Advisor"
                className="w-full h-full object-cover object-top rounded-lg shadow-medium"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary font-medium">About</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">
              Samantha Provenza
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a UX designer turned travel advisor, now a Fora Advanced Certified Advisor specializing in group travel. What started as a passion for exploring has evolved into a design practice for the world of travel.
              </p>
              <p>
                After 41 countries—many of which have left their mark on me in the form of tattoos—I've learned what makes group travel actually work. I'm also part of a digital nomad community, which means I understand the nuances of coordinating across time zones and lifestyles.
              </p>
              <p className="font-medium text-foreground">
                My mission? Making group travel stress-free, beautifully designed, and genuinely memorable.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-background rounded-lg shadow-soft">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="block font-serif text-2xl font-medium text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
                Let's Plan Your Trip
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
