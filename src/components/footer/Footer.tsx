import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FooterImg from '../../../src/images/FooterLogo.svg'
import TwitterLogo from '../../../src/images/TwitterLogo.svg'
import InstagramLogo from '../../../src/images/InstagramLogo.svg'
import LinkedInLogo from '../../../src/images/LinkedInLogo.svg'
import FacebookLogo from '../../../src/images/FacebookLogo.svg'
import Aos from "aos";
import "aos/dist/aos.css";


export default function Footer() {
  useEffect(()=>{
    Aos.init({duration:1000})
  })

  return (
    <div className="xs:flex xs:flex-wrap xl:flex sm:grid md:grid-cols-3 sm:grid-cols-2 grid-rows-2 lg:px-20 md:px-24 sm:px-28  justify-center xs:gap-10 lg:gap-20  md:gap-10 sm:gap-14 xs:py-14 sm:py-16 md:py-20 bg-blue-100">
      <div
        data-aos="fade-down"
        className="xl:flex items-center flex-col sm:gap-7 "
      >
        <div className="xl:mb-0 lg:mb-4 md:mb-3 xs:mb-1">
          <Link to="/">
            <img
              src={FooterImg}
              alt="Logo"
              className=" xl:w-max lg:w-32  md:w-28 xs:w-24"
            />
          </Link>
        </div>
        <div className="flex lg:gap-4 md:gap-3 xs:gap-2 xs:ml-1 lg:ml-0">
          <div>
            <img
              src={TwitterLogo}
              alt="Logo"
              className="lg:w-full  md:w-5 xs:w-4"
            />
          </div>
          <div>
            <img
              src={InstagramLogo}
              alt="Logo"
              className="lg:w-full md:w-5 xs:w-4"
            />
          </div>
          <div>
            <img
              src={LinkedInLogo}
              alt="Logo"
              className="lg:w-full  md:w-5 xs:w-4"
            />
          </div>
          <div>
            <img
              src={FacebookLogo}
              alt="Logo"
              className="lg:w-full md:w-5 xs:w-4"
            />
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="flex flex-col gap-14">
        <div>
          <div className=" lg:font-bold md:font-semibold xs:font-medium  mb-3">
            Why Scissor ?
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold sm:font-normal mb-1">
            Scissor 101
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Integration & API
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal">
            Pricing
          </div>
        </div>
        <div>
          <div className=" lg:font-bold md:font-semibold xs:font-medium mb-3">
            Resources
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Blog
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Resource Library
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Developers
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            App connectors
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Support
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Trust center
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Browser Extension
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal">
            Mobile App
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="flex flex-col gap-8">
        <div>
          <div className=" lg:font-bold md:font-semibold xs:font-medium mb-3">
            Solutions
          </div>
          <div className=" lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Social Media
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Digital Marketing
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Customer Service
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal">
            For Developers
          </div>
        </div>
        <div>
          <div className=" lg:font-bold md:font-semibold xs:font-medium mb-3">
            Features
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Branded Links
          </div>
          <div className=" lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Mobile Links
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Browser Campaign
          </div>
          <div className=" lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Management & Analytics
          </div>
          <div className=" lg:text-base md:text-sm lg:font-semibold md:font-normal">
            QR Code generation
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="flex flex-col gap-14">
        <div>
          <div className=" lg:font-bold md:font-semibold xs:font-medium mb-3">
            Products
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Link Management
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            QR codes
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal">
            Link-in-bio
          </div>
        </div>
        <div>
          <div className=" lg:font-bold md:font-semibold xs:font-medium mb-3">
            Legal
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Privacy Policy
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Cookie Policy
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Term of Service
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
            Acceptable Use Policy
          </div>
          <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal">
            Code of Conduct
          </div>
        </div>
      </div>

      <div data-aos="fade-down">
        <div className=" lg:font-bold md:font-semibold xs:font-medium mb-3">
          Company
        </div>
        <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
          About Scissor
        </div>
        <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
          Careers
        </div>
        <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
          Partners
        </div>
        <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
          Press
        </div>
        <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal mb-1">
          Contact
        </div>
        <div className="lg:text-base md:text-sm lg:font-semibold md:font-normal">
          Reviews
        </div>
      </div>
    </div>
  );
}
