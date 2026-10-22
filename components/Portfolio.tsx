'use client';

import React from 'react';
import { PROJECTS } from '@/constants';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest block mb-2 text-amber-600 font-bold">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Recent Websites We Built.
          </h2>
          <p className="text-sm mt-2 text-slate-600 max-w-xl">
            Real South African businesses and organisations we have designed and launched.
          </p>
        </div>

        {/* 6-Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] hover:border-amber-400 hover:shadow-[0_18px_35px_-5px_rgba(217,119,6,0.14)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview displaying home page and top logo clearly */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200/70">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 border border-slate-200 text-slate-800 text-[10px] font-mono uppercase tracking-wider shadow-sm backdrop-blur-sm">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 text-[11px] font-mono font-bold shadow-sm">
                    {project.metric}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1.5 text-slate-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs mb-4 leading-relaxed text-slate-600">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 text-slate-800 text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono block text-center py-2 text-slate-400">
                    Private Client Site
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
