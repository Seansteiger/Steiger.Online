import React, { useRef, useState, useEffect } from 'react';
import { Check, Globe, ShoppingBag, Rocket, Server, Smartphone } from 'lucide-react';

const PRICING_TIERS = [
    {
        id: 'landing',
        name: 'Landing Page',
        icon: Globe,
        description: 'Perfect for campaigns, personal profiles, or simple product launches.',
        devPrice: 'R1,500 – R3,500',
        hostPrice: 'R149',
        features: [
            'Single Scrolling Page',
            'Contact Form Integration',
            'WhatsApp Chat Button',
            'Basic SEO (Metadata)',
            'Fast Loading Speed',
            'Mobile Responsive'
        ]
    },
    {
        id: 'business',
        name: 'Standard Business',
        icon: Server,
        description: 'The digital brochure for your business. Establish credibility and showcase services.',
        devPrice: 'R3,500 – R8,500',
        hostPrice: 'R299',
        features: [
            '5–10 Custom Pages',
            'CMS Integration (WordPress)',
            'Google Maps & Social Media',
            'Standard SEO Setup',
            'Blog / News Section',
            'Analytics Integration'
        ]
    },
    {
        id: 'ecommerce-small',
        name: 'E-Commerce (Start)',
        icon: ShoppingBag,
        description: 'Start selling online with a robust, easy-to-manage store.',
        devPrice: 'R8,000 – R15,000',
        hostPrice: 'R499',
        features: [
            'Up to 50 Products',
            'Payment Gateway (PayFast)',
            'Shopping Cart & Checkout',
            'Basic Inventory Management',
            'Admin Panel Access',
            'Product Search & Filter'
        ]
    },
    {
        id: 'ecommerce-adv',
        name: 'E-Commerce (Pro)',
        icon: Rocket,
        description: 'Scale your operations with advanced features and automation.',
        devPrice: 'R20,000 – R60,000+',
        hostPrice: 'R699+',
        features: [
            'Unlimited Products',
            'Advanced Filtering & Search',
            'User Dashboards & Login',
            'Accounting Integration',
            'Advanced SEO (Rich Snippets)',
            'Abandoned Cart Recovery'
        ]
    },
    {
        id: 'custom',
        name: 'Custom Web App',
        icon: Smartphone,
        description: 'Bespoke solutions for complex business logic and interactions.',
        devPrice: 'R25,000 – R100,000+',
        hostPrice: 'R999+',
        features: [
            'Custom Backend (DB/Auth)',
            'Complex User Logic',
            'Real-time Data Updates',
            'Third-party API Integrations',
            'Admin Dashboards',
            'Scalable Infrastructure'
        ]
    }
];

interface PricingProps {
    onSelectPlan: (plan: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
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
            threshold: 0.6,
            rootMargin: "0px 0px -100px 0px"
        });

        cardsRef.current.forEach(el => {
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section id="pricing" className="py-24 relative bg-void/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        TRANSPARENT <span className="text-neon-cyan">PRICING</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent"></div>
                    <p className="text-slate-400 mt-4 max-w-2xl">
                        Let's help you get your site live. Tell us your vision and let our team of developers bring it to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRICING_TIERS.map((tier, index) => {
                        const isActive = activeId === tier.id;
                        const isCustom = tier.id === 'custom';

                        return (
                            <div
                                key={tier.id}
                                ref={el => cardsRef.current[index] = el}
                                data-id={tier.id}
                                className={`group relative p-8 rounded-xl border transition-all duration-500 overflow-hidden ${isCustom ? 'md:col-span-2 lg:col-span-1' : ''
                                    } ${isActive
                                        ? 'border-neon-cyan/50 bg-slate-900/40 shadow-[0_0_30px_rgba(6,182,212,0.1)] -translate-y-2'
                                        : 'border-white/5 bg-slate-900/20 hover:border-neon-cyan/30 hover:-translate-y-2'
                                    }`}
                            >
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    }`}></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-3 rounded-lg bg-void border transition-colors duration-300 ${isActive ? 'border-neon-cyan text-neon-cyan' : 'border-white/10 text-slate-400 group-hover:border-neon-cyan/50 group-hover:text-neon-cyan'
                                            }`}>
                                            <tier.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-display text-white">{tier.name}</h3>
                                            <p className="text-xs text-slate-400 mt-1">{tier.description}</p>
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="my-6 space-y-3 pb-6 border-b border-white/10">
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-slate-400 text-sm">Development</span>
                                            <span className={`font-bold text-lg ${isActive ? 'text-neon-cyan' : 'text-white'}`}>
                                                {tier.devPrice}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-slate-400 text-sm">Hosting & Support</span>
                                            <span className="text-white font-medium">
                                                {tier.hostPrice} <span className="text-slate-500 text-xs">/mo</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3 flex-grow">
                                        {tier.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm">
                                                <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isActive ? 'text-neon-cyan' : 'text-slate-600 group-hover:text-neon-cyan'
                                                    }`} />
                                                <span className="text-slate-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-8 pt-6 border-t border-white/5">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onSelectPlan(tier.name);
                                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className={`block w-full py-3 text-center rounded text-sm font-bold uppercase tracking-widest transition-all duration-300 ${isActive
                                                ? 'bg-neon-cyan text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                                : 'bg-white/5 text-white hover:bg-neon-cyan hover:text-black'
                                                }`}
                                        >
                                            Select Plan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
