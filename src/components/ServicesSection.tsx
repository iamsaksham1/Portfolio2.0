import React from 'react';
import { FadeIn } from './FadeIn.tsx';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'Building responsive, production-quality web apps with React, TypeScript, Node/Express and SQL, from clean UI to solid APIs.',
  },
  {
    number: '02',
    title: 'Data Structures & Algorithms',
    description:
      'Strong problem-solving foundation in C, C++ and Python, with consistent LeetCode practice and system design study.',
  },
  {
    number: '03',
    title: 'DevOps & CI/CD',
    description:
      'Designing pipeline tooling and automation, like simulating multi-stage CI/CD runs with live status, logs and failure recovery.',
  },
  {
    number: '04',
    title: 'Hackathon Prototyping',
    description:
      'Turning ideas into working prototypes fast, with real-time features and hardware-software integration under tight deadlines.',
  },
  {
    number: '05',
    title: 'AI-Powered Apps',
    description:
      'Integrating AI into real products, from smart assistants to detection and analysis platforms.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={30} className="w-full text-center">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            What I Do
          </h2>
        </FadeIn>

        {/* 5 items vertical list */}
        <div className="flex flex-col">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={25}
              className={`flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 py-8 sm:py-10 md:py-12 ${
                index !== SERVICES.length - 1
                  ? 'border-b border-[#0C0C0C]/15'
                  : ''
              }`}
            >
              {/* Number on left */}
              <div
                className="font-black text-[#0C0C0C] leading-none select-none min-w-[120px] sm:min-w-[160px] md:min-w-[200px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </div>

              {/* Title + Description on right */}
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: 'clamp(1.15rem, 2.2vw, 2.1rem)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
