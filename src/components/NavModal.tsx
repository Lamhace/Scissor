import React from 'react'
import { Link } from 'react-scroll'

export default function NavModal() {
  return (
    <div className=" absolute top-0 w-full flex flex-col md:gap-6 sm:gap-5 xs:gap-4 bg-tertiary h-screen items-center sm:pt-28 xs:pt-36 md:text-lg sm:text-base xs:text-sm navModal transition-all  duration-1000">
      <div className="">My URLs</div>
      <div>Features</div>
      <Link
        to="subscription"
        spy={true}
        smooth={true}
        offset={-10}
        duration={1000}
      >
        <div>Pricing</div>
      </Link>
      <Link
        to="analytics"
        spy={true}
        smooth={true}
        offset={260}
        duration={1000}
      >
        <div>Analytics</div>
      </Link>
      <Link to="faq" spy={true} smooth={true} offset={100} duration={2000}>
        <div>FAQs</div>
      </Link>
      <div className=" text-secondary">Sign out</div>
      <div className=" bg-secondary xs:py-2  sm:px-6 xs:px-5 sm:text-sm xs:text-xs text-tertiary rounded-full">
        Try for free
      </div>
    </div>
  );
}
