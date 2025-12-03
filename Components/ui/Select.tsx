import React from 'react';
import { SelectOption } from '../../types';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  helperText?: string;
  fullWidth?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  helperText,
  fullWidth = true,
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
      <label className="text-[13px] font-medium text-textPrimary">{label}</label>
      <div>
        <select
          className={`
            w-full bg-white border border-gray-200 text-textPrimary text-[14px]
            rounded-[6px] px-3 py-2.5 transition-colors
            placeholder:text-gray-400
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
            ${className}
          `}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
          {children}
        </select>
      </div>
      {helperText && <p className="text-xs text-textMuted mt-0.5">{helperText}</p>}
    </div>
  );
};