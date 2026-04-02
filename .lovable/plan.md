

# Rework Services Section — Accordion Layout

## Overview

Replace the current 3-card Services section with an accordion-based layout showing all 5 service tiers. Each tier is a collapsible row that expands to show full details. Below the accordion: a fee comparison table and an FAQ accordion, followed by a CTA button.

## Structure

```text
┌─────────────────────────────────────────────┐
│  Services                                   │
│  How I Work                                 │
│                                             │
│  ▸ Direct Booking         Free              │
│  ▸ Trip Planning (1-5)    $75 deposit       │
│  ▸ Group Trips (6+)       $150 flat fee     │
│  ▸ Large / Corporate      Custom quote      │
│  ▸ Not Sure Yet           Free              │
│                                             │
│  ── Fee Comparison Table ──                 │
│  Service | Travelers | Fee | What You Get   │
│  ...                                        │
│                                             │
│  ── FAQ ──                                  │
│  ▸ "Why do I have to pay..."                │
│  ▸ "Other advisors don't charge..."         │
│  ▸ "What if I don't end up booking?"        │
│                                             │
│  [ Let's Talk CTA ]                         │
└─────────────────────────────────────────────┘
```

## File Changes

**`src/components/ServicesSection.tsx`** — Full rewrite:

- **Service tiers accordion**: Use Radix `Accordion` (already installed). Each item shows the tier name + fee on the trigger row. Expanded content shows: "Best for" tag, description paragraph, "What's included" bullet list, and "How it works" explanation.
- **Styling**: Accordion items use `bg-background rounded-xl` with the existing chunky indigo drop-shadow (`8px 8px 0px hsl(var(--primary))`), spaced with `space-y-4`. Triggers have tier name left-aligned and fee right-aligned in accent color.
- **Fee comparison table**: Simple 5-row table using the existing `Table` UI components. Columns: Service, Travelers, Fee, What You Get.
- **FAQ accordion**: Separate accordion below the table with 3 FAQ items. Simpler styling — no card shadows, just bordered items.
- **CTA**: Keep the existing "Let's Talk" button linking to Fora Travel.
- **Animations**: Framer-motion fade-up for each section block (heading, accordion, table, FAQ, CTA).

## Technical Details

- Uses existing `Accordion, AccordionItem, AccordionTrigger, AccordionContent` from `@/components/ui/accordion`
- Uses existing `Table, TableHeader, TableBody, TableRow, TableHead, TableCell` from `@/components/ui/table`
- Single-item open accordion (`type="single" collapsible`)
- All content is static data defined in arrays at the top of the file

