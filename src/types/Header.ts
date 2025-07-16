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
  
}

export interface HeaderProps {
  onClick?: () => void;
  onToggle: () => void;
}
