'use client';

import React from 'react';
import { Section } from '@/types';

interface DynamicBackgroundProps {
  activeSection: Section;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = () => {
  return (
    <div className="fixed inset-0 h-[100dvh] z-0 overflow-hidden pointer-events-none bg-[#fbfaf7]">
      {/* Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)] opacity-75"
      />

      {/* Warm Ambient Glow Orbs */}
      <div
        className="absolute -top-32 right-1/4 w-[650px] h-[650px] rounded-full blur-[140px] bg-amber-400/12 animate-pulse-glow"
      />
      <div
        className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] bg-sky-300/12 animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute -bottom-32 right-10 w-[700px] h-[700px] rounded-full blur-[160px] bg-amber-300/10 animate-pulse-glow"
        style={{ animationDelay: '4s' }}
      />

      {/* Top & bottom gentle gradient vignettes */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#fbfaf7]/80 via-transparent to-[#fbfaf7] opacity-80"
      />
    </div>
  );
};

export default DynamicBackground;
