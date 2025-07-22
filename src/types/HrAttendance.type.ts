export interface HR_ATTENDANCE_MAIN_DATA {
  totelEmployee: number;
  totelLeaveRequest: number;
  onLeaveToday: number;
  onHalfDayToday: number;
}

export interface HR_ATTENDANCE_TABS {
  label: string;
  id?: string;
  onClick?: () => void;
}

export interface AttendanceRatingItem {
  label: string
  value: number
  color: string
}
export interface AttandanceProgressProps {
  totalRating?: number
  items?: AttendanceRatingItem[]
  className?: string
}
export interface HR_ATTENDANCE_TABS_PROPS {
  actionButtons: HR_ATTENDANCE_TABS_PROPS[];
  currentTab: string;
}

export interface HR_ATTENDANCE_DAILY_LOG_TYPE {
  id: string;
  date: string;
  punchIn: string;
  punchOut: string;
  behavior: string;
  BreackTime: string;
  totelHours: string;
  entry: string;
  action: () => void;
}
export interface HR_ATTENDANCE_SUMMARY_TYPE {
  id: string;
  date: string;
  profile: {
    image: string;
    name: string;
  };
  punchIn: string;
  punchOut: string;
  behavior: string;
  BreackTime: string;
  totelHours: string;
  entry: string;
  action: () => void;
  filterDate?: "last-month" | "this-year" | "last-year";
}
export interface Employee {
  id: string
  name: string
  image?: string
  isActive?: boolean
}


export interface HR_ATTENDANCE_TABLE_TYPE {
  id?: string;
  date: string;
  punchIn: string;
  punchOut: string;
  behavior: string;
  BreackTime: string;
  totelHours: string;
  entry: string;
  action: () => void;
}

export interface AttendanceRecord {
  [x: string]: any;
  _id: string;
  employeeId: {
    bankDetails: {
      bankName: string | null;
      accounNumber: number;
      ifscCode: string | null;
      accountHolderName: string | null;
    };
    _id: string;
    name: string;
    org: string;
    email: string;
    profile_image: string;
    department: string;
    otherDepartmentName: string | null;
    designation: string;
    otherDesignationName: string | null;
    role: string;
    isManagerAsTeamLead: boolean;
    manager: string;
    teamLead: string | null;
    dob: string;
    gender: string;
    phone: string;
    address: string;
    joinDate: string;
    addedBy: string;
    graduation: string;
    shifts: string;
    employementType: string;
    payrollEnable: boolean;
    salaryStatus: boolean;
    aadhaarCard: string | null;
    panCard: string | null;
    voterId: string | null;
    photograph: string | null;
    addressProof: string | null;
    otherDocument: string | null;
    recentMarksheet: string | null;
    totalSalary: number;
    basicWage: number;
    HRA: number;
    conveyanceAllowance: number;
    medicalAllowance: number;
    da: number;
    otherAllowance: number;
    tds: number;
    professionalTax: number;
    netSalary: number;
    active: boolean;
    lastLogin: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  employeeName: string;
  date: string;
  checkInTime: string;
  totalHours: string;
  totalMinutes: number;
  leaveStatus: string;
  totalPausedMinutes: number;
  isPaused: boolean;
  lunchMinutes: number;
  breakMinutes: number;
  shiftId: {
    _id: string;
    name: string;
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    breakTime: number;
    lunchTime: number;
    totalWorkingTime: number;
    totalWorkingTimeHHMM: string;
    totalWorkingTimeWithoutBreaks: number;
    totalWorkingTimeWithoutBreaksHHMM: string;
    startTimeFormatted: string;
    endTimeFormatted: string;
    id: string;
  };
  shiftStartTime: string;
  shiftEndTime: string;
  shiftLunchTime: number;
  shiftBreakTime: number;
  status: string;
  pauses: unknown[]; // You might want to define a type for pauses if it has a structure
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ApiResponse {
  attendanceRecords: AttendanceRecord[];
  page: number;
  totalCount: number;
}

