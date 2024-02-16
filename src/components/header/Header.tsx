import React, { useState } from "react";
import HeaderLogo from "../../../src/images/HeaderLogo.svg";
import NavModal from "../NavModal";
import { LuAlignJustify } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../../Redux/LoginReducer";

export default function Header() {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logOut());
    navigate("/");
    console.log(`isLoggedIn value is this gangan: ${isLoggedIn}`);
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex 2xl:px-24 xl:px-20 lg:px-16 sm:px-3 py-3 list-none sm:justify-between sm:items-center hover:cursor-pointer xl:text-lg md:text-sm sm:text-xs font-medium relative">
      <LuAlignJustify
        className={` z-50 sm:hidden xs:opacity-100  absolute xs:right-8 xs:top-8 md:text-3xl xs:text-xl transition-all duration-300 ${
          isOpen ? "hideHamburger" : "showHamburger"
        } `}
        onClick={toggleMenu}
      />
      <LuX
        className={` z-50 sm:hidden absolute sm:right-14 xs:right-8 xs:top-8 md:text-3xl xs:text-xl transition-all duration-300 ${
          isOpen ? "showHamburger" : "hideHamburger"
        }`}
        onClick={toggleMenu}
      />
      <div
        className={` transition-all  duration-300 ${
          isOpen ? "showNavModal" : "hideNavModal"
        }`}
      >
        <NavModal isModalOpen={isOpen} logOut={logout} />
      </div>

      <div>
        <Link to="/Homepage">
          <img
            src={HeaderLogo}
            alt="Logo"
            className=" xl:w-max lg:w-32 sm:w-24 xs:w-20 xs:absolute top-9 left-5 sm:static sm:mt-1 lg:mt-0 xl:mt-1 2xl:mt-3"
          />
        </Link>
      </div>
      <div className="flex xl:gap-14 lg:gap-11 md:gap-8 sm:gap-5 items-center lg:text-sm sm:text-xs sm:opacity-100 xs:opacity-0 sm:pointer-events-auto xs:pointer-events-none ">
        {/* <span className='feature-dropdown'>^</span> */}
        <li className="">My URLs</li>
        <li>Features</li>
        <Link
          to="subscription"
          spy={true}
          smooth={true}
          offset={-10}
          duration={1000}
        >
          <li>Pricing</li>
        </Link>
        <Link
          to="analytics"
          spy={true}
          smooth={true}
          offset={260}
          duration={1000}
        >
          <li>Analytics</li>
        </Link>
        <Link to="faq" spy={true} smooth={true} offset={100} duration={2000}>
          <li>FAQs</li>
        </Link>
      </div>

      <div className="flex lg:gap-5 md:gap-4 sm:gap-3 items-center sm:flex-row lg:text-sm sm:text-xs sm:opacity-100 xs:opacity-0 sm:pointer-events-auto xs:pointer-events-none ">
        <li className=" text-secondary" onClick={logout}>
          Sign out
        </li>
        <li className=" bg-secondary lg:py-3 sm:py-2 lg:px-8 sm:px-5 text-tertiary rounded-full">
          Try for free
        </li>
      </div>
    </div>
  );
}
