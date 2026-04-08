# Scissor — Patch Update

## Files Changed
Replace these files in your project with the ones in this zip (same folder paths):

| File | Fix Applied |
|------|-------------|
| `src/components/subscription/Subscription.tsx` | Fixed Professional card duplicate button at top |
| `src/components/trim/Trim.tsx` | Fixed URL input icon/placeholder overlap + error auto-hides after 8s |
| `src/components/faq/Accordion.tsx` | Fixed accordion — question stays visible, answer toggles below |
| `src/components/NavBar/NavBar.tsx` | Added nav links, logout button when logged in, logo always visible |
| `src/components/pages/loginpage/Loginpage.tsx` | Fixed icon/placeholder overlap + back button won't return to login |
| `src/components/pages/signuppage/Signuppage.tsx` | Fixed icon/placeholder overlap + back button won't return to signup |
| `src/components/AuthRoute.tsx` | Uses replace navigation to prevent back-button auth bypass |

## How to Apply
1. Extract this zip
2. Copy each file into the matching path in your `scissor_redesign` project folder
3. Run `npm start` — no reinstall needed
