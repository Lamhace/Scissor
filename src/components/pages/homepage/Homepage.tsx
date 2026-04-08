import React, { useEffect } from "react";
import NavBar from "../../NavBar/NavBar";
import Hero from "../../hero/Hero";
import { FiLink2, FiBarChart2, FiEdit3, FiGrid } from "react-icons/fi";
import Subscription from "../../subscription/Subscription";
import Trim from "../../trim/Trim";
import Accordion from "../../faq/Accordion";
import Start from "../../start/Start";
import Footer from "../../footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const features = [
  { icon:<FiLink2/>,    title:"URL Shortening", color:"#6c63ff",
    desc:"Transform lengthy URLs into sharp, memorable links. Custom slugs, branded domains, instant redirects at scale." },
  { icon:<FiGrid/>,     title:"QR Codes",       color:"#00f5ff",
    desc:"Auto-generate QR codes for every link. Bring your audience into the physical-digital experience." },
  { icon:<FiEdit3/>,    title:"Custom URLs",    color:"#ff6b6b",
    desc:"Build your brand into every link. Custom slugs, vanity URLs, and white-label domains." },
  { icon:<FiBarChart2/>,title:"Deep Analytics", color:"#a78bfa",
    desc:"Track every click, scan, and redirect. Geo data, referrals, device breakdowns." },
];

export default function Homepage() {
  useEffect(() => { Aos.init({ duration: 800, once: true }); }, []);

  return (
    <div style={{ background:"#0a0a0f", color:"#e2e8f0", minHeight:"100vh", overflowX:"hidden" }}>

      {/*
        NavBar is rendered HERE, outside and above <Hero />.
        This is critical: Hero has overflow:hidden for its gradient visuals.
        position:sticky does NOT work inside an overflow:hidden parent.
        By placing NavBar as a sibling above Hero (not a child inside it),
        the desktop sticky nav works correctly and there is exactly ONE nav
        element — no duplicates, no overlap.
        On mobile, NavBar renders the full-screen slide-in overlay only.
        The mobile fixed top bar (logo + hamburger) lives inside Hero.tsx
        using position:fixed, which escapes overflow:hidden.
      */}
      <NavBar />

      {/* Hero — visual content only, no NavBar inside */}
      <Hero />

      {/* Features */}
      <section style={{ padding:"80px 16px", position:"relative" }} id="analytics">
        <div style={{
          position:"absolute", inset:0,
          background:"radial-gradient(ellipse at 50% 0%,rgba(108,99,255,0.12) 0%,transparent 60%)",
          pointerEvents:"none",
        }} />
        <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ textAlign:"center", marginBottom:56 }} data-aos="fade-up">
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(255,255,255,0.04)", border:"1px solid rgba(108,99,255,0.2)",
              borderRadius:999, padding:"6px 16px", marginBottom:14,
            }}>
              <span style={{ fontSize:11, fontFamily:"JetBrains Mono,monospace", color:"#6c63ff",
                textTransform:"uppercase", letterSpacing:"0.12em" }}>Why Scissor?</span>
            </div>
            <h2 style={{
              fontFamily:"Space Grotesk,sans-serif", fontWeight:700,
              fontSize:"clamp(1.75rem,4vw,2.75rem)", color:"#fff", margin:"0 0 14px",
            }}>
              One Stop.{" "}
              <span style={{
                background:"linear-gradient(135deg,#6c63ff,#00f5ff)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>Four Possibilities.</span>
            </h2>
            <p style={{ color:"#a0aec0", maxWidth:500, margin:"0 auto", fontSize:15, lineHeight:1.65 }}>
              Everything you need to manage, brand, and track your links in one powerful platform.
            </p>
          </div>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:20,
          }}>
            {features.map((f, i) => (
              <div key={i} className="feature-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div style={{
                  width:48, height:48, borderRadius:14, marginBottom:18,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  background:`${f.color}22`, boxShadow:`0 0 20px ${f.color}44`,
                  fontSize:20, color:f.color,
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily:"Space Grotesk,sans-serif", fontWeight:600,
                  fontSize:"1.05rem", color:"#fff", margin:"0 0 10px" }}>{f.title}</h3>
                <p style={{ color:"#a0aec0", fontSize:13, lineHeight:1.65, margin:0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        padding:"48px 16px",
        borderTop:"1px solid rgba(255,255,255,0.05)",
        borderBottom:"1px solid rgba(255,255,255,0.05)",
      }} data-aos="fade-up">
        <div style={{
          maxWidth:900, margin:"0 auto",
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",
          gap:24, textAlign:"center",
        }}>
          {[
            { n:"3M+",   l:"Active Users"     },
            { n:"60M+",  l:"Links & QR Codes" },
            { n:"1B+",   l:"Clicks & Scans"   },
            { n:"300K+", l:"App Integrations" },
          ].map((s, i) => (
            <div key={i}>
              <div className="stat-number" style={{ fontSize:"clamp(1.5rem,4vw,2.2rem)", fontWeight:700 }}>
                {s.n}
              </div>
              <div style={{ color:"#a0aec0", fontSize:13, marginTop:4 }}>{s.l}</div>
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
