import React from 'react';
import { Calendar } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  helperText, 
  fullWidth = true, 
  className = '', 
  type = 'text',
  ...props 
}) => {
  const isDate = type === 'date';

  return (
    <>
      <style>{`input[type="date"]::-webkit-calendar-picker-indicator{display:none;}\ninput[type="date"]::-webkit-inner-spin-button{display:none;}\ninput[type="date"]{appearance:textfield;-moz-appearance:textfield;-webkit-appearance:textfield;}`}</style>
      <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
      <label className="text-[13px] font-medium text-textPrimary">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          className={`
            w-full bg-white border border-gray-200 text-textPrimary text-[14px] 
            rounded-[6px] px-3 py-2.5 transition-colors
            placeholder:text-gray-400
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
            ${isDate ? 'pr-10' : ''} 
            ${className}
          `}
          {...props}
        />
        {isDate && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-textMuted">
            <Calendar size={16} />
          </div>
        )}
      </div>
      {helperText && (
        <p className="text-xs text-textMuted mt-0.5">{helperText}</p>
      )}
    </div>
    </>
  );
};