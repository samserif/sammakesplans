import { motion } from "framer-motion";
import samHeadshot from "@/assets/sam-headshot.png";

export const AboutSection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-secondary" aria-labelledby="about-heading" role="region">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img
              src={samHeadshot}
              alt="Samantha Provenza, travel designer"
              className="w-full max-w-md aspect-[4/5] object-cover object-top rounded-sm"
            />
            <div className="grid sm:grid-cols-2 gap-4 max-w-md">
              <div className="border-t border-primary pt-4">
                <p className="text-xs font-sans font-medium tracking-[0.18em] text-muted-foreground mb-2">Based in</p>
                <p className="text-sm text-foreground leading-relaxed">New York, NY — working with clients everywhere.</p>
              </div>
              <div className="border-t border-primary pt-4">
                <p className="text-xs font-sans font-medium tracking-[0.18em] text-muted-foreground mb-2">Powered by</p>
                <p className="text-sm text-foreground leading-relaxed">Fora Travel — preferred partner access, verified rates, and infrastructure for complex bookings.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-sans font-medium mb-4 block">About</span>
            <h2 id="about-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight">
              The person behind the itinerary.
            </h2>

            <div className="space-y-5 text-muted-foreground leading-[1.85] text-base font-sans">
              <p>
                It started with Paris. My first time abroad — junior year of college — and I came home a completely different person. After that, travel stopped being something I did occasionally and became something I organized my life around.
              </p>
              <p>
                In 2019, I joined a digital nomad community and spent time living abroad while working remotely. We were a group of 15 to 25 people at any given time, and I became the person everyone turned to when it came to planning weekend trips.
              </p>
              <p>
                I genuinely loved the puzzle of it — finding the right hotel for a group of 18 with different budgets, the restaurant that could handle a last-minute reservation, the day trip that would feel like the highlight in retrospect. Even when things went sideways, I was the one figuring out the fix.
              </p>
              <p>
                My day job for 15+ years was UX design — figuring out exactly what someone needs before they know they need it, then building an experience that delivers it without friction. It turns out that’s exactly what good travel planning is.
              </p>
              <p>
                A few years ago I found Fora, and it clicked. I could do this properly, for real clients, with the infrastructure to actually deliver. I’m not someone who pivoted into travel from nowhere. I’m someone who was already doing this — I just finally made it official.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
