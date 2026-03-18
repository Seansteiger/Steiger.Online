import React, { useState, useEffect } from 'react';
import { Sparkles, X, Timer } from 'lucide-react';

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
        // Target: Midnight at the end of Easter Monday (April 6), which is April 7, 2026, 00:00:00
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
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] border-b border-white/20 animate-pulse-slow">
            <div className="max-w-7xl mx-auto px-4 min-h-[48px] md:h-12 flex flex-col md:flex-row items-center justify-center relative py-2 md:py-0 gap-2 md:gap-8">
                <div className="flex items-center gap-2 text-void font-black text-[10px] md:text-sm tracking-[0.15em] uppercase drop-shadow-sm">
                    <Sparkles className="w-3 h-3 md:w-5 md:h-5 text-white animate-bounce" />
                    <span className="hidden lg:inline text-white">🔥 EASTER SALE IS ON:</span>
                    <span>33% OFF ON PROJECTS {'>'} R2,000</span>
                    <Sparkles className="w-3 h-3 md:w-5 md:h-5 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
                </div>
                
                <div className="flex items-center gap-3 bg-void/20 px-4 py-1 rounded-sm border border-white/30 backdrop-blur-lg shadow-2xl scale-110 md:scale-100">
                    <Timer className="w-4 h-4 text-white animate-pulse" />
                    <div className="flex gap-3 text-white font-black text-sm md:text-lg tabular-nums">
                        <div className="flex flex-col items-center">
                            <span className="leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className="text-[8px] opacity-70 tracking-tighter">DAYS</span>
                        </div>
                        <span className="opacity-50 text-xl leading-none">:</span>
                        <div className="flex flex-col items-center">
                            <span className="leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="text-[8px] opacity-70 tracking-tighter">HOURS</span>
                        </div>
                        <span className="opacity-50 text-xl leading-none">:</span>
                        <div className="flex flex-col items-center">
                            <span className="leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="text-[8px] opacity-70 tracking-tighter">MINS</span>
                        </div>
                        <span className="opacity-50 text-xl leading-none">:</span>
                        <div className="flex flex-col items-center">
                            <span className="leading-none text-neon-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="text-[8px] text-neon-cyan opacity-80 tracking-tighter">SECS</span>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={onClose}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all hover:scale-125 p-1"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBar;
