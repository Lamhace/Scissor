import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Signuppage from "./components/pages/signuppage/Signuppage";
import Loginpage from "./components/pages/loginpage/Loginpage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { useSelector } from "react-redux";

export const Firebase = initializeApp(firebaseConfig);

/**
 * GuestRoute — wraps login & signup pages.
 * If user is already logged in, redirect them to "/" immediately.
 * This means back-swipe / back-arrow on a device CANNOT reach /login or /signup
 * once the user is authenticated — the browser history entry gets replaced
 * and the route guard redirects away instantly.
 */
function GuestRoute({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
