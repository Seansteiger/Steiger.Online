'use client';

import React, { useState } from 'react';
import { FAQS } from '@/constants';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-24 border-t border-slate-200/80 relative overflow-hidden bg-[#fbfaf7]"
    >
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          {/* Highlighted Header without the eyebrow tag */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Frequently Asked{' '}
            <span className="relative inline-block text-amber-600 bg-amber-500/10 px-4 py-1 rounded-xl border border-amber-500/25 shadow-sm">
              Questions.
            </span>
          </h2>
          <p className="text-sm mt-3 text-slate-600 max-w-lg mx-auto">
            Clear, honest answers to common questions about our websites and process.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 hover:text-amber-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-amber-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
