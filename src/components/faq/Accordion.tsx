import React, { useEffect } from "react";
import FaqData from "./FaqData";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Accordion() {
   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);
  const [openedIndex, setOpenedIndex] = React.useState<number>(-1); // -1 means nothing is opened

  const toggleAccordion = (index: number) => {
    if (openedIndex === index) {
      setOpenedIndex(-1); // If the index is already opened, close it
    } else {
      setOpenedIndex(index);
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center" id="faq">
      <h1 className=" xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg sm:font-bold xs:font-semibold lg:mb-16 sm:mb-10 xs:mb-6">
        FAQs
      </h1>
      {FaqData.map((item, index) => (
        <div data-aos="fade-down" className="accordion" key={index}>
          <div className=" flex lg:mb-5 md:mb-4 sm:mb-3 xs:mb-2 mt-3 items-center justify-between">
            <div className="xl:text-lg lg:text-base xs:text-sm lg:font-semibold md:font-medium xs:font-medium xs:pr-5">
              {item.question}
            </div>
            <div
              onClick={() => toggleAccordion(index)}
              className=" xl:text-xl lg:text-lg md:text-base lg:font-semibold md:font-medium transition-all duration-300"
            >
              {openedIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {openedIndex === index && (
            <div className=" xl:mb-3 lg:mb-2 xl:text-sm xs:text-xs  lg:font-medium xs:font-normal transition-all duration-1000 pr-20">
              {item.answer}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}
