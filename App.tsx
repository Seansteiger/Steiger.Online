import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import MouseFollower from './components/ui/MouseFollower';
import DynamicBackground from './components/ui/DynamicBackground';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  // Scroll Spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Offset triggers change slightly before the section hits the top of the screen
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;
      
      const sections = [
        { id: Section.HOME, element: document.getElementById(Section.HOME) },
        { id: Section.SERVICES, element: document.getElementById(Section.SERVICES) },
        { id: Section.PORTFOLIO, element: document.getElementById(Section.PORTFOLIO) },
        { id: Section.CONTACT, element: document.getElementById(Section.CONTACT) },
      ];

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // We don't manually set activeSection here because the scroll listener will pick it up
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <MouseFollower />
      <DynamicBackground activeSection={activeSection} />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <AIAssistant />
    </div>
  );
};

export default App;