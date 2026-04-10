import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Signuppage from "./components/pages/signuppage/Signuppage";
import Loginpage from "./components/pages/loginpage/Loginpage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { logIn, logOut } from "./Redux/LoginReducer";

export const Firebase = initializeApp(firebaseConfig);

/**
 * GuestRoute — redirects already-authenticated users away from /login and /signup.
 * Back-swipe / back-arrow cannot reach auth pages once the user is logged in.
 */
function GuestRoute({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

/**
 * AuthSync — mounts once at the app root and subscribes to Firebase's
 * onAuthStateChanged observer. Firebase persists the user session in
 * IndexedDB/localStorage across page refreshes. When the page reloads,
 * Firebase re-emits the current user immediately, and we sync that into
 * Redux so the app never loses the logged-in state on refresh.
 *
 * While Firebase is resolving its persisted session (typically < 200ms),
 * we show nothing so there's no flash of a logged-out UI.
 */
function AuthSync({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  // null = still checking, true/false = resolved
  const [authResolved, setAuthResolved] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(logIn());
      } else {
        dispatch(logOut());
      }
      setAuthResolved(true);
    });
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  // Don't render anything until Firebase has confirmed the auth state.
  // This prevents a flicker where the user appears logged-out for a frame.
  if (!authResolved) return null;

  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <AuthSync>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/login"
              element={
                <GuestRoute>
                  <Loginpage />
                </GuestRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <GuestRoute>
                  <Signuppage />
                </GuestRoute>
              }
            />
          </Routes>
        </div>
      </AuthSync>
    </Router>
  );
}

export default App;
