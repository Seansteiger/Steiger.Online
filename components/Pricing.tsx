'use client';

import React from 'react';
import { PRICING_TIERS } from '@/constants';
import { Check, ArrowRight } from 'lucide-react';
import { Section } from '@/types';

interface PricingProps {
  onSelectPlan: (plan: string) => void;
  scrollToSection?: (section: Section) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan, scrollToSection }) => {
  const handleSelect = (planName: string) => {
    onSelectPlan(planName);
    if (scrollToSection) {
      scrollToSection(Section.CONTACT);
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#fbfaf7]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest block mb-2 text-amber-600 font-bold">
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Fair, Transparent Packages.
          </h2>
          <p className="text-sm mt-2 max-w-xl text-slate-600">
            Choose what fits your business best. No hidden fees or unexpected costs.
          </p>
        </div>

        {/* 4 Clean Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-6 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'bg-white border-2 border-amber-500 shadow-[0_15px_35px_-5px_rgba(217,119,6,0.18)] lg:-translate-y-2'
                  : 'bg-white border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] hover:border-amber-400 hover:shadow-[0_15px_30px_-5px_rgba(217,119,6,0.1)]'
              }`}
            >
              {tier.badge && (
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                    tier.popular
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">
                  {tier.name}
                </h3>

                <div className="mb-5 pb-5 border-b border-slate-100">
                  <div className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-slate-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-slate-900">
                      {tier.devPrice}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-500 mt-1 flex items-center gap-1.5">
                    <span>Hosting: {tier.hostPrice}</span>
                    <span>•</span>
                    <span>{tier.turnaround}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-amber-600" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelect(tier.name)}
                className={`w-full py-3 px-4 rounded-xl font-bold font-mono text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  tier.popular
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                    : 'bg-slate-100 hover:bg-amber-400 hover:text-slate-950 text-slate-800'
                }`}
              >
                <span>Select {tier.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
