# Scissor — Patch v6

Replace these 2 files in your project, then run `npm start`. No reinstall needed.

  src/components/hero/Hero.tsx
  src/components/pages/homepage/Homepage.tsx

---

## What was wrong and why

The hamburger was appearing on desktop and there was a duplicate nav div
because of one structural problem:

  <NavBar /> was rendered INSIDE <Hero />
  Hero has  overflow: hidden  (needed to clip the gradient orbs)
  position: sticky does NOT work inside an overflow: hidden ancestor

So the desktop sticky nav was broken — it would render but never stick —
and on certain viewport widths both the sticky nav and the mobile overlay
were partly visible at the same time, creating the duplicate/overlap.

## The fix (2 files only)

**Hero.tsx** — NavBar import and <NavBar /> call completely removed.
Hero is now pure visual content: background, orbs, mobile top bar, headline, CTAs, stats.
The mobile fixed top bar (logo + hamburger) stays here because position:fixed
escapes overflow:hidden without any issue.

**Homepage.tsx** — <NavBar /> is now rendered as the very first child,
ABOVE <Hero />, as a sibling in the normal document flow.
This means:
  • Desktop: sticky nav works correctly (no overflow:hidden parent)
  • Mobile: full-screen slide-in overlay works correctly
  • Exactly ONE nav element in the DOM — no duplicates, no overlap

## All 6 requested items — status

1. Hamburger on desktop / overlapping nav  →  FIXED (this patch)
2. Sign In button on desktop nav           →  Already present in NavBar.tsx (v5)
3. Logo as favicon                         →  Already set in public/index.html (v5)
4. Signup placeholder 'Username'           →  Already correct in Signuppage.tsx (v5)
5. No logout in mobile top bar             →  Already correct in Hero.tsx (v5)
6. Back swipe won't log user out           →  Already handled by GuestRoute in App.tsx (v5)
