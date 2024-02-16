import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Signuppage from "./components/pages/signuppage/Signuppage";
import Loginpage from "./components/pages/loginpage/Loginpage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import AuthRoute from "./components/AuthRoute";

export const Firebase = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path='/homepage' element={<AuthRoute><Homepage/></AuthRoute>} />
          <Route path="/signup" element={<Signuppage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
