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

