import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-premium hover:shadow-premium-hover',
    secondary: 'bg-white text-primary border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-soft',
    accent: 'bg-primary text-white border border-accent/30 hover:shadow-gold-glow transition-all duration-300',
    outline: 'bg-transparent text-primary border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  return (
    <button
      className={cn(
        'rounded-full flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <span className={cn('flex items-center gap-2', isLoading && 'opacity-0')}>
        {children}
      </span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-700 bg-white/10 rounded-full"></span>
    </button>
  );
};