import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FiZap } from "react-icons/fi";
import BasicPlan from "./Basic";
import ProfessionalPlan from "./Proffesional";
import TeamsPlan from "./Teams";
import Aos from "aos";
import "aos/dist/aos.css";

const planConfig = [
  { borderColor: "border-white border-opacity-10", isFeatured: false, badge: null },
  { borderColor: "border-secondary border-opacity-50", isFeatured: true, badge: "Most Popular" },
  { borderColor: "border-white border-opacity-10", isFeatured: false, badge: null },
];

const allPlans = [BasicPlan, ProfessionalPlan, TeamsPlan];

export default function Subscription() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="subscription">
      <div className="absolute inset-0 bg-glow-gradient opacity-20 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-secondary border-opacity-20">
            <FiZap className="text-secondary text-sm" />
            <span className="text-xs font-mono text-secondary tracking-widest uppercase">Pricing</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            A <span className="gradient-text">price perfect</span> for your needs.
          </h2>
          <p className="text-muted max-w-lg mx-auto text-base">
            From personal projects to enterprise teams — transparent pricing with no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {allPlans.map((plan, planIndex) => {
            const config = planConfig[planIndex];
            return plan.map((item: any) => (
              <div
                key={item.title}
                className={`pricing-card border ${config.borderColor} relative ${
                  config.isFeatured
                    ? "pricing-card-featured"
                    : "glass hover:border-secondary hover:border-opacity-30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-400"
                }`}
                data-aos={planIndex === 0 ? "fade-right" : planIndex === 2 ? "fade-left" : "zoom-in"}
                data-aos-delay={planIndex * 100}
              >
                {config.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-secondary to-neon text-white text-xs font-mono font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {config.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`text-sm font-mono uppercase tracking-widest mb-1 ${config.isFeatured ? "text-white text-opacity-70" : "text-muted"}`}>
                    {item.title}
                  </div>
                  <div className={`font-display font-bold text-4xl mb-2 ${config.isFeatured ? "text-white" : "text-white"}`}>
                    {item.price}
                  </div>
                  <div className={`text-sm ${config.isFeatured ? "text-white text-opacity-70" : "text-muted"}`}>
                    {item.description}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {item.features.map((f: any, fi: number) => (
                    <div key={fi} className="flex items-start gap-3">
                      <BsCheck2Circle
                        className={`text-lg flex-shrink-0 mt-0.5 ${config.isFeatured ? "text-neon" : "text-secondary"}`}
                      />
                      <span className={`text-sm ${config.isFeatured ? "text-white text-opacity-80" : "text-muted"}`}>
                        {f.feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-display font-semibold text-sm transition-all duration-300 ${
                    config.isFeatured
                      ? "bg-white text-secondary hover:bg-opacity-90"
                      : "glass border border-secondary border-opacity-30 text-secondary hover:bg-secondary hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ));
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up">
          <button className="glass border border-white border-opacity-10 text-white px-8 py-3 rounded-full font-display font-semibold text-sm hover:border-secondary hover:border-opacity-40 transition-all duration-300">
            Get Custom Pricing
          </button>
          <button className="btn-primary text-sm px-10 py-3">
            Select a Plan
          </button>
        </div>
      </div>
    </section>
  );
}
