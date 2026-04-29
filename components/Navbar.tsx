import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Instagram, MessageSquare, ArrowRight } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: Section.HOME, label: 'Home' },
    { id: Section.SERVICES, label: 'Services' },
    { id: Section.PRICING, label: 'Pricing' },
    { id: Section.PORTFOLIO, label: 'Our Work' },
    { id: Section.CONTACT, label: 'Contact Us' },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-40 transition-all duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'
          }`}
        style={{ top: '0' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection(Section.HOME)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-neon-cyan blur-lg opacity-20 group-hover:opacity-60 transition-opacity"></div>
              <Code2 className="w-7 h-7 md:w-8 md:h-8 text-neon-cyan relative z-10" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white">
              Steiger.Online
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 relative group ${activeSection === link.id ? 'text-neon-cyan' : 'text-slate-400 hover:text-white'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-neon-cyan transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection(Section.CONTACT)}
              className="ml-4 px-6 py-2 bg-neon-cyan/5 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 rounded-sm font-display font-bold text-[10px] tracking-[0.2em] uppercase"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white glass-panel rounded-full border border-white/10 active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Refined Compact Mobile Menu Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-[280px] h-fit bg-void/98 backdrop-blur-2xl border-l border-b border-white/5 transition-transform duration-500 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)] rounded-bl-3xl`}
      >
        {/* Menu Header */}
        <div className="p-6 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-neon-cyan" />
            <span className="font-display font-bold text-base tracking-tighter text-white">Menu</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white rounded-full border border-white/5 bg-white/5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex-1 flex flex-col py-8 px-6 gap-6">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setMobileMenuOpen(false);
              }}
              className={`group flex items-center justify-between text-lg font-display font-bold tracking-wider text-white/50 hover:text-neon-cyan transition-all duration-300 transform ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-neon-cyan" />
            </button>
          ))}
          
          <div className="mt-4 pt-8 border-t border-white/5">
            <button
               onClick={() => {
                scrollToSection(Section.CONTACT);
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan font-display font-bold tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-2 hover:bg-neon-cyan hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] text-xs"
            >
              Start Project 
            </button>
          </div>
        </div>

      </div>

      {/* Backdrop for Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;