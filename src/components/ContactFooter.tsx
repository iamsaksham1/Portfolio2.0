import React from 'react';
import { Mail, Github, Linkedin, Youtube, Code2 } from 'lucide-react';
import { FadeIn } from './FadeIn.tsx';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  ariaLabel: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Email',
    href: 'mailto:iamsakshamrathore@gmail.com',
    icon: Mail,
    ariaLabel: 'Email Saksham Rathore',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/iamsaksham1',
    icon: Github,
    ariaLabel: 'Saksham Rathore on GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/saksham-rathore-435071393',
    icon: Linkedin,
    ariaLabel: 'Saksham Rathore on LinkedIn',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@SakshamsVerse',
    icon: Youtube,
    ariaLabel: 'Saksham Rathore on YouTube',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/im_saksham',
    icon: Code2,
    ariaLabel: 'Saksham Rathore on LeetCode',
  },
];

export const ContactFooter: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] flex flex-col items-center justify-center py-20 px-6 relative z-10 w-full text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 sm:gap-14">
        {/* Heading */}
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        {/* Row of Icon Links */}
        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={link.ariaLabel}
                  className="text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 p-2 rounded-full hover:bg-white/5"
                >
                  <Icon size={32} className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
              );
            })}
          </div>
        </FadeIn>

        {/* Copyright notice */}
        <FadeIn delay={0.3} y={15}>
          <p className="text-[#D7E2EA] font-light text-sm sm:text-base opacity-60 tracking-wider">
            © 2026 Saksham Rathore
          </p>
        </FadeIn>
      </div>
    </footer>
  );
};
