import React from "react";
import FaqData from "./FaqData";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";

export default function Accordion() {
  const [openedIndex, setOpenedIndex] = React.useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setOpenedIndex(openedIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 px-4 relative" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-secondary border-opacity-20">
            <FiHelpCircle className="text-secondary text-sm" />
            <span className="text-xs font-mono text-secondary tracking-widest uppercase">FAQs</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted">Everything you need to know about Scissor.</p>
        </div>

        <div className="space-y-3">
          {FaqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openedIndex === index
                  ? "border-secondary border-opacity-40 bg-secondary bg-opacity-5"
                  : "border-white border-opacity-5 glass hover:border-opacity-10"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 30}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`font-display font-medium text-sm md:text-base pr-8 ${openedIndex === index ? "text-white" : "text-white text-opacity-80"}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openedIndex === index ? "bg-secondary text-white" : "bg-white bg-opacity-5 text-muted"
                }`}>
                  {openedIndex === index ? <AiOutlineMinus className="text-sm" /> : <AiOutlinePlus className="text-sm" />}
                </span>
              </button>
              {openedIndex === index && (
                <div className="px-6 pb-5">
                  <div className="text-muted text-sm leading-relaxed border-t border-white border-opacity-5 pt-4">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
