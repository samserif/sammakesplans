

# Add Stats with Accent Underline Style to Client Love Section

## Changes

**File:** `src/components/ReviewsSection.tsx`

Add a 3-column stats row between the section heading and the review cards grid. Each stat uses large bold numbers with a short thick terracotta/accent underline (40px wide, 3-4px tall) beneath the number, then the label below. No cards, no backgrounds — just typography and the colored underline as visual anchor.

**Stats:**
1. **50+** — Trips Booked
2. **13** — Destinations  
3. **100+** — Hours Saved

**Styling:**
- Numbers: `text-4xl md:text-5xl font-display font-extrabold text-foreground`
- Underline: `w-10 h-1 bg-accent rounded-full mx-auto mt-3 mb-2`
- Labels: `text-sm text-muted-foreground font-sans`
- Grid: `grid grid-cols-3 gap-8 text-center mt-10 mb-14`
- Framer-motion staggered fade-up entrance

