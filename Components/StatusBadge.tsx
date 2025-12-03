import React from 'react';

interface StatusBadgeProps {
  status: 'Completed' | 'Pending' | 'Follow-up';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    Completed: 'bg-green-100 text-green-700 ring-green-600/20',
    Pending: 'bg-amber-100 text-amber-700 ring-amber-600/20',
    'Follow-up': 'bg-blue-100 text-blue-700 ring-blue-600/20',
  };

  const dotColor = {
    Completed: 'bg-green-500',
    Pending: 'bg-amber-500',
    'Follow-up': 'bg-blue-500',
  };

  return (
    <span className={`inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${styles[status]}`}>
      <svg className={`h-1.5 w-1.5 ${dotColor[status]}`} viewBox="0 0 6 6" aria-hidden="true">
        <circle cx={3} cy={3} r={3} />
      </svg>
      {status}
    </span>
  );
};