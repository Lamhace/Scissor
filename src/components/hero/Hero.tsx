import React from 'react';
import NavBar from '../NavBar/NavBar';
import { FiScissors, FiArrowRight, FiLink, FiZap } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-hero-gradient grid-bg overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon opacity-5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-60 hidden lg:block" style={{ animationDelay: '0s' }} />
      <div className="absolute top-60 right-48 w-2 h-2 bg-neon rounded-full animate-float opacity-40 hidden lg:block" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-accent rounded-full animate-float opacity-30 hidden lg:block" style={{ animationDelay: '3s' }} />
      <div className="absolute top-48 left-1/3 w-2 h-2 bg-neon rounded-full animate-float opacity-50 hidden lg:block" style={{ animationDelay: '2s' }} />

      {/* NAVBAR */}
      <NavBar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 xs:pt-32 md:pt-20 pb-16 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-secondary border-opacity-30">
          <FiZap className="text-secondary text-sm" />
          <span className="text-xs font-mono text-muted tracking-widest uppercase">Lightning Fast URL Shortening</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold leading-tight mb-6 max-w-4xl">
          <span className="block text-white xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Shorten. Share.
          </span>
          <span className="block gradient-text xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-1">
            Track Everything.
          </span>
        </h1>

        {/* Sub headline */}
        <p className="text-muted xs:text-sm sm:text-base lg:text-lg max-w-2xl mb-10 leading-relaxed font-body">
          Scissor transforms your long, unwieldy URLs into sharp, branded links — 
          complete with QR codes, custom slugs, and powerful analytics.
        </p>

        {/* CTA Buttons */}
        <div className="flex xs:flex-col sm:flex-row items-center gap-4 mb-16">
          <Link to="trim" smooth={true} duration={800}>
            <button className="btn-primary flex items-center gap-2 text-base px-8 py-4">
              <FiScissors className="text-lg" />
              Trim Your First URL
              <FiArrowRight className="text-lg" />
            </button>
          </Link>
          <Link to="analytics" smooth={true} duration={800}>
            <button className="glass border border-white border-opacity-10 text-white text-base px-8 py-4 rounded-full font-semibold hover:border-secondary hover:border-opacity-40 transition-all duration-300 font-display">
              See How It Works
            </button>
          </Link>
        </div>

        {/* Stats bar */}
        <div className="glass rounded-2xl px-8 py-5 flex xs:flex-col sm:flex-row items-center xs:gap-5 sm:gap-12 max-w-2xl">
          {[
            { number: '3M+', label: 'Active Users' },
            { number: '60M+', label: 'Links Created' },
            { number: '1B+', label: 'Connections' },
            { number: '300K+', label: 'Integrations' },
          ].map((stat, i) => (
            <div key={i} className="text-center sm:border-r sm:border-white sm:border-opacity-10 sm:last:border-0 sm:pr-12 sm:last:pr-0">
              <div className="stat-number text-2xl font-bold">{stat.number}</div>
              <div className="text-muted text-xs mt-0.5 font-body">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-muted font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </div>
  );
}
