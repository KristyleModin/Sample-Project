import React from 'react';
import { CommunicationRecord } from '../types';
import { StatusBadge } from './StatusBadge';

const MOCK_DATA: CommunicationRecord[] = [
  { id: '1', date: '2024-05-12', patientName: 'Alex Johnson', referralType: 'TU1', status: 'Completed' },
  { id: '2', date: '2024-05-14', patientName: 'Maria Garcia', referralType: 'TU2', status: 'Pending' },
  { id: '3', date: '2024-05-15', patientName: 'Sam Smith', referralType: 'TU0', status: 'Follow-up' },
];

export const CommunicationTable: React.FC = () => {
  return (
    <div className="mt-8 bg-cardBg rounded-lg shadow-subtle border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-[16px] font-semibold text-textPrimary">Recent Records</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMuted uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMuted uppercase tracking-wider">
                Patient
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMuted uppercase tracking-wider">
                Referral
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textMuted uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {MOCK_DATA.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-textPrimary font-medium">
                  {record.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-textMuted">
                  {record.patientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-textMuted">
                  {record.referralType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <StatusBadge status={record.status} />
                </td>
              </tr>
            ))}
            {/* Empty State Example Row */}
            <tr className="bg-gray-50/50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 italic">
                --
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 italic">
                --
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 italic">
                --
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 italic">
                --
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};