import React from 'react'
import FaqData from './FaqData'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'


export default function Accordion() {
  const [openedIndex, setOpenedIndex] = React.useState<number>(-1); // -1 means nothing is opened

  const toggleAccordion = (index: number) => {
    if (openedIndex === index) {
      setOpenedIndex(-1); // If the index is already opened, close it
    } else {
      setOpenedIndex(index);
    }
  };
  return (
    <div className=' flex flex-col items-center justify-center' id='faq'>
      <h1 className=' xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold lg:mb-16 sm:mb-10'>FAQs</h1>
      <div className=''>
        {FaqData.map((item, index) => (
          <div className='' key={index}>
            <div className='accordion'>
              <div className=' flex lg:mb-5 md:mb-4 sm:mb-3 mt-3 items-center justify-between'>
                <div className='xl:text-lg lg:text-base sm:text-sm lg:font-semibold md:font-medium'>{item.question}</div>
                <div onClick={() => toggleAccordion(index)} className=' xl:text-xl lg:text-lg md:text-base lg:font-semibold md:font-medium'>
                  {openedIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {openedIndex === index && (
                <div className=' xl:mb-3 lg:mb-2 xl:text-sm sm:text-xs  lg:font-medium sm:font-normal'>{item.answer}</div>
              )}
              <hr />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
