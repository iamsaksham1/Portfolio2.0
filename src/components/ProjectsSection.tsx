import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn.tsx';
import { LiveProjectButton } from './LiveProjectButton.tsx';
import { ImageWithFallback } from './ImageWithFallback.tsx';
import { calculateCardScale } from '../utils/portfolioMath.ts';

interface Project {
  number: string;
  name: string;
  category: string;
  link: string;
  images: [string, string, string]; // [left-top, left-bottom, right-tall]
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'KestrelCI',
    category: 'DevOps / Full-Stack',
    link: 'https://github.com/iamsaksham1/KestrelCI',
    images: [
      '/projects/kestrelci-1.png',
      '/projects/kestrelci-2.png',
      '/projects/kestrelci-3.png',
    ],
  },
  {
    number: '02',
    name: 'GLITCH_GENESIS',
    category: 'Hackathon',
    link: 'https://glitch-genesis.vercel.app',
    images: [
      '/projects/glitch-1.png',
      '/projects/glitch-2.png',
      '/projects/glitch-3.png',
    ],
  },
  {
    number: '03',
    name: 'Amazon Web Clone',
    category: 'Frontend',
    link: 'https://amazon-web-clone-xi.vercel.app',
    images: [
      '/projects/amazon-1.png',
      '/projects/amazon-2.png',
      '/projects/amazon-3.png',
    ],
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  total: number;
}> = ({ project, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = calculateCardScale(index, total, 0.03);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[620px] flex items-start justify-center sticky"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative z-10"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="uppercase tracking-widest text-xs sm:text-sm text-[#D7E2EA]/70 font-light">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-xl sm:text-2xl md:text-3xl text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.link} />
        </div>

        {/* Bottom row: two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 items-stretch">
          {/* Left column (40% width / 4 cols): 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-lg"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <ImageWithFallback
                src={project.images[0]}
                alt={`${project.name} Screenshot 1`}
                fallbackTitle={project.name}
                className="w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-lg"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <ImageWithFallback
                src={project.images[1]}
                alt={`${project.name} Screenshot 2`}
                fallbackTitle={project.name}
                className="w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
              />
            </div>
          </div>

          {/* Right column (60% width / 6 cols): 1 tall image */}
          <div className="md:col-span-6 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] shadow-lg min-h-[300px] md:min-h-full flex">
            <ImageWithFallback
              src={project.images[2]}
              alt={`${project.name} Screenshot 3`}
              fallbackTitle={project.name}
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-32 px-4 sm:px-8 md:px-12 relative z-10 w-full"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24 text-center">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* Sticky cards stack */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};
