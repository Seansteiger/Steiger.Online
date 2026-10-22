'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Section } from '@/types';

interface FooterProps {
  scrollToSection: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 py-12 text-xs font-mono bg-[#fbfaf7] text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold tracking-tight text-slate-900 text-sm">
            STEIGER<span className="text-amber-600">.ONLINE</span>
          </span>
          <span className="mx-2 text-slate-300">•</span>
          <span>Benoni, Johannesburg, South Africa</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/27699751347"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-amber-600 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="mailto:neo@steigeronline.co.za"
            className="text-slate-600 hover:text-amber-600 transition-colors"
          >
            Email
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-slate-600 hover:text-amber-600 transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-600" />
          </button>
        </div>

        <p>© {currentYear} Steiger Online. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
