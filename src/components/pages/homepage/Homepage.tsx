import React from 'react'
import Hero from '../../hero/Hero'
import { FiLink2 } from 'react-icons/fi'
import { BsQrCodeScan } from 'react-icons/bs'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { MdEditNote } from 'react-icons/md'
import Subscription from '../../subscription/Subscription'
import Trim from '../../trim/Trim'
import Accordion from '../../faq/Accordion'
import Start from '../../start/Start'
import Footer from '../../footer/Footer'


export default function Homepage() {
  return (
    // <div className='font-family'>
    <div>
      <Hero />
      <div className='flex lg:py-16 md:py-12 sm:py-8 2xl:px-24  xl:px-20 lg:px-16 md:px-14 sm:px-6 justify-between bg-blue-50' id='analytics'>
        <div className='font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg'>One Stop. <br /> Four<span className='text-secondary'> Possibilities.</span></div>
        <div className='flex  justify-center 2xl:gap-36 xl:gap-28 lg:gap-20 md:gap-8 sm:gap-7 '>
          <div className='font-medium xl:text-base lg:text-sm sm:text-xs'><span className='block xl:text-3xl lg:text-2xl sm:text-xl md:font-semibold sm:font-medium'>3M</span>Active users</div>
          <div className='font-medium xl:text-base lg:text-sm sm:text-xs'><span className='block xl:text-3xl lg:text-2xl  sm:text-xl md:font-semibold sm:font-medium'>60M</span>Links & QR <br /> codes created</div>
          <div className='font-medium xl:text-base lg:text-sm sm:text-xs'><span className='block xl:text-3xl lg:text-2xl sm:text-xl md:font-semibold sm:font-medium'>1B</span>Clicked & Scanned <br /> connections</div>
          <div className='font-medium xl:text-base lg:text-sm sm:text-xs'><span className='block xl:text-3xl lg:text-2xl sm:text-xl md:font-semibold sm:font-medium'>300K</span>App integrations</div>
        </div>
      </div>



      <div className='flex lg:flex-row sm:flex-col xl:py-24 lg:py-20 md:py-16 sm:py-14 2xl:px-20 xl:px-16 lg:px-14 md:px-10 sm:px-6 '>
        <div className=' 2xl:w-4/5 whyScissor'>
          <div className='font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl lg:mb-6 md:mb-3 sm:mb-2'>Why choose <span className='text-secondary'>Scissor?</span></div>
          <div className='lg:font-medium sm:font-normal lg:text-base md:text-sm sm:text-xs  2xl:pr-28 xl:pr-24 lg:pr-20 sm:pb-5'>Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </div>
        </div>
        <div className='flex 2xl:gap-14 xl:gap-11 lg:gap-16 sm:gap-20'>
          <div className=''>
            <div>
              <div className='xl:text-3xl lg:text-2xl font-semibold xl:mb-6 lg:mb-5 sm:mb-3 xl:p-5 lg:p-4 sm:p-3 w-fit bg-blue-200 rounded-full'><FiLink2 /></div>
              <div className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-semibold mb-4'> URL Shortening </div>
              <div className='sm:font-normal lg:font-medium lg:text-base md:text-sm sm:text-xs mb-14'>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</div>
            </div>
            <div>
              <div className='xl:text-3xl lg:text-2xl font-semibold xl:mb-6 lg:mb-5 sm:mb-3 xl:p-5 lg:p-4 sm:p-3 w-fit bg-blue-200 rounded-full'><BsQrCodeScan /></div>
              <div className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-semibold mb-4'> QR Codes</div>
              <div className='lg:font-medium sm:font-normal lg:text-base md:text-sm sm:text-xs'> Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</div>
            </div>
          </div>
          <div className=''>
            <div>
              <div className='xl:text-3xl lg:text-2xl font-semibold xl:mb-6 lg:mb-5 sm:mb-3 xl:p-5 lg:p-4 sm:p-3 w-fit bg-blue-200 rounded-full'><MdEditNote /></div>
              <div className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-semibold mb-4'> Custom URLs </div>
              <div className='lg:font-medium sm:font-normal text-base md:text-sm sm:text-xs mb-14 '>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</div>
            </div>
            <div>
              <div className='xl:text-3xl lg:text-2xl font-semibold xl:mb-6 lg:mb-5 sm:mb-3  xl:p-5 lg:p-4 sm:p-3 w-fit bg-blue-200 rounded-full'><IoAnalyticsOutline /></div>
              <div className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-semibold mb-4'> Data Analytic</div>
              <div className='lg:font-medium sm:font-normal text-base md:text-sm sm:text-xs'> Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</div>
            </div>
          </div>
        </div>
      </div >
      <Subscription />
      <Trim />
      <Accordion />
      <Start />
      <Footer />
    </div>
  )
}



