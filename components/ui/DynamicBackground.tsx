
import React from 'react';
import { Section } from '../../types';

interface DynamicBackgroundProps {
  activeSection: Section;
}

const backgrounds: Record<Section, string> = {
  // Abstract / Circuitry for Home
  [Section.HOME]: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  // Neon Servers for Services
  [Section.SERVICES]: 'https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=2070&auto=format&fit=crop',
  // Code screens for Portfolio
  [Section.PORTFOLIO]: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  // Neon Keyboard for Contact
  [Section.CONTACT]: 'https://images.unsplash.com/photo-1587829741301-dc798b91a45e?q=80&w=2070&auto=format&fit=crop',
};

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ activeSection }) => {
  return (
    <div className="fixed inset-0 h-[100dvh] z-0 overflow-hidden bg-void">
      {/* Preload and render all backgrounds to allow cross-fading */}
      {Object.entries(backgrounds).map(([section, url]) => (
        <div
          key={section}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
          style={{
            opacity: activeSection === section ? 1 : 0,
            zIndex: activeSection === section ? 1 : 0,
          }}
        >
          {/* Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{ backgroundImage: `url(${url})` }}
          />

          {/* Overlay Layer - Adjusted opacity to make backgrounds slightly more visible */}
          <div className={`absolute inset-0 bg-void/65 ${section === Section.HOME ? 'bg-void/70' : 'bg-void/55'}`} />

          {/* Scanline texture overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>
        </div>
      ))}

      {/* Global Gradient Overlay for consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void z-10 pointer-events-none opacity-80"></div>
    </div>
  );
};

export default DynamicBackground;
