import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true);  // Show on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { id: Section.HOME, label: 'Home' },
    { id: Section.SERVICES, label: 'Capabilities' },
    { id: Section.PRICING, label: 'Pricing' },
    { id: Section.PORTFOLIO, label: 'Showcase' },
    { id: Section.CONTACT, label: 'Initiate' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection(Section.HOME)}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-neon-cyan blur-lg opacity-20 group-hover:opacity-60 transition-opacity"></div>
            <Code2 className="w-8 h-8 text-neon-cyan relative z-10" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            Steiger.Online
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative group ${activeSection === link.id ? 'text-neon-cyan' : 'text-slate-400 hover:text-white'
                }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-neon-cyan transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection(Section.CONTACT)}
            className="ml-4 px-6 py-2 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 rounded-sm font-display font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-void/95 backdrop-blur-xl z-30 transform transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              scrollToSection(link.id);
              setMobileMenuOpen(false);
            }}
            className="text-2xl font-display font-bold text-white hover:text-neon-cyan transition-colors"
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;