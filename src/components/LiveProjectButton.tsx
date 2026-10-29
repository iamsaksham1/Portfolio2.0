import React from 'react';

interface LiveProjectButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  className = '',
  label = 'Live Project',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base px-8 py-3 sm:px-10 sm:py-3.5 transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-[1.02] active:scale-[0.98] select-none ${className}`}
    >
      {label}
    </a>
  );
};
