import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../../Redux/LoginReducer";
import { closeNav } from "../../Redux/HamburgerReducer";
import { FiScissors, FiLogOut, FiLogIn } from "react-icons/fi";
import { useIsMobile } from "../../hooks/useIsMobile";

const navItems = [
  { label: "Features", target: "analytics"    },
  { label: "Pricing",  target: "subscription" },
  { label: "Trim URL", target: "trim"         },
  { label: "FAQs",     target: "faq"          },
];

const NavBar: React.FC = () => {
  const isMobile   = useIsMobile();
  const { isNavOpen }  = useSelector((store: any) => store.isNavOpen);
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
    dispatch(closeNav());
    navigate("/login", { replace: true });
  };
  const close = () => dispatch(closeNav());

  /* ── Mobile: only the full-screen slide-in overlay ── */
  if (isMobile) {
    return (
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(10,10,15,0.98)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        transform: isNavOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: isNavOpen ? "auto" : "none",
      }}>
        {navItems.map(item => (
          <Link key={item.label} to={item.target} spy smooth duration={800}
            onClick={close}
            style={{
              fontSize: 22, fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              fontFamily: "Space Grotesk,sans-serif",
              cursor: "pointer", textDecoration: "none",
            }}>
            {item.label}
          </Link>
        ))}

        <div style={{ width: 48, height: 1, background: "rgba(255,255,255,0.1)" }} />

        {/* Mobile menu: Sign In only (no logout — logout lives in the top bar) */}
        {!isLoggedIn && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <button onClick={() => { close(); navigate("/login"); }} style={{
              background: "none", border: "none", color: "#a0aec0", cursor: "pointer",
              fontSize: 16, fontWeight: 500, fontFamily: "DM Sans,sans-serif",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <FiLogIn style={{ fontSize: 16 }} /> Sign In
            </button>
            <button onClick={() => { close(); navigate("/signup"); }}
              className="btn-primary" style={{ padding: "12px 40px", fontSize: 15 }}>
              Try for free
            </button>
          </div>
        )}
      </div>
    );
  }

  /* ── Desktop: horizontal sticky nav bar ── */
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      height: 72,
      width: "100%",
      position: "sticky",
      top: 0,
      zIndex: 40,
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(10,10,15,0.6)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: "rgba(108,99,255,.15)", border: "1px solid rgba(108,99,255,.38)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <FiScissors style={{ color: "#6c63ff", fontSize: 16 }} />
        </div>
        <span style={{
          fontFamily: "Space Grotesk,sans-serif", fontWeight: 700,
          fontSize: 20, color: "#fff", letterSpacing: "-0.02em",
        }}>scissor</span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {navItems.map(item => (
          <Link key={item.label} to={item.target} spy smooth duration={800}
            className="nav-link" style={{ fontSize: 14, fontWeight: 500 }}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Auth — Sign In visible on desktop when logged out (issue #2) */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {isLoggedIn ? (
          <button onClick={logout} style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "rgba(255,107,107,.1)", border: "1px solid rgba(255,107,107,.3)",
            color: "#ff6b6b", padding: "8px 20px", borderRadius: 999,
            fontFamily: "Space Grotesk,sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer",
          }}>
            <FiLogOut style={{ fontSize: 14 }} /> Log Out
          </button>
        ) : (
          <>
            <button onClick={() => navigate("/login")} style={{
              background: "none", border: "none", color: "#a0aec0", cursor: "pointer",
              fontSize: 14, fontWeight: 500, fontFamily: "DM Sans,sans-serif",
              display: "flex", alignItems: "center", gap: 6, padding: 0,
            }}
              onMouseOver={e => (e.currentTarget.style.color = "#fff")}
              onMouseOut={e  => (e.currentTarget.style.color = "#a0aec0")}
            >
              <FiLogIn style={{ fontSize: 15 }} /> Sign In
            </button>
            <button onClick={() => navigate("/signup")} className="btn-primary"
              style={{ padding: "9px 20px", fontSize: 13 }}>
              Try for free
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
