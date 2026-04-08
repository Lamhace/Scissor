# Scissor — Patch v3 (All 6 Fixes)

Drop each file into the matching path in your scissor_redesign project.

| File | Fix |
|------|-----|
| src/index.css | New `input-with-icon` class — 44px left-padding guarantees placeholder never overlaps icon |
| src/components/pages/loginpage/Loginpage.tsx | Icon+placeholder fully fixed with inline SVG icons & inline styles |
| src/components/pages/signuppage/Signuppage.tsx | Same fix + replace-navigate on signup |
| src/components/hero/Hero.tsx | Logo top-left + Logout button top-right when logged in (mobile & desktop) |
| src/components/NavBar/NavBar.tsx | Logout only via button; back/swipe cannot trigger logout |
| src/components/subscription/Subscription.tsx | Flat array rendering — no nested .map() = no ghost button |
| src/components/faq/Accordion.tsx | Question div is ALWAYS in DOM; answer conditionally appended below; no AOS on items |
| src/components/pages/homepage/Homepage.tsx | Mobile header with logo + logout; responsive grids throughout |
| src/components/trim/Trim.tsx | Icon input fix + fully responsive grid layout |

Run `npm start` after replacing. No reinstall needed.
