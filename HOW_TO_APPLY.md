# Scissor — Patch v8 (Persist login across page refresh)

## File to replace
  src/App.tsx

## What was wrong
Redux state is stored in memory only. Every page refresh resets it to the
initial state, which has `isLoggedIn: false`. So even though the user was
genuinely logged in, a refresh would immediately show them as logged out.

Firebase actually DOES persist the session — it saves the auth token in
IndexedDB/localStorage automatically. The problem was simply that Redux
never knew about it after a reload.

## The fix — AuthSync component
A new `AuthSync` wrapper component is added inside `<Router>`. On mount it
calls Firebase's `onAuthStateChanged` observer. Firebase re-emits the current
user almost immediately after a refresh (from its persisted cache). AuthSync
then dispatches `logIn()` or `logOut()` to Redux to match.

While Firebase is resolving its persisted session (usually under 200ms),
AuthSync renders nothing — this prevents a one-frame flash of a logged-out
UI before the state is confirmed.

The `GuestRoute` guard (which prevents back-swipe to login/signup) continues
to work correctly because it reads from Redux, which is now always in sync
with Firebase's real auth state.
