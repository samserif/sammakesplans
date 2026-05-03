Apply brand-voice copy edits across 5 files. All pure text swaps — no layout, components, or assets change.

## 1. Hero — `HeroSection.tsx`

- **Headline:** "The right trip. No guesswork." → **"Group travel, designed around you."** (with "designed" in primary color)
- **Sub-headline:** "Samantha Provenza · Group Travel Designer & Travel Advisor" → **"I plan friend trips, milestone celebrations, and group getaways so you can focus on the group chat — not the logistics."**

## 2. How it works — `StatementSection.tsx`

- **H2:** "How it works." → **"From idea to booked."**
- **Step 04 description:** "Bookings, confirmations, room blocks, and logistics are handled leading up to your trip." → **"I handle bookings, confirmations, room blocks, and every detail leading up to your trip."**

## 3. Services — `ServicesSection.tsx`

- **H2:** "Simple, transparent." → **"Pick the level of help you need."**
- **Sub:** → **"How I charge depends on what your trip needs. If you already know what you want, booking is free."**
- **Trip Planning description ending:** "Non-refundable, but always preceded by a free discovery call so we're both confident it's a good fit." → **"Non-refundable — but we always start with a free discovery call so we both know it's a fit before you put anything down."**
- **Pull quote below tiers:** Replace duplicated FAQ text with → **"If you already know what you want, I'll just book it — that part's on me. The planning fee is for when you need me to dig in."**

## 4. About — `AboutSection.tsx`

Reorder body so UX background is supporting evidence, not the climax. Replace the 5 paragraphs with this 4-paragraph version:

> It started with Paris. My first time abroad and I came home a different person. After that, travel stopped being something I did occasionally and became something I organized my life around — 40+ countries and counting.
>
> In 2019, I joined a digital nomad community and spent time living abroad while working remotely. We were a group of 15 to 25 people at any given time, and my favorite part was always organizing the weekend group getaways.
>
> I loved the puzzle of it — finding the right hotel for a group with different budgets, the restaurant that could handle a last-minute reservation, the day trip that became the highlight. Even when things went sideways, I liked figuring out the fix.
>
> A few years ago I found Fora and made it official. The instinct underneath all of it is the same one I spent 15+ years using as a UX designer: figure out exactly what someone needs before they know they need it, then build the experience that delivers it without friction. Turns out that's exactly what good travel planning is.

(Also fixes the existing double-space in "large group  with".)

## 5. Reviews — `ReviewsSection.tsx`

- **H2:** "What clients say." → **"In their words."**
- **Stat label:** "Across every review on Fora" → **"On every Fora review."**

## 6. Cleanup — `ValueSection.tsx`

Remove the placeholder eyebrow `<span>` containing only `"\n"` so spacing above the H2 is intentional.

---

No brand promise pull quote will be added.
