import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  style?: React.CSSProperties;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  style,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        style={style}
        className={`bg-[#1a1a1a] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      >
        <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base opacity-80">
          {fallbackTitle || alt}
        </span>
        <span className="text-xs text-[#D7E2EA]/40 mt-1 uppercase tracking-widest">
          Project Preview
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
};
