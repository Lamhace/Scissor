import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../../Redux/LoginReducer";
import { closeNav } from "../../Redux/HamburgerReducer";
import { FiScissors, FiLogOut, FiLogIn } from "react-icons/fi";

const navItems = [
  { label: "Features", target: "analytics" },
  { label: "Pricing", target: "subscription" },
  { label: "Trim URL", target: "trim" },
  { label: "FAQs", target: "faq" },
];

const NavBar = () => {
  const { isNavOpen } = useSelector((store: any) => store.isNavOpen);
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logOut());
    dispatch(closeNav());
    // Fix #6: use replace:true so the browser back button skips the logged-in state
    navigate("/login", { replace: true });
  }

  return (
    <nav
      className={`flex md:flex-row xs:flex-col md:justify-between md:gap-0 xs:gap-10 xs:justify-center items-center px-8 py-4 cursor-pointer xs:fixed xs:h-screen w-full md:sticky md:h-20 z-30 md:bg-transparent xs:bg-primary mobile-nav md:backdrop-blur-none duration-300 ease-linear md:border-b md:border-white md:border-opacity-5 ${
        isNavOpen
          ? "translate-x-0 xs:visible xs:pointer-events-auto xs:opacity-100"
          : "translate-x-full md:translate-x-0 xs:invisible xs:pointer-events-none xs:opacity-0"
      }`}
    >
      {/* Logo — always visible in desktop nav */}
      <div className="xs:hidden md:flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary bg-opacity-20 border border-secondary border-opacity-30">
          <FiScissors className="text-secondary text-lg" />
        </div>
        <span className="font-display font-bold text-xl text-white tracking-tight">
          scissor
        </span>
      </div>

      {/* Nav links — always shown for smooth scroll to sections */}
      <div className="flex md:flex-row xs:flex-col items-center lg:gap-8 md:gap-6 xs:gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.target}
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => dispatch(closeNav())}
            className="nav-link text-sm font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Auth area */}
      <div className="flex md:flex-row xs:flex-col items-center gap-3">
        {isLoggedIn ? (
          /* Fix #5: Clear logout button when user is signed in */
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors duration-200 border border-white border-opacity-10 rounded-full px-4 py-2 hover:border-accent hover:border-opacity-40"
          >
            <FiLogOut className="text-base" />
            Log Out
          </button>
        ) : (
          <>
            <button
              onClick={() => { dispatch(closeNav()); navigate("/login"); }}
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors duration-200"
            >
              <FiLogIn className="text-base" />
              Sign In
            </button>
            <button
              onClick={() => { dispatch(closeNav()); navigate("/signup"); }}
              className="btn-primary text-sm py-2.5 px-5"
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
