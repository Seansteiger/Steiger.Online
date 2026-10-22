'use client';

import React from 'react';
import { SERVICES } from '@/constants';
import { Globe, ShoppingBag, Layers, Cpu, Check } from 'lucide-react';
import { Section } from '@/types';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
  scrollToSection?: (section: Section) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingBag,
  Layers,
  Cpu,
};

const Services: React.FC<ServicesProps> = ({ onSelectService, scrollToSection }) => {
  const handleServiceClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    if (scrollToSection) {
      scrollToSection(Section.CONTACT);
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#fbfaf7]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest block mb-2 text-amber-600 font-bold">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Services Built To Help You Grow.
          </h2>
          <p className="text-sm mt-2 text-slate-600 max-w-xl">
            Everything you need for a strong online presence, delivered on time with no headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] hover:border-amber-400 hover:shadow-[0_15px_30px_-5px_rgba(217,119,6,0.12)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-amber-500/10 border border-amber-500/20 text-amber-600 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold mb-2 text-slate-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs mb-6 leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {service.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 text-slate-800 text-xs font-mono font-medium transition-all duration-200 cursor-pointer shadow-sm text-center"
                >
                  Choose Service
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
