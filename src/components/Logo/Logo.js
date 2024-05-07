import React from 'react'
import { Link } from "react-scroll";
import HeaderLogo from '../../images/HeaderLogo.svg'

const Logo = () => {
  return (
    <div>
      <Link to="/Homepage">
        <img
          src={HeaderLogo}
          alt="Logo"
          className=" xl:w-max lg:w-32 sm:w-24 xs:w-20 xs:absolute top-9 left-5 sm:static sm:mt-1 lg:mt-0 xl:mt-1 2xl:mt-3"
        />
      </Link>
    </div>
  );
}

export default Logo
