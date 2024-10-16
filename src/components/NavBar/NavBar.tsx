import React from "react";
import logo from "../../images/HeaderLogo.svg";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../../Redux/LoginReducer";
import { closeNav } from "../../Redux/HamburgerReducer";

const NavBar = () => {
  const { isNavOpen } = useSelector((store: any) => store.isNavOpen);
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logOut());
    navigate("/login");
    console.log(`isLoggedIn value is: ${isLoggedIn}`);
  }

  return (
    <div
      className={`flex md:flex-row xs:flex-col md:justify-between md:gap-0 xs:gap-7 xs:justify-center items-center  xl:text-xl lg:text-lg sm:text-base xs:text-base font-semibold px-10 cursor-pointer xs:fixed xs:h-screen w-full md:sticky md:h-16 z-30 md:bg-transparent xs:bg-tertiary md:visible md:pointer-events-auto md:opacity-100 duration-300 ease-linear ${
        isNavOpen
          ? " translate-x-0  xs:visible xs:pointer-events-auto xs:opacity-100"
          : " translate-x-full md:translate-x-0  xs:invisible xs:pointer-events-none xs:opacity-0"
      }  `}
    >
      <div className=" xs:hidden md:block ">
        <img src={logo} alt="LogoImg" className=" md:w-28 lg:w-32 xl:w-36  " />
      </div>
      <div className="flex md:flex-row xs:flex-col items-center lg:gap-10 md:gap-7 xs:gap-6 xl:text-xl lg:text-lg md:text-sm">
        <div onClick={() => dispatch(closeNav())}>My URLs</div>
        <div>Features</div>
        <div>
          <Link
            to="subscription"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => dispatch(closeNav())}
          >
            Pricing
          </Link>
        </div>
        <div>
          {" "}
          <Link
            to="analytics"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => dispatch(closeNav())}
          >
            Analytics
          </Link>
        </div>
        <div>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            duration={2000}
            onClick={() => dispatch(closeNav())}
          >
            FAQs
          </Link>
        </div>
      </div>
      <div
        className="flex md:flex-row xs:flex-col items-center lg:gap-10 md:gap-7  xs:gap-7 xl:text-xl lg:text-lg md:text-sm"
        onClick={() => dispatch(closeNav())}
      >
        {isLoggedIn ? (
          <div onClick={logout} className="text-secondary">
            Sign Out
          </div>
        ) : (
          <div onClick={logout} className="text-secondary">
            Sign In
          </div>
        )}

        <div className=" text-tertiary px-4 py-1 bg-secondary rounded-md">
          Try for free
        </div>
      </div>
    </div>
  );
};

export default NavBar;
