import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Section } from '../types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500 pt-20">

      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Cube-like shape */}
        <div className="absolute top-20 right-[10%] w-20 h-20 border border-neon-cyan/30 animate-float opacity-50 rotate-45"></div>
        <div className="absolute bottom-40 left-[10%] w-32 h-32 border border-neon-purple/30 animate-float opacity-30 -rotate-12" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-sm animate-float">
            <span className="text-neon-cyan text-xs font-bold tracking-[0.2em] uppercase">Best designs</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter mb-8">
          BUILDING WEBSITES THAT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple text-glow">
            GROW YOUR BUSINESS
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We build beautiful, high-performance websites designed to get you more clients and elevate your brand <span className="text-neon-cyan font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Online</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection(Section.PORTFOLIO)}
            className="group relative px-8 py-4 bg-white text-void font-bold font-display uppercase tracking-wider overflow-hidden rounded-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            <div className="absolute inset-0 w-0 bg-neon-cyan transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
            <span className="relative flex items-center gap-2">
              View Our Work <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          <div className="relative group">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full animate-pulse-slow md:hidden"></div>
            <button
              onClick={() => scrollToSection(Section.CONTACT)}
              className="relative px-8 py-4 bg-transparent border border-neon-cyan/50 text-neon-cyan font-bold font-display uppercase tracking-wider rounded-sm hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </div>
    </section >
  );
};

export default Hero;