import React, { useState } from "react";
import FaqData from "./FaqData";
import { FiHelpCircle, FiPlus, FiX } from "react-icons/fi";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? -1 : i);

  return (
    <section style={{padding:"80px 16px"}} id="faq">
      <div style={{maxWidth:760,margin:"0 auto"}}>

        {/* heading */}
        <div style={{textAlign:"center",marginBottom:48}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,
            background:"rgba(255,255,255,0.04)",border:"1px solid rgba(108,99,255,0.2)",
            borderRadius:999,padding:"6px 16px",marginBottom:16}}>
            <FiHelpCircle style={{color:"#6c63ff",fontSize:14}}/>
            <span style={{fontSize:11,fontFamily:"JetBrains Mono,monospace",color:"#6c63ff",
              textTransform:"uppercase",letterSpacing:"0.12em"}}>FAQs</span>
          </div>
          <h2 style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,
            fontSize:"clamp(1.75rem,4vw,2.75rem)",color:"#fff",margin:"0 0 12px"}}>
            Frequently Asked{" "}
            <span style={{background:"linear-gradient(135deg,#6c63ff,#00f5ff)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              Questions
            </span>
          </h2>
          <p style={{color:"#a0aec0",fontSize:15,margin:0}}>
            Everything you need to know about Scissor.
          </p>
        </div>

        {/* accordion list */}
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {FaqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              /*
               * KEY FIX: the outer div is always rendered and never removed.
               * We do NOT use data-aos here because AOS re-animates on state change
               * which was causing the item to flash/disappear when opened.
               * Question text lives in a <div>, not inside a conditional block.
               * Only the answer panel is conditionally shown.
               */
              <div
                key={i}
                className="accordion-item"
                style={isOpen ? {
                  borderColor:"rgba(108,99,255,0.4)",
                  background:"rgba(108,99,255,0.04)"
                } : {}}
              >
                {/* ── question row – ALWAYS visible ── */}
                <button
                  type="button"
                  className="accordion-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion-question-text">{item.question}</span>
                  <span
                    className="accordion-icon"
                    style={isOpen ? {
                      background:"#6c63ff",color:"#fff",transform:"rotate(45deg)"
                    } : {}}
                  >
                    {/* always render FiPlus; rotation via style above creates an × when open */}
                    <FiPlus style={{fontSize:13}}/>
                  </span>
                </button>

                {/* ── answer panel – conditionally rendered BELOW the question ── */}
                {isOpen && (
                  <div className="accordion-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
