import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ 
  label, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[13px] font-medium text-textPrimary">
        {label}
      </label>
      <textarea
        className={`
          w-full bg-white border border-gray-200 text-textPrimary text-[14px] 
          rounded-[6px] px-3 py-2.5 min-h-[140px] resize-y
          placeholder:text-gray-400
          focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
          ${className}
        `}
        {...props}
      />
    </div>
  );
};