import React from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Redux/LoginReducer";
import { openNav, closeNav } from "../../Redux/HamburgerReducer";
import { FiScissors, FiArrowRight, FiZap, FiLogOut } from "react-icons/fi";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { Link } from "react-scroll";

export default function Hero() {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const { isNavOpen }  = useSelector((state: any) => state.isNavOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logOut());
    dispatch(closeNav());
    navigate("/login", { replace: true });
  }

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0a0a0f 0%,#1a1a2e 40%,#16213e 70%,#0f3460 100%)",
      overflow: "hidden",
    }} className="grid-bg">

      {/* ambient orbs */}
      <div style={{ position:"absolute",top:80,left:40,width:380,height:380,
        background:"#6c63ff",opacity:.09,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none" }} />
      <div style={{ position:"absolute",bottom:80,right:40,width:300,height:300,
        background:"#00f5ff",opacity:.05,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none" }} />

      {/* floating dots — CSS class hides on mobile, shows on desktop */}
      {[
        { top:130,  right:80,   size:12, color:"#6c63ff", delay:0   },
        { top:240,  right:190,  size:8,  color:"#00f5ff", delay:1.5 },
        { bottom:160, left:80,  size:16, color:"#ff6b6b", delay:3   },
        { top:200,  left:"33%", size:8,  color:"#00f5ff", delay:2   },
      ].map((d, i) => (
        <div key={i} className="animate-float floating-dot" style={{
          position:"absolute",
          ...(d.top    !== undefined ? { top:    d.top    } : {}),
          ...(d.bottom !== undefined ? { bottom: d.bottom } : {}),
          ...(d.right  !== undefined ? { right:  d.right  } : {}),
          ...(d.left   !== undefined ? { left:   d.left   } : {}),
          width:d.size, height:d.size,
          background:d.color, borderRadius:"50%",
          opacity:.5, animationDelay:`${d.delay}s`, pointerEvents:"none",
        }} />
      ))}

      {/*
        ── Mobile top bar (hamburger + logo + logout) ──────────────────────
        IMPORTANT: NO display property in the inline style.
        Visibility is 100% controlled by CSS class rules in index.css:
          .mobile-header-bar          → display: none   (desktop default)
          @media (max-width: 767px)
            .mobile-header-bar        → display: flex   (mobile only)
      */}
      <div
        className="mobile-header-bar"
        style={{
          /* display is intentionally absent — controlled by CSS class only */
          position:"fixed", top:0, left:0, right:0, zIndex:110,
          alignItems:"center", justifyContent:"space-between",
          padding:"12px 16px",
          background:"rgba(10,10,15,0.97)",
          backdropFilter:"blur(20px)",
          WebkitBackdropFilter:"blur(20px)",
          borderBottom:"1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Logo */}
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{
            width:30, height:30, borderRadius:8,
            background:"rgba(108,99,255,.15)", border:"1px solid rgba(108,99,255,.38)",
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <FiScissors style={{ color:"#6c63ff", fontSize:13 }} />
          </div>
          <span style={{ fontFamily:"Space Grotesk,sans-serif", fontWeight:700, fontSize:16, color:"#fff" }}>
            scissor
          </span>
        </div>

        {/* Right: logout + hamburger */}
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          {isLoggedIn && (
            <button onClick={handleLogout} style={{
              display:"flex", alignItems:"center", gap:5,
              background:"rgba(255,107,107,.12)", border:"1px solid rgba(255,107,107,.3)",
              color:"#ff6b6b", padding:"6px 12px", borderRadius:999,
              fontFamily:"Space Grotesk,sans-serif", fontWeight:600, fontSize:12, cursor:"pointer",
            }}>
              <FiLogOut style={{ fontSize:12 }} /> Log Out
            </button>
          )}
          <button
            onClick={() => dispatch(isNavOpen ? closeNav() : openNav())}
            style={{
              background:"none", border:"none", color:"#a0aec0",
              cursor:"pointer", padding:4,
              display:"flex", alignItems:"center",
            }}
            aria-label="Toggle navigation"
          >
            {isNavOpen
              ? <LuX style={{ fontSize:24, color:"#fff" }} />
              : <LuAlignJustify style={{ fontSize:24 }} />
            }
          </button>
        </div>
      </div>

      {/* Desktop NavBar + Mobile slide-in menu — both inside NavBar component */}
      <NavBar />

      {/* Hero content */}
      <div style={{
        position:"relative", zIndex:10,
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        padding:"clamp(96px,14vw,160px) 16px 80px",
        textAlign:"center",
      }}>

        {/* badge */}
        <div className="glass" style={{
          display:"inline-flex", alignItems:"center", gap:8,
          borderRadius:999, padding:"6px 16px", marginBottom:28,
          border:"1px solid rgba(108,99,255,0.3)",
        }}>
          <FiZap style={{ color:"#6c63ff", fontSize:13 }} />
          <span style={{
            fontSize:11, fontFamily:"JetBrains Mono,monospace",
            color:"#a0aec0", textTransform:"uppercase", letterSpacing:"0.12em",
          }}>Lightning Fast URL Shortening</span>
        </div>

        {/* headline */}
        <h1 style={{
          fontFamily:"Space Grotesk,sans-serif", fontWeight:700,
          lineHeight:1.1, margin:"0 0 20px", maxWidth:840,
          fontSize:"clamp(2rem,7vw,4.5rem)", color:"#fff",
        }}>
          Shorten. Share.{" "}
          <span style={{
            background:"linear-gradient(135deg,#6c63ff,#00f5ff)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>Track Everything.</span>
        </h1>

        {/* sub */}
        <p style={{
          color:"#a0aec0", maxWidth:580, margin:"0 0 36px",
          lineHeight:1.7, fontSize:"clamp(0.875rem,2vw,1.05rem)",
        }}>
          Scissor transforms long, unwieldy URLs into sharp branded links — complete
          with QR codes, custom slugs, and powerful analytics.
        </p>

        {/* CTAs */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:14, justifyContent:"center", marginBottom:56 }}>
          <Link to="trim" smooth duration={800}>
            <button className="btn-primary" style={{
              display:"flex", alignItems:"center", gap:8,
              padding:"clamp(12px,2vw,15px) clamp(20px,3vw,30px)",
              fontSize:"clamp(0.85rem,2vw,1rem)",
            }}>
              <FiScissors /> Trim Your First URL <FiArrowRight />
            </button>
          </Link>
          <Link to="analytics" smooth duration={800}>
            <button className="glass" style={{
              border:"1px solid rgba(255,255,255,0.12)", color:"#fff",
              padding:"clamp(12px,2vw,15px) clamp(20px,3vw,30px)",
              borderRadius:999, fontFamily:"Space Grotesk,sans-serif", fontWeight:600,
              fontSize:"clamp(0.85rem,2vw,1rem)", cursor:"pointer",
              background:"rgba(255,255,255,0.04)", display:"flex", alignItems:"center",
            }}>
              See How It Works
            </button>
          </Link>
        </div>

        {/* stats bar */}
        <div className="glass" style={{
          borderRadius:20, padding:"16px 20px",
          display:"flex", flexWrap:"wrap",
          justifyContent:"center", alignItems:"center",
          maxWidth:620, border:"1px solid rgba(255,255,255,0.08)",
        }}>
          {[
            { n:"3M+",   l:"Active Users"  },
            { n:"60M+",  l:"Links Created" },
            { n:"1B+",   l:"Connections"   },
            { n:"300K+", l:"Integrations"  },
          ].map((s, i, arr) => (
            <div key={i} style={{
              textAlign:"center", padding:"8px 20px",
              borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}>
              <div className="stat-number" style={{ fontSize:"clamp(1.2rem,3vw,1.5rem)", fontWeight:700 }}>
                {s.n}
              </div>
              <div style={{ color:"#a0aec0", fontSize:11, marginTop:2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* scroll hint */}
        <div style={{
          position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)",
          display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:.35,
        }}>
          <span style={{
            fontSize:10, color:"#a0aec0", fontFamily:"JetBrains Mono,monospace",
            textTransform:"uppercase", letterSpacing:"0.12em",
          }}>Scroll</span>
          <div style={{ width:1, height:28, background:"linear-gradient(to bottom,#a0aec0,transparent)" }} />
        </div>
      </div>
    </div>
  );
}
