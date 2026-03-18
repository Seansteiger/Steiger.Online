import React from 'react';
import { Sparkles, X } from 'lucide-react';

interface AnnouncementBarProps {
    isVisible: boolean;
    onClose: () => void;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-neon-purple/90 via-neon-cyan/90 to-neon-purple/90 backdrop-blur-md animate-pulse-slow">
            <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-center relative">
                <div className="flex items-center gap-2 text-void font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                    <span>🐣 Easter Sale: 33% Off on all projects above R2,000!</span>
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                
                <button 
                    onClick={onClose}
                    className="absolute right-4 text-void/60 hover:text-void transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
            {/* Bottom Glow Line */}
            <div className="h-[1px] w-full bg-white/20"></div>
        </div>
    );
};

export default AnnouncementBar;
