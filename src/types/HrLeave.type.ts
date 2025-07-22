//   HR_LEAVE_TABS

export interface HR_LEAVE_TABS_TYPE {
  label: string;
  id: string;
  onClick?: () => void;
}

// HR LEAVE STATUS CARDS DATA type

export interface HR_LEAVE_STATUS_CARDS_DATA_TYPE {
  id: number | string;
  label: string;
  value: number;
}

// HR LEAVE STATUS TABLE DATA type

export interface HR_LEAVE_STATUS_TABLE_DATA_TYPE {
  id: string;
  profile: {
    image: string;
    name: string;
    designation: string;
  };
  timeFrom: string;
  timeTo: string;
  date: string;
  leaveDuration: string;
  leaveType: string;
  attachments: string[];
  request: string;
  action: () => void;
}

// HR LEAVE  REQUEST  TABLE DATA type
export interface HR_LEAVE_REQUEST_TABLE_DATA_TYPE {
  id: string;
  profile: {
    image: string;
    name: string;
    designation: string;
  };
  timeFrom: string;
  timeTo: string;
  date: string;
  leaveDuration: string;
  leaveType: string;
  attachments: string[]; // Changed to array of file names or URLs
  status: string;
  request: string;
  action: () => void;
}

// HR LEAVE SUMMARY CARDS DATA type

export interface HR_LEAVE_SUMMARY_CARDS_DATA_TYPE {
  id: number | string;
  label: string;
  value: number;
}

// HR LEAVE SUMMARY TABLE DATA type

export interface HR_LEAVE_SUMMARY_TABLE_DATA_TYPE {
  id: string;
  timeFrom: string;
  timeTo: string;
  date: string;
  leaveDuration: string;
  leaveType: string;
  attachments: string[]; // Changed to array of file names or URLs
  status: string;
  report: string;
  action: () => void;
}

// HR LEAVE SUMMARY EMPLOYEE
export interface HR_LEAVE_SUMMARY_EMPLOYEES_TYPE {
  id: string;
  name: string;
  image: string;
  isActive: boolean;
}