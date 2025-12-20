import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-void/30">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-cyan/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              LATEST <span className="text-neon-cyan">DEPLOYMENTS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent"></div>
          </div>
          <p className="text-slate-400 max-w-md text-right hidden md:block">
            A curated selection of our most ambitious projects, engineered for impact and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-slate-900 border border-white/5 hover:border-neon-cyan/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/20 transition-colors z-10 w-full h-full"></div>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                    />
                  </a>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                    />
                  </>
                )}

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/80 backdrop-blur text-neon-cyan text-xs font-bold uppercase tracking-wider border border-neon-cyan/20 pointer-events-none">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-neon-cyan text-void rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-[-50%] transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.6)] z-20 cursor-pointer hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}

                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-neon-cyan font-bold font-display uppercase tracking-widest text-sm hover:text-white transition-colors border-b border-neon-cyan pb-1">
            View Full Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;