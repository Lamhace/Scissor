import React from 'react';
import { Link } from 'react-router-dom';
import { FiScissors, FiTwitter, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';

const footerLinks = {
  "Why Scissor": ["Scissor 101", "Integration & API", "Pricing"],
  "Resources": ["Blog", "Resource Library", "Developers", "App Connectors", "Support", "Trust Center"],
  "Solutions": ["Social Media", "Digital Marketing", "Customer Service", "For Developers"],
  "Features": ["Branded Links", "Mobile Links", "Browser Campaign", "Management & Analytics", "QR Code Generation"],
  "Products": ["Link Management", "QR Codes", "Link-in-bio"],
  "Legal": ["Privacy Policy", "Cookie Policy", "Terms of Service", "Acceptable Use Policy"],
  "Company": ["About Scissor", "Careers", "Partners", "Press", "Contact", "Reviews"],
};

const socials = [
  { icon: <FiTwitter />, href: "#" },
  { icon: <FiInstagram />, href: "#" },
  { icon: <FiLinkedin />, href: "#" },
  { icon: <FiFacebook />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white border-opacity-5 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top: Logo + Social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-secondary bg-opacity-20 border border-secondary border-opacity-30 flex items-center justify-center">
              <FiScissors className="text-secondary text-lg" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">scissor</span>
          </Link>
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-9 h-9 rounded-full glass border border-white border-opacity-10 flex items-center justify-center text-muted hover:text-white hover:border-secondary hover:border-opacity-40 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 mb-14">
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <div className="font-display font-semibold text-white text-sm mb-4">{heading}</div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-muted text-sm hover:text-white transition-colors duration-200 cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white border-opacity-5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs font-mono">
            © {new Date().getFullYear()} Scissor. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Built with ❤️ for fast, branded links.
          </p>
        </div>
      </div>
    </footer>
  );
}
