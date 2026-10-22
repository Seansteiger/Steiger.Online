'use client';

import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Section } from '@/types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-32 pb-16"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Clear, Simple Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-balance leading-[1.12] text-slate-900">
          Websites That Bring You <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-slate-900 to-amber-700">
            More Clients.
          </span>
        </h1>

        {/* Simple Plain-English Subheadline */}
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-pretty text-slate-600">
          We design and build clean, modern websites for South African and global businesses.
          Fast to load, beautiful on phones, and built to help you grow.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <button
            onClick={() => scrollToSection(Section.PORTFOLIO)}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection(Section.CONTACT)}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span>Get a Free Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
