'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/constants';

const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-16 sm:py-24 border-t border-slate-200/80 relative overflow-hidden bg-[#fbfaf7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest block mb-2 text-amber-600 font-bold">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Simple 4-Step Process.
          </h2>
          <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-slate-600 max-w-xl">
            We guide you every step of the way, handling everything from design to domain setup.
          </p>
        </div>

        {/* 2-column on mobile, 4-column on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-600">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xs sm:text-base font-bold mb-1 sm:mb-2 text-slate-900 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
