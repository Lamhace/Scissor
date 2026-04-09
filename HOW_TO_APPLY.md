# Scissor — Patch v7

## Files to replace

  public/favicon.ico                        ← replace with uploaded scissor icon
  public/index.html                         ← updated to point to new favicon.ico
  src/components/NavBar/NavBar.tsx          ← logout button added to mobile menu

## Changes

### 1. Favicon
The uploaded scissor_favicon.ico (multi-size: 16×16 and 32×32) replaces
the old placeholder. index.html now points directly to favicon.ico — the
SVG data-URI fallback has been removed since the real icon is now supplied.

### 2. Mobile hamburger menu — Log Out among nav links
When the hamburger is opened on mobile and the user IS logged in:
  • The four nav links (Features, Pricing, Trim URL, FAQs) show as before
  • A divider line appears below them
  • A red "Log Out" button appears below the divider, styled the same size
    as the nav link text so it reads as part of the menu — not a separate
    footer element

When the user is NOT logged in, the divider is followed by Sign In and
Try for free (unchanged from before).
