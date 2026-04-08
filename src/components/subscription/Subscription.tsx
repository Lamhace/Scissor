import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FiZap } from "react-icons/fi";

/* ── plan data inlined to avoid array-map nesting bugs ── */
const plans = [
  {
    title: "Basic",
    price: "Free",
    description: "Free plan for all users",
    features: ["Unlimited URL Shortening","Basic Link Analytics","Customizable Short Links","Standard Support","Ad-supported"],
    featured: false,
  },
  {
    title: "Professional",
    price: "$15/month",
    description: "Ideal for business creators",
    features: ["Enhanced Link Analytics","Custom Branded Domains","Advanced Link Customization","Priority Support","Ad-free Experience"],
    featured: true,
  },
  {
    title: "Teams",
    price: "$25/month",
    description: "Share with up to 10 users",
    features: ["Team Collaboration","User Roles and Permissions","Enhanced Security","API Access","Dedicated Account Manager"],
    featured: false,
  },
];

export default function Subscription() {
  return (
    <section style={{padding:"80px 16px",position:"relative",overflow:"hidden"}} id="subscription">
      <div style={{position:"absolute",inset:0,
        background:"radial-gradient(ellipse at center,rgba(108,99,255,0.12) 0%,transparent 70%)",
        pointerEvents:"none"}}/>

      <div style={{maxWidth:1100,margin:"0 auto",position:"relative",zIndex:1}}>

        {/* heading */}
        <div style={{textAlign:"center",marginBottom:64}} data-aos="fade-up">
          <div style={{display:"inline-flex",alignItems:"center",gap:8,
            background:"rgba(255,255,255,0.04)",border:"1px solid rgba(108,99,255,0.2)",
            borderRadius:999,padding:"6px 16px",marginBottom:16}}>
            <FiZap style={{color:"#6c63ff",fontSize:14}}/>
            <span style={{fontSize:11,fontFamily:"JetBrains Mono,monospace",color:"#6c63ff",
              textTransform:"uppercase",letterSpacing:"0.12em"}}>Pricing</span>
          </div>
          <h2 style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,
            fontSize:"clamp(1.75rem,4vw,2.75rem)",color:"#fff",margin:"0 0 12px"}}>
            A{" "}
            <span style={{background:"linear-gradient(135deg,#6c63ff,#00f5ff)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              price perfect
            </span>
            {" "}for your needs.
          </h2>
          <p style={{color:"#a0aec0",maxWidth:480,margin:"0 auto",fontSize:15}}>
            From personal projects to enterprise teams — transparent pricing, no surprises.
          </p>
        </div>

        {/* cards grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:24,
          alignItems:"center"
        }}>
          {plans.map((plan) => (
            /*
             * KEY FIX: each plan is rendered directly from a flat array — no nested
             * .map() over an array-of-arrays, which was producing duplicate "Get Started"
             * buttons at the top of the Professional card.
             */
            <div
              key={plan.title}
              data-aos={plan.featured ? "zoom-in" : "fade-up"}
              style={{
                borderRadius:24,
                padding:"36px 28px",
                border: plan.featured
                  ? "1px solid rgba(108,99,255,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                background: plan.featured
                  ? "linear-gradient(145deg,#6c63ff 0%,#4f46e5 55%,#0f3460 100%)"
                  : "rgba(255,255,255,0.03)",
                boxShadow: plan.featured ? "0 24px 60px rgba(108,99,255,0.35)" : "none",
                transform: plan.featured ? "scale(1.04)" : "none",
                transition:"transform .3s,box-shadow .3s",
                position:"relative",
              }}
            >
              {/* "Most Popular" badge – only Professional, inside the card */}
              {plan.featured && (
                <div style={{marginBottom:16}}>
                  <span style={{
                    display:"inline-block",
                    background:"rgba(255,255,255,0.18)",
                    color:"#fff",
                    fontSize:11,fontFamily:"JetBrains Mono,monospace",fontWeight:700,
                    padding:"4px 12px",borderRadius:999,textTransform:"uppercase",
                    letterSpacing:"0.1em"
                  }}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* plan header */}
              <div style={{marginBottom:20}}>
                <div style={{fontSize:12,fontFamily:"JetBrains Mono,monospace",
                  textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4,
                  color: plan.featured ? "rgba(255,255,255,0.7)" : "#a0aec0"}}>
                  {plan.title}
                </div>
                <div style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,
                  fontSize:"2rem",color:"#fff",marginBottom:4}}>
                  {plan.price}
                </div>
                <div style={{fontSize:13,color: plan.featured ? "rgba(255,255,255,0.65)" : "#a0aec0"}}>
                  {plan.description}
                </div>
              </div>

              {/* features */}
              <div style={{marginBottom:28}}>
                {plan.features.map((f, fi) => (
                  <div key={fi} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10}}>
                    <BsCheck2Circle style={{
                      fontSize:17,flexShrink:0,marginTop:1,
                      color: plan.featured ? "#00f5ff" : "#6c63ff"
                    }}/>
                    <span style={{fontSize:13,color: plan.featured ? "rgba(255,255,255,0.8)" : "#a0aec0"}}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button style={{
                width:"100%",padding:"12px 0",borderRadius:12,fontFamily:"Space Grotesk,sans-serif",
                fontWeight:600,fontSize:14,cursor:"pointer",transition:"all .3s",
                background: plan.featured ? "#fff" : "transparent",
                color: plan.featured ? "#6c63ff" : "#6c63ff",
                border: plan.featured ? "none" : "1px solid rgba(108,99,255,0.4)",
              }}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* bottom CTA */}
        <div style={{textAlign:"center",marginTop:48,display:"flex",
          flexWrap:"wrap",gap:16,justifyContent:"center"}} data-aos="fade-up">
          <button style={{
            background:"transparent",border:"1px solid rgba(255,255,255,0.12)",
            color:"#fff",padding:"12px 32px",borderRadius:999,
            fontFamily:"Space Grotesk,sans-serif",fontWeight:600,fontSize:14,cursor:"pointer",
            transition:"border-color .3s"
          }}>
            Get Custom Pricing
          </button>
          <button className="btn-primary" style={{padding:"12px 40px"}}>Select a Plan</button>
        </div>
      </div>
    </section>
  );
}
