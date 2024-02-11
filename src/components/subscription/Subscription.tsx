import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import BasicPlan from './Basic'
import ProfessionalPlan from './Proffesional'
import TeamsPlan from './Teams'





export default function Subscription() {
    return (
        <div className=' pt-7' id='subscription'>
            <div className='flex flex-col items-center'>
                <div className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-4'>A <span className='text-secondary'>price perfect </span>for your needs.</div>
                <div className=' 2xl:w-3/4 lg:w-2/4 sm:w-96 text-center md:font-semibold sm:font-medium'>From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</div>
            </div>

            <div className='flex lg:flex-row sm:flex-col lg:gap-0 md:gap-12 sm:gap-11 items-center justify-center mt-16 '>
                <div className='shadow-md w-fit pt-5 lg:pb-7 sm:pb-5 xl:pl-20 md:pl-14 sm:pl-10 xl:pr-12 md:pr-9 sm:pr-14 border border-blue-300 lg:rounded-l-2xl lg:rounded-r-none sm:rounded-2xl'>
                    {BasicPlan.map((item) => {
                        return (
                            <div className='' key={item.title}>
                                <div className='xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold lg:mb-6 md:mb-3'>{item.title}</div>
                                <div className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-4'>{item.price}</div>
                                <div className=' xl:text-xl lg:text-lg md:text-base sm:text-sm font-semibold md:mb-7 sm:mb-5'>{item.description}</div>
                                <div className=''>
                                    {item.features.map((item) => {
                                        return (
                                            <div className='flex items-center font-medium lg:text-base md:text-sm sm:text-xs gap-2 lg:mb-7 md:mb-6 sm:mb-5'>
                                                <span><BsCheck2Circle className=' font-medium lg:text-lg md:text-base sm:text-sm text-secondary' /></span>
                                                <div className=''>{item.feature}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>



                <div className='w-fit lg:pt-12 sm:pt-5 lg:pb-32 sm:pb-5 xl:pl-16 lg:pl-14 sm:pl-10 xl:pr-20 lg:pr-16 sm:pr-10 text-tertiary bg-deepblue rounded-2xl'>
                    {ProfessionalPlan.map((item) => {
                        return (
                          <div className="" key={item.title}>
                            <div className="xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold lg:mb-6 md:mb-3 ">
                              {item.title}
                            </div>
                            <div className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-4">
                              {item.price}
                            </div>
                            <div className="xl:text-xl lg:text-lg md:text-base sm:text-sm font-semibold md:mb-7 sm:mb-5">
                              {item.description}
                            </div>
                            <div className="">
                              {item.features.map((item) => {
                                return (
                                  <div className="flex items-center font-medium lg:text-base md:text-sm sm:text-xs gap-2 lg:mb-7 md:mb-6 sm:mb-5">
                                    <span>
                                      <BsCheck2Circle className="font-medium text-lg md:text-base sm:text-sm " />
                                    </span>
                                    <div className="">{item.feature}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                    })} 
                </div>






                <div className='shadow-md w-fit  border pt-5 lg:pb-7 sm:pb-5 xl:pl-16 md:pl-12 sm:pl-9  xl:pr-10 md:pr-8 sm:pr-12 border-blue-300 lg:rounded-r-2xl lg:rounded-l-none sm:rounded-2xl'>
                    {TeamsPlan.map((item) => {
                        return (
                          <div className="" key={item.title}>
                            <div className="xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold lg:mb-6 md:mb-3">
                              {item.title}
                            </div>
                            <div className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-4">
                              {item.price}
                            </div>
                            <div className="xl:text-xl lg:text-lg md:text-base sm:text-sm font-semibold md:mb-7 sm:mb-5">
                              {item.description}
                            </div>
                            <div className="">
                              {item.features.map((item) => {
                                return (
                                  <div className="flex items-center font-medium lg:text-base md:text-sm sm:text-xs gap-2 lg:mb-7 md:mb-6 sm:mb-5">
                                    <span>
                                      <BsCheck2Circle className=" font-medium text-lg md:text-base sm:text-xs text-secondary" />
                                    </span>
                                    <div className="">{item.feature}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                    })}
                </div>
            </div>
            <div className=' flex justify-center md:mt-14 sm:mt-11 gap-8 xl:text-base lg:text-sm sm:text-xs md:font-medium sm:font-normal'>
                <div ><button className=' bg-tertiary text-secondary border border-secondary rounded-3xl lg:py-3 md:py-2 sm:py-1 lg:px-6 md:px-5 sm:px-4'>Get Custom Pricing</button></div>
                <div ><button className='lg:py-3 md:py-2 sm:py-1 lg:px-12 md:px-11 sm:px-6  bg-secondary text-tertiary border border-tertiary rounded-3xl'> Select Pricing</button></div>
            </div>
        </div>
    )
}


