import React from 'react'
import HeaderLogo from '../../../src/images/HeaderLogo.svg'
import NavModal from '../NavModal';
import { LuAlignJustify } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  function logout() {
    navigate('/');
  }

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex lg:flex-row 2xl:px-24 xl:px-20 lg:px-16 py-3 list-none lg:justify-between lg:items-center hover:cursor-pointer xl:text-lg md:text-sm sm:text-xs font-medium relative'>
      <LuAlignJustify className={`lg:hidden absolute right-14 top-6 md:text-3xl sm:text-2xl ${isOpen ? 'hideOpenNav' : 'openNav'} lg:hidden z-50`} onClick={toggleMenu} />
      <LuX className={`lg:hidden absolute right-14 top-6 md:text-3xl sm:text-2xl ${isOpen ? 'closeNav' : 'hideCloseNav'} lg:hidden z-50`} onClick={toggleMenu} />
      {isOpen && <NavModal />}




      <div>
        <Link to='/Homepage'><img src={HeaderLogo} alt="Logo" className=' xl:w-max lg:w-32 md:w-28 sm:w-24 sm:mt-4 lg:mt-0 xl:mt-1 2xl:mt-3 sm:ml-14' /></Link>
      </div>
      <div className='flex xl:gap-14 lg:gap-11 items-center lg:flex-row sm:flex-col navMenu'>
        {/* <span className='feature-dropdown'>^</span> */}
        <li className=''>My URLs</li>
        <li>Features</li>
        <Link to='subscription' spy={true} smooth={true} offset={-10} duration={1000}><li>Pricing</li></Link>
        <Link to='analytics' spy={true} smooth={true} offset={260} duration={1000}><li>Analytics</li></Link>
        <Link to='faq' spy={true} smooth={true} offset={100} duration={2000}><li>FAQs</li></Link>
      </div>

      <div className='flex gap-5 items-center lg:flex-row sm:flex-col navMenu' >
        <li className=' text-secondary' onClick={logout}>Sign out</li>
        <li className=' bg-secondary py-3 px-8 text-tertiary rounded-full'>Try for free</li>
      </div>


    </div>
  )
}

