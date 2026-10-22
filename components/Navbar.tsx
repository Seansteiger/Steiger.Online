'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Section } from '@/types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', section: Section.PORTFOLIO },
    { label: 'Services', section: Section.SERVICES },
    { label: 'Pricing', section: Section.PRICING },
    { label: 'How It Works', section: Section.PROCESS },
    { label: 'FAQ', section: Section.FAQ },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 ${
          isScrolled
            ? 'py-3.5 bg-[#fbfaf7]/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
            : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection(Section.HOME)}
            className="flex items-center gap-2 text-left focus:outline-none cursor-pointer"
          >
            <span className="font-bold text-base tracking-tight text-slate-900">
              STEIGER<span className="text-amber-600">.ONLINE</span>
            </span>
          </button>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <button
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className={`text-xs font-mono transition-colors cursor-pointer ${
                    isActive
                      ? 'text-amber-600 font-bold'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection(Section.CONTACT)}
              className="hidden sm:flex px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-mono text-xs transition-all items-center gap-1.5 active:scale-95 shadow-sm cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-black/5 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-white border-l border-slate-200 p-6 flex flex-col justify-between z-10 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="font-bold text-sm text-slate-900">
                  STEIGER<span className="text-amber-600">.ONLINE</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.section}
                    onClick={() => {
                      scrollToSection(link.section);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left text-sm py-2 font-mono transition-colors cursor-pointer ${
                      activeSection === link.section
                        ? 'text-amber-600 font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  scrollToSection(Section.CONTACT);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider text-center shadow-sm cursor-pointer"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
