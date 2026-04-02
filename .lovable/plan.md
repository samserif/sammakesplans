

# Rework Services Section

## Changes to `src/components/ServicesSection.tsx`

1. **Title**: Change "How I Work" → "Working With Me"
2. **Remove "Not Sure Yet"** from the accordion cards (remove from `serviceTiers` array)
3. **Add "Not Sure Yet?" text block** below the accordion — styled as plain text (not a card), with the heading "Not Sure Yet?", subtext "Book a free discovery call where we discuss:", and the 3 bullet points
4. **Remove Fee Comparison Table** entirely (delete `feeComparison` data and the table JSX)
5. **Add primary CTA** above the FAQ section — "Book a Discovery Call" button with `variant="hero"` linking to `https://calendar.app.google/ziozYiHLnjXDsFp37`
6. **Keep FAQ accordion** as-is
7. **Update bottom CTA** to also link to the Google Calendar URL (or remove if redundant with the new primary CTA)

## Layout order after changes

```text
Services (label)
Working With Me (h2)

[Accordion: 4 service tiers]

Not Sure Yet? (text block with bullets)

[ Book a Discovery Call ] (primary CTA button)

FAQ (accordion)
```

