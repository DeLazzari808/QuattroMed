import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

export const Logo = ({ variant = 'full', theme = 'light', size = 'md', className = "" }: LogoProps) => {
  const iconSize = size === 'sm' ? 'w-10 h-10' : 'w-12 h-12';
  const textSize = size === 'sm' ? 'text-2xl' : 'text-[26px]';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/images/ICONE-C.png" 
        alt="QuatroMED Logo"
        className={`${iconSize} object-contain`}
      />
      
      {variant === 'full' && (
        <span 
          className={`${textSize} font-modelica font-bold tracking-tight ${theme === 'light' ? 'text-white' : 'text-[#003B46]'}`}
        >
          QuatroMed
        </span>
      )}
    </div>
  );
};

