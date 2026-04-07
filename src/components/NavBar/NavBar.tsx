import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../../Redux/LoginReducer";
import { closeNav } from "../../Redux/HamburgerReducer";
import { FiScissors } from "react-icons/fi";

const NavBar = () => {
  const { isNavOpen } = useSelector((store: any) => store.isNavOpen);
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logOut());
    navigate("/login");
  }

  return (
    <nav
      className={`flex md:flex-row xs:flex-col md:justify-between md:gap-0 xs:gap-10 xs:justify-center items-center px-8 py-4 cursor-pointer xs:fixed xs:h-screen w-full md:sticky md:h-20 z-30 md:bg-transparent xs:bg-primary mobile-nav md:backdrop-blur-none duration-300 ease-linear md:border-b md:border-white md:border-opacity-5 ${
        isNavOpen
          ? "translate-x-0 xs:visible xs:pointer-events-auto xs:opacity-100"
          : "translate-x-full md:translate-x-0 xs:invisible xs:pointer-events-none xs:opacity-0"
      }`}
    >
      {/* Logo */}
      <div className="xs:hidden md:flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary bg-opacity-20 border border-secondary border-opacity-30">
          <FiScissors className="text-secondary text-lg" />
        </div>
        <span className="font-display font-bold text-xl text-white tracking-tight">
          scissor
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex md:flex-row xs:flex-col items-center lg:gap-8 md:gap-6 xs:gap-6 text-sm font-medium">
        {["Features", "Pricing", "Analytics", "FAQs"].map((item) => {
          const target = item === "FAQs" ? "faq" : item === "Analytics" ? "analytics" : item === "Pricing" ? "subscription" : "analytics";
          return (
            <Link
              key={item}
              to={target}
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => dispatch(closeNav())}
              className="nav-link text-sm font-medium"
            >
              {item}
            </Link>
          );
        })}
        <div
          className="nav-link text-sm font-medium"
          onClick={() => dispatch(closeNav())}
        >
          My URLs
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="flex md:flex-row xs:flex-col items-center gap-3" onClick={() => dispatch(closeNav())}>
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="text-sm font-medium text-muted hover:text-white transition-colors duration-200"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium text-muted hover:text-white transition-colors duration-200"
          >
            Sign In
          </button>
        )}
        <button
          onClick={() => navigate("/signup")}
          className="btn-primary text-sm py-2.5 px-5"
        >
          Try for free
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
