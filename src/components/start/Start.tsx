import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { Link} from "react-scroll";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Aos from "aos";
import "aos/dist/aos.css";





export default function Start() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
const navigate = useNavigate()
const getStarted = () => {
    if(!isLoggedIn){
      navigate("/signup");
    }
   
};








  return (
    <div className="bg-deepblue flex flex-col items-center justify-center lg:mt-28 sm:mt-20 xs:mt-16 2xl:pt-32 xl:pt-20 lg:pt-16 md:pt-14 sm:pt-12 xs:pt-11 xl:pb-10 lg:pb-9 md:pb-8 sm:pb-7 xs:pb-6">
      <div
        className="xl:text-4xl lg:text-3xl md:text-2xl  ls:text-xl xs:text-lg text-tertiary lg:font-bold md:font-semibold xl:mb-10 lg:mb-9 md:mb-8 sm:mb-7 xs:mb-6"
      >
        Revolutionizing Link Optimization
      </div>
      <Link to="trim">
        <button
          data-aos="zoom-out"
          onClick={getStarted}
          className=" bg-secondary lg:py-2 xs:py-2 lg:px-12 sm:px-11 xs:px-10 xl:text-lg lg:text-base md:text-sm xs:text-xs text-tertiary lg:font-medium sm:font-normal rounded-3xl"
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
