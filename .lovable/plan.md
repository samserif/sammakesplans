

# Aligning Sam Makes Plans with Tiny Suitcase Studios' Design

## What Tiny Suitcase Does Differently

The inspiration site has a distinct editorial, grounded aesthetic:
- **Bold solid-color hero** (terracotta/rust) instead of a photo background with overlay
- **Left-aligned typography** instead of centered -- text sits on the left half, illustration on the right
- **Minimal navigation** -- just logo left, 2 links right, no buttons in nav
- **No cards or boxed sections** -- content flows with horizontal rule dividers between items
- **Large, confident white typography** with a warm italic accent ("just")
- **Muted pink/parchment texture** for the services section background
- **Sticky nav** that's transparent and minimal
- **Single CTA button** with a simple outlined/bordered style (cream outline on dark bg)
- **Services as stacked text blocks** separated by thin horizontal lines, not cards
- **Footer is bold and simple** -- solid color block, email, social links in a row

## Plan: Key Changes

### 1. Hero Section Overhaul
- Remove the background photo and gradient overlay
- Use a **solid Royal Indigo background** filling the full viewport
- Left-align all hero text (headline, sub-headline, CTA) on the left 50-60%
- Place the hero travel image or Sam's headshot on the right side
- Change CTA to a simple outlined button (cream/white border on indigo)
- Remove the scroll-down indicator animation

### 2. Navigation Simplification
- Remove the "Start Planning" button from the nav bar
- Keep just the logo (left) and 2-3 text links (right)
- Use underline-on-hover instead of color change for links
- Make nav text smaller and more spaced (letter-spacing)

### 3. Mid-Page Statement Section (New)
- Add a full-width text statement section between hero and services (like Tiny Suitcase's "A lot of hospitality marketing..." block)
- Large, left-aligned editorial text on a muted lavender/parchment background
- This could be Sam's positioning statement about group travel

### 4. Services Section Redesign
- Remove the card layout with borders and shadows
- Replace with **stacked text blocks** separated by thin horizontal rules
- Each service: bold uppercase title, short description below
- Center-aligned, clean, no icons or boxes
- Single "Let's Talk" CTA button below all services

### 5. About Section
- Keep the two-column layout but simplify -- remove stats counters and decorative elements
- More editorial feel with larger body text

### 6. Value Section
- Simplify or merge into the about section
- Remove icon circles and grid layout
- Present as flowing editorial text with the handwritten annotation

### 7. Footer Simplification
- Solid indigo background
- Email link prominently displayed
- Logo + copyright + social links in a single bottom row
- Remove multi-column layout

### 8. Global Typography & Spacing
- Increase letter-spacing on all uppercase text (more editorial spread)
- Use wider line-heights for body copy
- Add subtle background texture/gradient to service sections (warm pink/parchment feel)

## Technical Details

**Files to modify:**
- `src/components/HeroSection.tsx` -- left-aligned layout, solid bg, no photo overlay
- `src/components/Navigation.tsx` -- strip down to minimal text links
- `src/components/ServicesSection.tsx` -- stacked text blocks with horizontal dividers
- `src/components/AboutSection.tsx` -- simplify, remove decorative elements
- `src/components/ValueSection.tsx` -- editorial text flow, remove grid
- `src/components/Footer.tsx` -- single-row minimal footer
- `src/index.css` -- adjust letter-spacing, add parchment-like warm tones
- `src/pages/Index.tsx` -- add mid-page statement section

**New component:**
- `src/components/StatementSection.tsx` -- the editorial mid-page text block

