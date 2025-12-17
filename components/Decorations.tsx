import React from 'react';

export const DalitFlower: React.FC<{ className?: string; color?: string }> = ({ className, color = "fill-dalitRed" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path 
      d="M50 0 C60 30 70 30 100 50 C70 70 60 70 50 100 C40 70 30 70 0 50 C30 30 40 30 50 0 Z" 
      className={color}
    />
    <circle cx="50" cy="50" r="15" className="fill-dalitYellow" />
  </svg>
);

export const SunBurst: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    {Array.from({ length: 12 }).map((_, i) => (
      <rect 
        key={i}
        x="45" 
        y="0" 
        width="10" 
        height="100" 
        className="fill-dalitYellow"
        transform={`rotate(${i * 30} 50 50)`} 
      />
    ))}
    <circle cx="50" cy="50" r="25" className="fill-dalitRed" />
  </svg>
);

export const WavyLine: React.FC<{ className?: string; color?: string }> = ({ className, color = "stroke-dalitBlue" }) => (
  <svg viewBox="0 0 100 20" className={className} preserveAspectRatio="none">
    <path 
      d="M0 10 Q 25 20 50 10 T 100 10" 
      fill="none" 
      strokeWidth="4" 
      className={color}
    />
  </svg>
);

export const OrganicBlob: React.FC<{ className?: string; color?: string }> = ({ className, color = "fill-dalitBeige" }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path 
      d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.3C83.5,-26.9,87.6,-11.9,86.1,2.6C84.6,17.1,77.5,31.1,68.2,43.3C58.9,55.5,47.4,65.9,34.4,72.2C21.4,78.5,6.9,80.7,-7.1,79.1C-21.1,77.5,-34.6,72.1,-46.8,63.4C-59,54.7,-69.9,42.7,-76.3,29.1C-82.7,15.5,-84.6,0.3,-79.8,-12.3C-75,-24.9,-63.5,-34.9,-51.7,-42.6C-39.9,-50.3,-27.8,-55.7,-15.8,-58.6C-3.8,-61.5,8.1,-61.9,32.5,-83.3" 
      transform="translate(100 100)" 
      className={color}
    />
  </svg>
);