# Site polish plan

## Goal

Keep the current direction, but make the site feel more premium, intentional, and easier to scan. The foundation is strong, so this plan focuses on refinement rather than another redesign.

## Recommended improvements

### 1. Add more editorial rhythm between sections

Right now the sections are clean, but several blocks use similar spacing and structure. I would vary the page rhythm so it feels more like a luxury editorial landing page.

Changes:
- Add subtle section dividers or small editorial annotations between major blocks.
- Create more contrast between white/warm background sections and darker statement sections.
- Use a few asymmetrical layouts so the page feels less template-like.

### 2. Strengthen the hero composition

The hero has a strong headline, but it could feel more bespoke and brand-owned.

Changes:
- Add a small credibility line near the CTA, such as “Fora advisor perks at 4,500+ hotels and partners.”
- Increase the visual presence of the right-side video with a cleaner overlay or framed treatment.
- Make the quote feel more intentional, possibly as a small editorial pull quote instead of a simple border-left block.

### 3. Make “How it works” feel more guided

The current four-step layout is clear, but it could have more movement and hierarchy.

Changes:
- Convert the four steps into a horizontal editorial timeline on desktop.
- Add a connecting rule or progress line between steps.
- Make the numbers more decorative and brand-forward.
- Keep the current stacked layout on mobile for readability.

### 4. Give the Services section more visual weight

The accordion works well functionally, but it could feel more premium.

Changes:
- Add a short intro paragraph under “Simple, transparent.” so users understand the pricing model before opening accordions.
- Style each accordion row with slightly stronger hover states and clearer open-state emphasis.
- Add a small “Best for” line to each service tier for easier scanning.
- Make the CTA above FAQ more prominent and separated from the fee explanation.

### 5. Improve social proof hierarchy

Testimonials and stats are important conversion drivers. I would make them feel less like a supporting section and more like proof of expertise.

Changes:
- Highlight one strongest testimonial as a featured quote.
- Keep supporting testimonials smaller beneath it.
- Make “40+ countries” and “50+ trips” visually stronger, potentially as oversized editorial stats.

### 6. Refine final CTA

The final CTA is good, but it could close the page with more warmth and clarity.

Changes:
- Replace the generic “CTA” label with something more human, such as “Ready when you are.”
- Add one sentence that reinforces the low-pressure nature of the discovery call.
- Consider offering two actions: “Start the intake form” and “Book a discovery call.”

### 7. Accessibility and responsive polish

Preserve the brand aesthetic while tightening accessibility.

Changes:
- Check color contrast on muted text, especially on dark backgrounds.
- Ensure focus states are visible on navigation, accordion triggers, and CTA buttons.
- Review spacing at the current preview width and mobile widths so no section feels cramped.
- Respect reduced-motion settings for animated elements.

## Proposed implementation order

```text
Hero polish
↓
How it works timeline refinement
↓
Services accordion polish
↓
Social proof emphasis
↓
Final CTA refinement
↓
Accessibility and responsive pass
```

## Technical details

- Update existing React components only; no new backend or data model needed.
- Main files likely affected:
  - `src/components/HeroSection.tsx`
  - `src/components/StatementSection.tsx`
  - `src/components/ServicesSection.tsx`
  - `src/components/ReviewsSection.tsx`
  - `src/components/ValueSection.tsx`
  - possibly `src/index.css` for shared polish tokens or reduced-motion support
- Keep the current brand kit direction, fonts, and color system.
- Avoid uppercase text, in line with the project memory.
- Keep CTAs linked to the current Fora intake form unless you want the discovery call calendar prioritized instead.