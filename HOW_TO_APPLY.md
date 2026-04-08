# Scissor — Patch v5 (Hamburger Desktop Fix)

Replace these 3 files in your project. Run `npm start` — no reinstall needed.

## Files
- `src/index.css`
- `src/components/NavBar/NavBar.tsx`
- `src/components/hero/Hero.tsx`

## What was wrong & what was fixed

### Root cause
The `mobile-header-bar` div in Hero.tsx had `display: "flex"` in its **inline style**.
Inline styles have specificity of 1000 — they beat every CSS class rule, including `!important`.
So `.mobile-header-bar { display: none !important }` in the CSS was completely ignored.

### Fix 1 — Remove `display` from inline styles on controlled elements
`mobile-header-bar` and `desktop-nav-wrapper` no longer have a `display` property
in their inline styles. The CSS class is now the sole authority on whether they show.

### Fix 2 — CSS rules placed after `@tailwind utilities`
All custom rules are now written after the `@tailwind utilities` line so they have
the highest cascade position and cannot be overridden by Tailwind's generated styles.

### Fix 3 — Mobile slide-in menu uses `transform` not `display`
The mobile overlay uses `translateX(0) / translateX(100%)` to open/close.
This means the wrapper `display: block` stays constant — only the position changes.
