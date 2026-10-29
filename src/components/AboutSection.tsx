import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { AnimatedText } from './AnimatedText.tsx';
import { ContactButton } from './ContactButton.tsx';

export const AboutSection: React.FC = () => {
  const bioText =
    "I'm a B.Tech CSE (AI) student at GL Bajaj Institute of Technology and Management, graduating in 2029. I code in C, C++ and Python, build full-stack projects, grind DSA, and ship at hackathons. I'm aiming for software engineering roles at top-tier tech companies. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]"
    >
      {/* Decorative 3D images in the corners */}
      {/* Top-left (moon) */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Moon Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right (lego) */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Lego Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] select-none drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] select-none drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D Geometry"
            className="w-[130px] sm:w-[170px] md:w-[220px] select-none drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap heading / text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph */}
        <div className="max-w-[560px] w-full px-4">
          <AnimatedText
            text={bioText}
            className="text-center font-medium leading-relaxed"
          />
        </div>

        {/* Gap text block / button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
