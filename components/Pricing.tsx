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
    <section id="pricing" className="py-16 sm:py-24 relative overflow-hidden bg-[#fbfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest block mb-2 text-amber-600 font-bold">
            Simple Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Fair, Transparent Packages.
          </h2>
          <p className="text-xs sm:text-sm mt-1 sm:mt-2 max-w-xl text-slate-600">
            Choose what fits your business best. No hidden fees or unexpected costs.
          </p>
        </div>

        {/* Responsive Grid View: 2-column grid on mobile, 4-column on desktop to easily compare offers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl sm:rounded-2xl p-3.5 sm:p-6 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'bg-white border-2 border-amber-500 shadow-[0_10px_25px_-5px_rgba(217,119,6,0.15)] sm:shadow-[0_15px_35px_-5px_rgba(217,119,6,0.18)] lg:-translate-y-2'
                  : 'bg-white border border-slate-200/90 shadow-[0_6px_18px_-4px_rgba(0,0,0,0.04)] sm:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] hover:border-amber-400 hover:shadow-[0_15px_30px_-5px_rgba(217,119,6,0.1)]'
              }`}
            >
              <div>
                {/* Header with Badge */}
                <div className="flex items-center justify-between gap-1 mb-2 min-h-[22px]">
                  {tier.badge ? (
                    <span
                      className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider ${
                        tier.popular
                          ? 'bg-amber-400 text-slate-950 shadow-sm'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  ) : (
                    <span className="invisible text-[9px]">—</span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1.5 sm:mb-2 text-slate-900 leading-tight">
                  {tier.name}
                </h3>

                <div className="mb-3 sm:mb-5 pb-3 sm:pb-5 border-b border-slate-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-extrabold tracking-tight text-slate-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-slate-900">
                      {tier.devPrice}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-slate-500 mt-1 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5">
                    <span>Hosting: {tier.hostPrice}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{tier.turnaround}</span>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs text-slate-700 leading-snug sm:leading-relaxed">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-amber-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelect(tier.name)}
                className={`w-full py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-bold font-mono text-[11px] sm:text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                  tier.popular
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                    : 'bg-slate-100 hover:bg-amber-400 hover:text-slate-950 text-slate-800'
                }`}
              >
                <span className="hidden sm:inline">Select {tier.name}</span>
                <span className="sm:hidden">Choose Plan</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
