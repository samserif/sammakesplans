

# Hero Section: Video Positioned Right of Text on Desktop

## Current State
The video is an absolute-positioned full-bleed background at 20% opacity. On desktop, an empty right column lets the video show through behind everything.

## Change
On desktop (lg+), move the video from a full background into the right grid column as a visible, styled element. On mobile, keep it as a subtle full background.

### Implementation — `src/components/HeroSection.tsx`

1. **Keep the background video for mobile only** — add `lg:hidden` to the existing absolute video element
2. **Add a second video element in the right grid column** — visible only on `lg:` and up (`hidden lg:block`), with rounded corners and higher opacity (~40-50%) so it's clearly visible as content rather than background texture
3. The right column replaces the empty `<div className="hidden lg:block" />` with the visible video, wrapped in a motion container for a fade-in entrance

```text
┌─────────────────────────────────────────────┐
│  Mobile: video behind text (subtle bg)      │
├──────────────────┬──────────────────────────┤
│  Desktop:        │                          │
│  Text content    │   Video (rounded,        │
│  (left col)      │   higher opacity)        │
│                  │                          │
└──────────────────┴──────────────────────────┘
```

