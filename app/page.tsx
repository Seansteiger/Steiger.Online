'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MouseFollower from '@/components/ui/MouseFollower';
import DynamicBackground from '@/components/ui/DynamicBackground';
import { Section } from '@/types';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [selectedPlan, setSelectedPlan] = useState<string>('Business Website');

  useEffect(() => {
    const sections = [
      Section.HOME,
      Section.PORTFOLIO,
      Section.SERVICES,
      Section.PRICING,
      Section.PROCESS,
      Section.FAQ,
      Section.CONTACT,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    scrollToSection(Section.CONTACT);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#fbfaf7] text-slate-900 selection:bg-amber-400/30 selection:text-slate-900">
      {/* Signature Reactive Effects */}
      <MouseFollower />
      <DynamicBackground activeSection={activeSection} />

      {/* Clean Glass Navbar */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Flow: Hero directly into Portfolio */}
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <Portfolio />
        <Services onSelectService={handleSelectPlan} scrollToSection={scrollToSection} />
        <Pricing onSelectPlan={handleSelectPlan} scrollToSection={scrollToSection} />
        <Process />
        <FAQ />
        <Contact selectedPlan={selectedPlan} />
      </main>

      {/* Clean Minimal Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
