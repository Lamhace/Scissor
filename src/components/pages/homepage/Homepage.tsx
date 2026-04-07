import React, { useEffect } from "react";
import Hero from "../../hero/Hero";
import { FiLink2, FiBarChart2, FiEdit3, FiGrid } from "react-icons/fi";
import Subscription from "../../subscription/Subscription";
import Trim from "../../trim/Trim";
import Accordion from "../../faq/Accordion";
import Start from "../../start/Start";
import Footer from "../../footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { openNav, closeNav } from "../../../Redux/HamburgerReducer";
import { useDispatch, useSelector } from "react-redux";
import { FiScissors } from "react-icons/fi";

const features = [
  {
    icon: <FiLink2 />,
    title: "URL Shortening",
    description: "Transform lengthy URLs into sharp, memorable links. Custom slugs, branded domains, and instant redirects at scale.",
    color: "from-secondary to-blue-500",
    glow: "rgba(108, 99, 255, 0.3)",
  },
  {
    icon: <FiGrid />,
    title: "QR Codes",
    description: "Auto-generate QR codes for every link. Bring your audience into the physical-digital experience seamlessly.",
    color: "from-neon to-teal-400",
    glow: "rgba(0, 245, 255, 0.3)",
  },
  {
    icon: <FiEdit3 />,
    title: "Custom URLs",
    description: "Build your brand into every link. Custom slugs, vanity URLs, and white-label domains for full identity control.",
    color: "from-accent to-orange-400",
    glow: "rgba(255, 107, 107, 0.3)",
  },
  {
    icon: <FiBarChart2 />,
    title: "Deep Analytics",
    description: "Track every click, scan, and redirect. Geo data, referral sources, device breakdowns — insights that drive decisions.",
    color: "from-purple-400 to-pink-500",
    glow: "rgba(167, 139, 250, 0.3)",
  },
];

export default function Homepage() {
  const dispatch = useDispatch();
  const { isNavOpen } = useSelector((store: any) => store.isNavOpen);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative bg-primary text-white min-h-screen">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-primary bg-opacity-95 backdrop-blur-xl border-b border-white border-opacity-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary bg-opacity-20 border border-secondary border-opacity-30 flex items-center justify-center">
            <FiScissors className="text-secondary text-sm" />
          </div>
          <span className="font-display font-bold text-lg text-white">scissor</span>
        </div>
        <button className="text-muted hover:text-white transition-colors" onClick={() => dispatch(isNavOpen ? closeNav() : openNav())}>
          {isNavOpen ? <LuX className="text-2xl" /> : <LuAlignJustify className="text-2xl" />}
        </button>
      </div>

      {/* HERO */}
      <Hero />

      {/* WHY SCISSOR — Features */}
      <section className="py-24 px-4 md:px-12 lg:px-20 relative" id="analytics">
        <div className="absolute inset-0 bg-glow-gradient opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-secondary border-opacity-20">
              <span className="text-xs font-mono text-secondary tracking-widest uppercase">Why Scissor?</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              One Stop. <span className="gradient-text">Four Possibilities.</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto text-base leading-relaxed">
              Everything you need to manage, brand, and track your links — in one powerful platform.
            </p>
          </div>

          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} bg-opacity-20 flex items-center justify-center text-xl text-white mb-5`}
                  style={{ boxShadow: `0 0 20px ${f.glow}` }}
                >
                  {f.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white border-opacity-5" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '3M+', l: 'Active Users' },
            { n: '60M+', l: 'Links & QR Codes' },
            { n: '1B+', l: 'Clicks & Scans' },
            { n: '300K+', l: 'App Integrations' },
          ].map((s, i) => (
            <div key={i}>
              <div className="stat-number text-3xl md:text-4xl font-bold mb-1">{s.n}</div>
              <div className="text-muted text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <Subscription />
      <Trim />
      <Accordion />
      <Start />
      <Footer />
    </div>
  );
}
