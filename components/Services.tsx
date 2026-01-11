import React, { useState, useEffect, useRef } from 'react';
import { Globe, Layers, Smartphone, Cpu } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'Globe': <Globe className="w-8 h-8" />,
  'Layers': <Layers className="w-8 h-8" />,
  'Smartphone': <Smartphone className="w-8 h-8" />,
  'Cpu': <Cpu className="w-8 h-8" />,
};

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      // Check for mobile breakpoint (768px)
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      // On Desktop, do NOT use JS scroll activation (let CSS hover handle it)
      if (!isMobile) {
        if (activeId !== null) setActiveId(null);
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.getAttribute('data-id'));
        } else {
          const targetId = entry.target.getAttribute('data-id');
          if (targetId) {
            setActiveId(prev => (prev === targetId ? null : prev));
          }
        }
      });
    }, {
      threshold: 0.7,
      rootMargin: "0px 0px -100px 0px"
    });

    cardsRef.current.forEach(el => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            CORE <span className="text-neon-purple">CAPABILITIES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                ref={el => cardsRef.current[index] = el}
                data-id={service.id}
                className={`group relative p-8 glass-panel rounded-xl hover:-translate-y-2 transition-transform duration-300 border-t border-white/10 ${isActive ? '-translate-y-2' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent transition-opacity duration-500 rounded-xl ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-lg bg-void border flex items-center justify-center text-neon-purple mb-6 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.15)] ${isActive
                    ? 'scale-110 border-neon-purple/50'
                    : 'border-white/10 group-hover:scale-110 group-hover:border-neon-purple/50'
                    }`}>
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;