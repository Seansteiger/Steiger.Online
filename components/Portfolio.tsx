import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? PROJECTS : PROJECTS.slice(0, 4);

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    // Clear cardsRef.current to ensure it only holds refs for visible projects
    cardsRef.current = [];

    // Initialize IntersectionObserver to track scroll position
    observerRef.current = new IntersectionObserver((entries) => {
      // Use width-based check for Mobile (Screen < 768px)
      // This ensures mobile behavior triggers even if the device falsely reports hover capability
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      // On Desktop (Not Mobile), we rely purely on CSS hover effects
      if (!isMobile) {
        if (activeId !== null) setActiveId(null);
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.getAttribute('data-id'));
        } else {
          // Optional: clear active ID if we want them to dim when leaving the center
          // For now, let's keep the logic that clears it to ensure only the center one is lit
          const targetId = entry.target.getAttribute('data-id');
          if (targetId) {
            setActiveId(prev => (prev === targetId ? null : prev));
          }
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: "-10% 0px -10% 0px"
    });

    // Observe only the currently visible projects
    cardsRef.current.forEach(el => {
      if (el) observerRef.current?.observe(el);
    });

    // Cleanup function to disconnect observer when component unmounts or dependencies change
    return () => observerRef.current?.disconnect();
  }, [visibleProjects]); // Re-run observer when list of visible projects changes

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
          {visibleProjects.map((project, index) => {
            const isActive = activeId === project.id;

            return (
              <div
                key={project.id}
                ref={el => cardsRef.current[index] = el}
                data-id={project.id}
                tabIndex={0}
                className={`group relative rounded-xl overflow-hidden bg-slate-900 border transition-all duration-500 focus:outline-none ${isActive
                  ? 'border-neon-cyan/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                  : 'border-white/5 hover:border-neon-cyan/50 focus-within:border-neon-cyan/50'
                  }`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full focus:outline-none">
                      <div className={`absolute inset-0 transition-colors duration-500 z-10 w-full h-full ${isActive
                        ? 'bg-slate-900/20'
                        : 'bg-slate-900/50 group-hover:bg-slate-900/20 group-focus-within:bg-slate-900/20'
                        }`}></div>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isActive
                          ? 'scale-110 grayscale-0'
                          : 'grayscale group-hover:scale-110 group-focus-within:scale-110 group-hover:grayscale-0 group-focus-within:grayscale-0'
                          }`}
                      />
                    </a>
                  ) : (
                    <>
                      <div className={`absolute inset-0 transition-colors duration-500 z-10 ${isActive
                        ? 'bg-slate-900/20'
                        : 'bg-slate-900/50 group-hover:bg-slate-900/20 group-focus-within:bg-slate-900/20'
                        }`}></div>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isActive
                          ? 'scale-110 grayscale-0'
                          : 'grayscale group-hover:scale-110 group-focus-within:scale-110 group-hover:grayscale-0 group-focus-within:grayscale-0'
                          }`}
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
                      className={`absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-neon-cyan text-void rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.6)] z-20 cursor-pointer hover:scale-110 focus:outline-none ${isActive
                        ? 'opacity-100 translate-y-[-50%]'
                        : 'opacity-0 translate-y-4 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-[-50%] group-focus-within:translate-y-[-50%]'
                        }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}

                  <h3 className={`text-2xl font-display font-bold mb-2 transition-colors ${isActive
                    ? 'text-neon-cyan'
                    : 'text-white group-hover:text-neon-cyan group-focus-within:text-neon-cyan'
                    }`}>
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
            );
          })}
        </div>

        <div className="mt-16 text-center">
          {PROJECTS.length > 4 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-neon-cyan font-bold font-display uppercase tracking-widest text-sm hover:text-white transition-colors border-b border-neon-cyan pb-1"
            >
              {isExpanded ? 'Show Less' : 'View Full Archive'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;