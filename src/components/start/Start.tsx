import React from 'react'
import { Link } from 'react-router-dom'


export default function Start() {
  return (
    <div className='bg-deepblue flex flex-col items-center justify-center lg:mt-28 sm:mt-20 2xl:pt-32 xl:pt-20 lg:pt-16 md:pt-14 sm:pt-12 xl:pb-10 lg:pb-9 md:pb-8 sm:pb-7'>
      <div className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-tertiary lg:font-bold md:font-semibold xl:mb-10 lg:mb-9 md:mb-8 sm:mb-7'>
        Revolutionizing Link Optimization
      </div>
      <Link to='/signup'><button className=' bg-secondary lg:py-2 sm:py-1 lg:px-12 sm:px-11 xl:text-lg lg:text-base md:text-sm sm:text-xs text-tertiary lg:font-medium sm:font-normal rounded-3xl'>Get Started</button></Link>
    </div>
  )
}
