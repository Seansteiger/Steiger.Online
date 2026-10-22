'use client';

import React from 'react';
import { TRUST_BADGES } from '@/constants';
import { useTheme } from '@/context/ThemeContext';

const ProofMarquee: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      className={`py-8 border-y overflow-hidden transition-colors ${
        isLight
          ? 'border-slate-200 bg-slate-50/50'
          : 'border-white/5 bg-[#0d0e12]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <span
          className={`text-[11px] font-mono uppercase tracking-widest ${
            isLight ? 'text-slate-500' : 'text-slate-500'
          }`}
        >
          Trusted By Growing Brands & Organizations
        </span>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex items-center gap-10 w-max animate-[marquee_28s_linear_infinite]">
          {[...TRUST_BADGES, ...TRUST_BADGES].map((brand, idx) => (
            <span
              key={idx}
              className={`text-xs font-mono font-medium tracking-wider transition-colors ${
                isLight
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400/80 hover:text-white'
              }`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofMarquee;
