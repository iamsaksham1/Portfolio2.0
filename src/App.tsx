import React from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { MarqueeSection } from './components/MarqueeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ContactFooter } from './components/ContactFooter.tsx';

export default function App() {
  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen w-full relative selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactFooter />
    </div>
  );
}
