import React, { useEffect } from 'react'
import HeroImg from '../../../src/images/Hero-img.svg'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";


export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="hero">
      <Header />
      <div
        data-aos="zoom-out"
        className=" lg:pt-24 md:pt-20 xs:pt-16 2xl:mb-12 xl:mb-11 lg:mb-9 md:mb-8 sm:mb-7 xs:mb-6 xl:px-52 lg:px-44 md:px-40 sm:px-28 xs:px-4 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg  font-bold text-center"
      >
        Optimize Your Online Experience with Our Advanced{" "}
        <span className="text-secondary">URL Shortening</span> Solution
      </div>

      <div
        data-aos="fade-left"
        className=" 2xl:text-lg xl:text-base lg:text-sm xs:text-xs font-semibold text-center 2xl:mb-14 xl:mb-12 md:mb-12 sm:mb-11 xs:mb-10 2xl:px-96 xl:px-80 lg:px-64 md:px-44 sm:px-32 xs:px-4 "
      >
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </div>
      <div className=" text-center font-semibold text-secondary hover:cursor-pointer lg:text-base sm:text-sm xs:text-xs">
        Learn more
      </div>
      <div className=" flex justify-center mt-12">
        {" "}
        <img src={HeroImg} alt="" className=" xl:w-max w-96" />{" "}
      </div>
    </div>
  );
}

