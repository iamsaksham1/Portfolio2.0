import React, { useRef, useState, useEffect } from 'react';
import { calculateScrollOffset, splitAndExpandMarquee } from '../utils/portfolioMath.ts';

export interface MarqueeProject {
  name: string;
  image: string;
  href: string;
}

export const marqueeProjects: MarqueeProject[] = [
  {
    name: 'KestrelCI',
    image: '/marquee/kestrelci.png',
    href: 'https://github.com/iamsaksham1/KestrelCI',
  },
  {
    name: 'GLITCH_GENESIS',
    image: '/marquee/glitch-genesis.png',
    href: 'https://glitch-genesis.vercel.app',
  },
  {
    name: 'Amazon Web Clone',
    image: '/marquee/amazon-clone.png',
    href: 'https://amazon-web-clone-xi.vercel.app',
  },
  {
    name: 'Portfolio Web',
    image: '/marquee/portfolio-web.png',
    href: 'https://saksham-s-portfolio-web.vercel.app',
  },
];

const MarqueeTile: React.FC<{ project: MarqueeProject }> = ({ project }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818] block group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
    >
      {hasError ? (
        <div className="w-full h-full bg-[#1a1a1a] flex flex-col items-center justify-center p-6 text-center select-none">
          <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base">
            {project.name}
          </span>
        </div>
      ) : (
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Small label over subtle bottom gradient from transparent to rgba(12,12,12,0.8) */}
      <div className="absolute inset-x-0 bottom-0 pt-10 pb-4 px-5 bg-gradient-to-t from-[rgba(12,12,12,0.8)] to-transparent flex items-end pointer-events-none">
        <span className="text-white font-medium uppercase tracking-wider text-xs sm:text-sm drop-shadow-md">
          {project.name}
        </span>
      </div>
    </a>
  );
};

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  // Split and expand rows: first half to row 1, second half to row 2, min 6 tiles, then tripled
  const { row1, row2 } = splitAndExpandMarquee(marqueeProjects, 6, 3);

  useEffect(() => {
    let animationFrameId: number;

    const updateOffset = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = calculateScrollOffset(
        window.scrollY,
        sectionTop,
        window.innerHeight,
        0.3
      );
      setOffset(calculatedOffset);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateOffset();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 flex-nowrap"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {row1.map((proj, i) => (
            <MarqueeTile key={`row1-${proj.name}-${i}`} project={proj} />
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 flex-nowrap"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2.map((proj, i) => (
            <MarqueeTile key={`row2-${proj.name}-${i}`} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};
