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
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../Redux/LoginReducer";
import { FiLogOut } from "react-icons/fi";

const features = [
  { icon: <FiLink2/>,    title:"URL Shortening", color:"#6c63ff",
    desc:"Transform lengthy URLs into sharp, memorable links. Custom slugs, branded domains, instant redirects at scale." },
  { icon: <FiGrid/>,     title:"QR Codes",       color:"#00f5ff",
    desc:"Auto-generate QR codes for every link. Bring your audience into the physical-digital experience." },
  { icon: <FiEdit3/>,    title:"Custom URLs",    color:"#ff6b6b",
    desc:"Build your brand into every link. Custom slugs, vanity URLs, and white-label domains." },
  { icon: <FiBarChart2/>,title:"Deep Analytics", color:"#a78bfa",
    desc:"Track every click, scan, and redirect. Geo data, referrals, device breakdowns." },
];

export default function Homepage() {
  const dispatch  = useDispatch();
  const navigate  = useNavigate();
  const { isNavOpen }  = useSelector((s: any) => s.isNavOpen);
  const { isLoggedIn } = useSelector((s: any) => s.loginAuthenticator);

  useEffect(() => { Aos.init({ duration: 800, once: true }); }, []);

  function handleLogout() {
    dispatch(logOut());
    navigate("/login", { replace: true });
  }

  return (
    <div style={{background:"#0a0a0f",color:"#e2e8f0",minHeight:"100vh",overflowX:"hidden"}}>

      {/* ── Mobile header bar ────────────────────────────────────────────── */}
      <div className="md:hidden" style={{
        position:"fixed",top:0,left:0,right:0,zIndex:50,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"12px 16px",
        background:"rgba(10,10,15,0.95)",
        backdropFilter:"blur(20px)",
        borderBottom:"1px solid rgba(255,255,255,0.05)"
      }}>
        {/* logo */}
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:30,height:30,borderRadius:8,background:"rgba(108,99,255,.15)",
            border:"1px solid rgba(108,99,255,.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <FiScissors style={{color:"#6c63ff",fontSize:13}}/>
          </div>
          <span style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,fontSize:16,color:"#fff"}}>scissor</span>
        </div>

        <div style={{display:"flex",alignItems:"center",gap:10}}>
          {/* logout button on mobile header when logged in */}
          {isLoggedIn && (
            <button onClick={handleLogout} style={{
              display:"flex",alignItems:"center",gap:5,
              background:"rgba(255,107,107,.12)",border:"1px solid rgba(255,107,107,.3)",
              color:"#ff6b6b",padding:"6px 12px",borderRadius:999,fontSize:12,
              fontFamily:"Space Grotesk,sans-serif",fontWeight:600,cursor:"pointer"
            }}>
              <FiLogOut style={{fontSize:12}}/> Log Out
            </button>
          )}
          {/* hamburger */}
          <button style={{background:"none",border:"none",color:"#a0aec0",cursor:"pointer",
            display:"flex",alignItems:"center"}}
            onClick={() => dispatch(isNavOpen ? closeNav() : openNav())}>
            {isNavOpen ? <LuX style={{fontSize:22}}/> : <LuAlignJustify style={{fontSize:22}}/>}
          </button>
        </div>
      </div>

      {/* HERO */}
      <Hero />

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section style={{padding:"80px 16px",position:"relative"}} id="analytics">
        <div style={{position:"absolute",inset:0,
          background:"radial-gradient(ellipse at 50% 0%,rgba(108,99,255,0.12) 0%,transparent 60%)",
          pointerEvents:"none"}}/>
        <div style={{maxWidth:1100,margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{textAlign:"center",marginBottom:56}} data-aos="fade-up">
            <div style={{display:"inline-flex",alignItems:"center",gap:8,
              background:"rgba(255,255,255,0.04)",border:"1px solid rgba(108,99,255,0.2)",
              borderRadius:999,padding:"6px 16px",marginBottom:14}}>
              <span style={{fontSize:11,fontFamily:"JetBrains Mono,monospace",color:"#6c63ff",
                textTransform:"uppercase",letterSpacing:"0.12em"}}>Why Scissor?</span>
            </div>
            <h2 style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,
              fontSize:"clamp(1.75rem,4vw,2.75rem)",color:"#fff",margin:"0 0 14px"}}>
              One Stop.{" "}
              <span style={{background:"linear-gradient(135deg,#6c63ff,#00f5ff)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                Four Possibilities.
              </span>
            </h2>
            <p style={{color:"#a0aec0",maxWidth:520,margin:"0 auto",fontSize:15,lineHeight:1.6}}>
              Everything you need to manage, brand, and track your links in one powerful platform.
            </p>
          </div>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:20
          }}>
            {features.map((f, i) => (
              <div key={i} className="feature-card" data-aos="fade-up" data-aos-delay={i*80}>
                <div style={{
                  width:48,height:48,borderRadius:14,marginBottom:18,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:`${f.color}22`,
                  boxShadow:`0 0 20px ${f.color}44`,
                  fontSize:20,color:f.color
                }}>
                  {f.icon}
                </div>
                <h3 style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:600,
                  fontSize:"1.05rem",color:"#fff",marginBottom:10}}>{f.title}</h3>
                <p style={{color:"#a0aec0",fontSize:13,lineHeight:1.65,margin:0}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section style={{
        padding:"48px 16px",
        borderTop:"1px solid rgba(255,255,255,0.05)",
        borderBottom:"1px solid rgba(255,255,255,0.05)"
      }} data-aos="fade-up">
        <div style={{
          maxWidth:900,margin:"0 auto",
          display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",
          gap:24,textAlign:"center"
        }}>
          {[
            {n:"3M+",  l:"Active Users"},
            {n:"60M+", l:"Links & QR Codes"},
            {n:"1B+",  l:"Clicks & Scans"},
            {n:"300K+",l:"App Integrations"},
          ].map((s,i) => (
            <div key={i}>
              <div className="stat-number" style={{fontSize:"clamp(1.6rem,4vw,2.2rem)",fontWeight:700}}>{s.n}</div>
              <div style={{color:"#a0aec0",fontSize:13,marginTop:4}}>{s.l}</div>
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
