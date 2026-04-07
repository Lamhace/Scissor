import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { FiScissors, FiArrowRight } from 'react-icons/fi';

export default function Start() {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();

  const getStarted = () => {
    if (!isLoggedIn) {
      navigate("/signup");
    }
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-deepblue to-primary opacity-90 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white bg-opacity-10 border border-white border-opacity-20 mb-8 mx-auto">
          <FiScissors className="text-white text-2xl" />
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Revolutionizing
          <br />
          <span className="gradient-text">Link Optimization</span>
        </h2>
        <p className="text-white text-opacity-70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join millions of users who trust Scissor to power their links. Start for free — no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="trim" smooth={true} duration={800}>
            <button
              onClick={getStarted}
              className="flex items-center gap-2 bg-white text-secondary font-display font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-base"
            >
              Get Started Free
              <FiArrowRight className="text-lg" />
            </button>
          </Link>
          <button className="text-white text-opacity-70 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-1">
            View Pricing Plans →
          </button>
        </div>
      </div>
    </section>
  );
}
