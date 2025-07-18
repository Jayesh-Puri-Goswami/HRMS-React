export interface PausePeriod {
  pauseTime: string;
  resumeTime?: string;
}

export interface CheckInData {
  startTime: Date;
  totalTime: number;
  isActive: boolean;
  isPaused: boolean;
  employeeId?: string;
  totalHours?: string;
  leaveStatus?: string;
  totalPausedMinutes?: number;
  lunchMinutes?: number;
  breakMinutes?: number;
  shiftLunchTime : number;
  shiftBreakTime : number;
  status : string;
  pauses?: PausePeriod[];
}

export interface HeaderProps {
  onClick?: () => void;
  onToggle: () => void;
}
