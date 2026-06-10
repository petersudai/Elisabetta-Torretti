# Elisabetta Torretti — Personal Brand Website

A high-end editorial landing page for **Elisabetta Torretti**, Founder & CEO of
[Mint & Lemon](https://uk.linkedin.com/company/mintnlemon) — a LinkedIn personal
branding agency for founders and CEOs.

The site leads with Elisabetta's personal story and funnels visitors into Mint &
Lemon's offers (strategy retainer, 1:1 power session, brand partnerships) and
speaking enquiries, all wired to her live Calendly links.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** (scroll reveals, parallax, count-ups, marquee)
- Fonts: Fraunces (display), Inter (body), Space Grotesk (labels)

## Brand

Mint & Lemon 🍋 — deep evergreen ink, mint green, lemon yellow, warm cream paper.

## Develop

```bash
npm install
npm run dev      # http://localhost:5185
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Adding Elisabetta's photo

The hero portrait loads from `public/images/elisabetta.jpg`. Drop a photo there
and it appears automatically; if the file is missing, an elegant "ET" monogram
shows as a fallback. Crop/position is tuned in `src/components/Hero.tsx`
(`Portrait`).

## Structure

```
src/
  site.ts               # all copy, links & data (single source of truth)
  App.tsx               # section composition
  components/
    Nav, Hero, Marquee, Story, Help,
    Offers, Proof, Team, CTA, Footer
    primitives.tsx      # Reveal, Button, CountUp, LemonSlice
```

## Deploy

Vercel auto-detects Vite. Build command `npm run build`, output `dist`.
