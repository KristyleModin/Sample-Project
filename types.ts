export interface CommunicationRecord {
  id: string;
  date: string;
  patientName: string;
  referralType: 'TU0' | 'TU1' | 'TU2' | 'TU3';
  status: 'Completed' | 'Pending' | 'Follow-up';
}

export interface SelectOption {
  value: string;
  label: string;
}
