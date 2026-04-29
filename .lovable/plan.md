I’ll make these content and layout refinements across the existing landing page:

1. Hero header
- Remove the “Client note” block from the hero section.
- Keep the current video/background treatment untouched unless spacing needs a minor adjustment after the note is removed.
- Update the hero CTA to use:
  https://secure.foratravel.com/intake/KXd4bQ64FK

2. Navigation
- Reorder the nav links to match the actual page flow:
  ```text
  How it works → About → Services → Reviews
  ```
- Keep the existing styling and scroll behavior.

3. CTA links
- Replace all Fora intake URLs currently using `www.foratravel.com/intake/...` with:
  ```text
  https://secure.foratravel.com/intake/KXd4bQ64FK
  ```
- This includes hero, ready section, and footer if still present.

4. Client reviews
- Remove the oversized featured review treatment.
- Make all reviews equal size and visual weight in a consistent grid/card layout.
- Keep the review stats above the cards.
- Optionally add subtle emphasis with bold spans on a few strong phrases, without making any one review feel more important than another.

5. “Ready when you are” section
- Center the content.
- Keep the heading, short intro, and CTA buttons.
- Remove all informational detail blocks after the CTA buttons.
- Maintain strong contrast and accessibility in the dark section.

6. Footer
- Simplify the footer so it feels quieter after the main CTA section.
- Remove the large secondary “Start the intake form” footer CTA.
- Keep essential brand/copyright information, simple footer links, and Instagram.

Technical notes
- Expected files to edit:
  - `src/components/HeroSection.tsx`
  - `src/components/Navigation.tsx`
  - `src/components/ReviewsSection.tsx`
  - `src/components/ValueSection.tsx`
  - `src/components/Footer.tsx`
- I’ll preserve the existing brand rules: sentence/title casing only, editorial luxury tone, chunky but restrained visual system, and accessible contrast.