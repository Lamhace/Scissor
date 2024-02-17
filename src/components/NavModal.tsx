import React from "react";
import { Link } from "react-scroll";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function NavModal({ isModalOpen, logOut }: any) {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);

  return (
    <div
      className={`absolute top-0 w-full flex flex-col xs:gap-5 sm:hidden sm:pointer-events-none  bg-tertiary h-screen items-center xs:pt-36 xs:text-base`}
    >
      <div className="">My URLs</div>
      <div>Features</div>
      <Link
        to="subscription"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div onClick={isModalOpen}>Pricing</div>
      </Link>
      <Link
        to="analytics"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div onClick={isModalOpen}>Analytics</div>
      </Link>
      <Link to="faq" spy={true} smooth={true} duration={2000}>
        <div onClick={isModalOpen}>FAQs</div>
      </Link>
      {isLoggedIn ? (
        <div onClick={logOut} className=" text-secondary">
          Sign out
        </div>
      ) : (
        <div onClick={logOut} className=" text-secondary">
          Sign in
        </div>
      )}

      <div className=" bg-secondary xs:py-2  sm:px-6 xs:px-5 text-tertiary rounded-full">
        Try for free
      </div>
    </div>
  );
}
