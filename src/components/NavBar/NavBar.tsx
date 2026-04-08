import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../../Redux/LoginReducer";
import { closeNav } from "../../Redux/HamburgerReducer";
import { FiScissors, FiLogOut, FiLogIn } from "react-icons/fi";

const navItems = [
  { label: "Features",  target: "analytics" },
  { label: "Pricing",   target: "subscription" },
  { label: "Trim URL",  target: "trim" },
  { label: "FAQs",      target: "faq" },
];

const NavBar = () => {
  const { isNavOpen } = useSelector((store: any) => store.isNavOpen);
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logOut());
    dispatch(closeNav());
    // replace: back button / swipe cannot return user to the homepage while logged-in
    navigate("/login", { replace: true });
  }

  return (
    <nav
      className={`
        flex md:flex-row xs:flex-col
        md:justify-between md:gap-0 xs:gap-10 xs:justify-center
        items-center px-8 py-4
        xs:fixed xs:h-screen w-full md:sticky md:h-20 z-30
        md:bg-transparent xs:bg-primary mobile-nav md:backdrop-blur-none
        duration-300 ease-linear
        md:border-b md:border-white md:border-opacity-5
        ${isNavOpen
          ? "translate-x-0 xs:visible xs:pointer-events-auto xs:opacity-100"
          : "translate-x-full md:translate-x-0 xs:invisible xs:pointer-events-none xs:opacity-0"
        }
      `}
    >
      {/* Logo */}
      <div className="xs:hidden md:flex items-center gap-2">
        <div style={{width:36,height:36,borderRadius:10,background:"rgba(108,99,255,.15)",
          border:"1px solid rgba(108,99,255,.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <FiScissors style={{color:"#6c63ff",fontSize:16}}/>
        </div>
        <span style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,fontSize:20,color:"#fff",letterSpacing:"-0.01em"}}>
          scissor
        </span>
      </div>

      {/* Nav links – smooth scroll to page sections */}
      <div className="flex md:flex-row xs:flex-col items-center lg:gap-8 md:gap-6 xs:gap-6">
        {navItems.map(item => (
          <Link
            key={item.label}
            to={item.target}
            spy smooth duration={800}
            onClick={() => dispatch(closeNav())}
            className="nav-link"
            style={{fontSize:14,fontWeight:500}}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Auth area */}
      <div className="flex md:flex-row xs:flex-col items-center gap-3">
        {isLoggedIn ? (
          /* Logout – only this button should ever send user to login page */
          <button
            onClick={logout}
            style={{
              display:"flex",alignItems:"center",gap:7,
              background:"rgba(255,107,107,.1)",border:"1px solid rgba(255,107,107,.3)",
              color:"#ff6b6b",padding:"8px 18px",borderRadius:999,
              fontFamily:"Space Grotesk,sans-serif",fontWeight:600,fontSize:13,
              cursor:"pointer",transition:"all .25s"
            }}
          >
            <FiLogOut style={{fontSize:14}}/>
            Log Out
          </button>
        ) : (
          <>
            <button
              onClick={() => { dispatch(closeNav()); navigate("/login"); }}
              style={{display:"flex",alignItems:"center",gap:6,background:"none",border:"none",
                color:"#a0aec0",cursor:"pointer",fontSize:14,fontWeight:500,padding:"4px 0",
                fontFamily:"DM Sans,sans-serif",transition:"color .2s"}}
              onMouseOver={e => (e.currentTarget.style.color="#fff")}
              onMouseOut={e  => (e.currentTarget.style.color="#a0aec0")}
            >
              <FiLogIn style={{fontSize:15}}/>
              Sign In
            </button>
            <button
              onClick={() => { dispatch(closeNav()); navigate("/signup"); }}
              className="btn-primary"
              style={{padding:"9px 20px",fontSize:13}}
            >
              Try for free
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
