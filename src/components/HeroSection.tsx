import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { Magnet } from './Magnet.tsx';
import { ContactButton } from './ContactButton.tsx';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav
          aria-label="Main Navigation"
          className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full"
        >
          {['About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {item}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 mt-6 sm:mt-4 md:-mt-5 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9.8vw] sm:text-[10.5vw] md:text-[11.5vw] lg:text-[12.2vw]">
            Hi, i&apos;m saksham
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait in Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[340px] md:w-[420px] lg:w-[480px] top-[56%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full pointer-events-auto"
          >
            <img
              src="/portrait.png"
              alt="Saksham Rathore Portrait"
              className="w-full h-auto object-contain select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-5 sm:px-8 md:px-12 z-20 relative w-full gap-2">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a hardcore software developer building fast, reliable and unforgettable products
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex-shrink-0">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
