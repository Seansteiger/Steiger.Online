import React, { useState, useEffect } from 'react';
import { X, Timer, TrendingUp } from 'lucide-react';

interface AnnouncementBarProps {
    isVisible: boolean;
    onClose: () => void;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ isVisible, onClose }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-04-07T00:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] px-0 py-0 sm:px-4 sm:py-2">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-neon-cyan via-[#00f2ff] to-neon-cyan sm:rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-white/20 overflow-hidden">
                <div className="h-10 md:h-14 flex items-center justify-center sm:justify-between px-4 sm:px-6 relative">
                    
                    {/* Main Promotion Area - Hidden on Mobile */}
                    <div className="hidden sm:flex items-center gap-4 text-void">
                        <div className="bg-void/10 p-1.5 rounded-full hidden md:block">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                            <span className="font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70">Easter Promotion</span>
                            <div className="flex items-center gap-2">
                                <span className="font-black text-sm md:text-base tracking-tight leading-none">33% DISCOUNT</span>
                                <span className="text-[10px] md:text-xs font-semibold opacity-60 hidden lg:inline">— On projects above R2,000</span>
                            </div>
                        </div>
                    </div>

                    {/* Timer Area */}
                    <div className="flex items-center gap-4 sm:gap-6 bg-void/90 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-white/10 shadow-2xl scale-[0.85] sm:scale-100">
                        <div className="flex items-center gap-2">
                           <Timer className="w-3.5 h-3.5 text-neon-cyan opacity-80" />
                           <span className="text-[9px] font-black tracking-widest uppercase opacity-60 whitespace-nowrap">Promotion ends in</span>
                        </div>
                        
                        <div className="flex gap-3 sm:gap-4 font-black text-xs md:text-sm tabular-nums tracking-wider text-neon-cyan">
                            <div className="flex flex-col items-center">
                                <span className="leading-none">{String(timeLeft.days).padStart(2, '0')}d</span>
                            </div>
                            <span className="opacity-20">:</span>
                            <div className="flex flex-col items-center">
                                <span className="leading-none">{String(timeLeft.hours).padStart(2, '0')}h</span>
                            </div>
                            <span className="opacity-20">:</span>
                            <div className="flex flex-col items-center">
                                <span className="leading-none">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                            </div>
                            <span className="opacity-20">:</span>
                            <div className="flex flex-col items-center">
                                <span className="leading-none text-white animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={onClose}
                        className="absolute right-3 sm:right-6 text-void/40 hover:text-void transition-all hover:scale-110 ml-4"
                    >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;
