import React from 'react'
import { Link } from 'react-scroll'





export default function NavModal({isModalOpen, logOut}: any) {
  return (
    <div className= {`absolute top-0 w-full flex flex-col xs:gap-4 sm:hidden sm:pointer-events-none  bg-tertiary h-screen items-center xs:pt-36 md:text-lg xs:text-sm`}>
      <div className="">My URLs</div>
      <div>Features</div>
      <Link
        to="subscription"
        spy={true}
        smooth={true}
        offset={-10}
        duration={1000}
      >
        <div onClick={()=> !isModalOpen}>Pricing</div>
      </Link>
      <Link
        to="analytics"
        spy={true}
        smooth={true}
        offset={260}
        duration={1000}
      >
        <div onClick={()=> !isModalOpen}>Analytics</div>
      </Link>
      <Link to="faq" spy={true} smooth={true} offset={100} duration={2000}>
        <div onClick={()=> !isModalOpen}>FAQs</div>
      </Link>
      <div onClick={logOut} className=" text-secondary">Sign out</div>
      <div className=" bg-secondary xs:py-2  sm:px-6 xs:px-5 sm:text-sm xs:text-xs text-tertiary rounded-full">
        Try for free
      </div>
    </div>
  );
}
