import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-[6px]";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accentHover focus:ring-accent shadow-sm",
    ghost: "text-textMuted hover:text-textPrimary hover:bg-gray-100 focus:ring-gray-200",
    outline: "border border-gray-300 text-textPrimary hover:bg-gray-50 focus:ring-gray-200 bg-white"
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm" // Approx 40px height as requested
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2 h-4 w-4 flex items-center">{icon}</span>}
      {children}
    </button>
  );
};