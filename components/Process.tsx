'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/constants';

const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 border-t border-slate-200/80 relative overflow-hidden bg-[#fbfaf7]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest block mb-2 text-amber-600 font-bold">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Simple 4-Step Process.
          </h2>
          <p className="text-sm mt-2 text-slate-600 max-w-xl">
            We guide you every step of the way, handling everything from design to domain setup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-mono font-bold text-amber-600">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
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
