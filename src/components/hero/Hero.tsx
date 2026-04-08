import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openNav, closeNav } from "../../Redux/HamburgerReducer";
import { FiScissors, FiArrowRight, FiZap } from "react-icons/fi";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { Link } from "react-scroll";
import { useIsMobile } from "../../hooks/useIsMobile";

/**
 * Hero is pure visual content only.
 * NavBar is NOT rendered here — it is rendered by Homepage, above <Hero />,
 * completely outside this component. This is intentional:
 *
 *   Hero has overflow:hidden (needed for the gradient/orb clipping).
 *   position:sticky does NOT work inside an overflow:hidden ancestor.
 *   Keeping NavBar outside Hero means the sticky desktop nav works correctly
 *   and there is exactly ONE nav element in the DOM — no duplicates.
 *
 * The mobile fixed top bar (logo + hamburger) is rendered here because it uses
 * position:fixed, which escapes overflow:hidden just fine.
 */
export default function Hero() {
  const isMobile  = useIsMobile();
  const { isNavOpen } = useSelector((state: any) => state.isNavOpen);
  const dispatch = useDispatch();

  return (
    <div
      className="grid-bg"
      style={{
        position: "relative",
        minHeight: isMobile ? "100vh" : "calc(100vh - 72px)",
        background: "linear-gradient(135deg,#0a0a0f 0%,#1a1a2e 40%,#16213e 70%,#0f3460 100%)",
        overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      <div style={{ position:"absolute", top:80, left:40, width:380, height:380,
        background:"#6c63ff", opacity:.09, borderRadius:"50%", filter:"blur(80px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:80, right:40, width:300, height:300,
        background:"#00f5ff", opacity:.05, borderRadius:"50%", filter:"blur(80px)", pointerEvents:"none" }} />

      {/* Floating dots — only rendered in JS on desktop, so zero DOM nodes on mobile */}
      {!isMobile && [
        { top:130,  right:80,   size:12, color:"#6c63ff", delay:0   },
        { top:240,  right:190,  size:8,  color:"#00f5ff", delay:1.5 },
        { bottom:160, left:80,  size:16, color:"#ff6b6b", delay:3   },
        { top:200,  left:"33%", size:8,  color:"#00f5ff", delay:2   },
      ].map((d, i) => (
        <div key={i} className="animate-float" style={{
          position: "absolute",
          ...(d.top    !== undefined ? { top:    d.top    } : {}),
          ...(d.bottom !== undefined ? { bottom: d.bottom } : {}),
          ...(d.right  !== undefined ? { right:  d.right  } : {}),
          ...(d.left   !== undefined ? { left:   d.left   } : {}),
          width: d.size, height: d.size,
          background: d.color, borderRadius: "50%",
          opacity: .5, animationDelay: `${d.delay}s`, pointerEvents: "none",
        }} />
      ))}

      {/* ── Mobile top bar: logo + hamburger only (no logout — issue #5) ── */}
      {/* Only rendered on mobile. Uses position:fixed so it escapes          */}
      {/* the parent overflow:hidden container without any problem.            */}
      {isMobile && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 110,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px",
          background: "rgba(10,10,15,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: "rgba(108,99,255,.15)", border: "1px solid rgba(108,99,255,.38)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <FiScissors style={{ color: "#6c63ff", fontSize: 13 }} />
            </div>
            <span style={{ fontFamily: "Space Grotesk,sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>
              scissor
            </span>
          </div>

          {/* Hamburger only — no logout here */}
          <button
            onClick={() => dispatch(isNavOpen ? closeNav() : openNav())}
            style={{
              background: "none", border: "none", color: "#a0aec0",
              cursor: "pointer", padding: 4,
              display: "flex", alignItems: "center",
            }}
            aria-label="Toggle menu"
          >
            {isNavOpen
              ? <LuX style={{ fontSize: 24, color: "#fff" }} />
              : <LuAlignJustify style={{ fontSize: 24 }} />
            }
          </button>
        </div>
      )}

      {/* Hero content */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: isMobile
          ? "96px 16px 60px"                          /* clear the 54px fixed mobile header */
          : "clamp(60px,8vw,100px) 24px 80px",
        textAlign: "center",
      }}>
        {/* Badge */}
        <div className="glass" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          borderRadius: 999, padding: "6px 16px", marginBottom: 24,
          border: "1px solid rgba(108,99,255,0.3)",
        }}>
          <FiZap style={{ color: "#6c63ff", fontSize: 13 }} />
          <span style={{
            fontSize: 11, fontFamily: "JetBrains Mono,monospace",
            color: "#a0aec0", textTransform: "uppercase", letterSpacing: "0.12em",
          }}>Lightning Fast URL Shortening</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
          lineHeight: 1.1, margin: "0 0 18px", maxWidth: 840,
          fontSize: "clamp(1.9rem,7vw,4.5rem)", color: "#fff",
        }}>
          Shorten. Share.{" "}
          <span style={{
            background: "linear-gradient(135deg,#6c63ff,#00f5ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Track Everything.</span>
        </h1>

        {/* Sub */}
        <p style={{
          color: "#a0aec0", maxWidth: 560, margin: "0 0 32px",
          lineHeight: 1.7, fontSize: "clamp(0.875rem,2vw,1.05rem)",
        }}>
          Scissor transforms long, unwieldy URLs into sharp branded links — complete
          with QR codes, custom slugs, and powerful analytics.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 48 }}>
          <Link to="trim" smooth duration={800}>
            <button className="btn-primary" style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "clamp(11px,2vw,14px) clamp(18px,3vw,28px)",
              fontSize: "clamp(0.85rem,2vw,1rem)",
            }}>
              <FiScissors /> Trim Your First URL <FiArrowRight />
            </button>
          </Link>
          <Link to="analytics" smooth duration={800}>
            <button className="glass" style={{
              border: "1px solid rgba(255,255,255,0.12)", color: "#fff",
              padding: "clamp(11px,2vw,14px) clamp(18px,3vw,28px)",
              borderRadius: 999, fontFamily: "Space Grotesk,sans-serif", fontWeight: 600,
              fontSize: "clamp(0.85rem,2vw,1rem)", cursor: "pointer",
              background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center",
            }}>
              See How It Works
            </button>
          </Link>
        </div>

        {/* Stats bar */}
        <div className="glass" style={{
          borderRadius: 20,
          padding: isMobile ? "14px 10px" : "16px 20px",
          display: "flex",
          flexWrap: isMobile ? "wrap" : "nowrap",
          justifyContent: "center", alignItems: "center",
          maxWidth: 620, border: "1px solid rgba(255,255,255,0.08)",
          width: "100%",
        }}>
          {[
            { n:"3M+",   l:"Active Users"  },
            { n:"60M+",  l:"Links Created" },
            { n:"1B+",   l:"Connections"   },
            { n:"300K+", l:"Integrations"  },
          ].map((s, i, arr) => (
            <div key={i} style={{
              textAlign: "center",
              padding: isMobile ? "8px 14px" : "8px 20px",
              width: isMobile ? "50%" : "auto",
              borderRight: !isMobile && i < arr.length - 1
                ? "1px solid rgba(255,255,255,0.08)" : "none",
              borderBottom: isMobile && i < 2
                ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <div className="stat-number" style={{ fontSize: "clamp(1.1rem,3vw,1.5rem)", fontWeight: 700 }}>
                {s.n}
              </div>
              <div style={{ color: "#a0aec0", fontSize: 11, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint — desktop only */}
        {!isMobile && (
          <div style={{
            position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: .35,
          }}>
            <span style={{
              fontSize: 10, color: "#a0aec0", fontFamily: "JetBrains Mono,monospace",
              textTransform: "uppercase", letterSpacing: "0.12em",
            }}>Scroll</span>
            <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom,#a0aec0,transparent)" }} />
          </div>
        )}
      </div>
    </div>
  );
}
