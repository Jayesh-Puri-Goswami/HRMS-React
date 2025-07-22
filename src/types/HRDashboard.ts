import { ApexOptions } from "apexcharts";
import { HR_EMPLOYEE_CARDS_TYPE } from "./HrEmployee.type";

export interface LeaveDataType {
  id: string;
  type: string;
  count: number;
  color: string;
}

export interface AbsentData {
  month: string
  count: number
  color: string
}

export interface Announcement {
  id: string
  title: string
  company: string
  location: string
  date: string
  logo: string
  logoColor: string
}

export interface HRDashboardData {
  leaves: LeaveDataType[]
  absents: AbsentData[]
  announcements: Announcement[]
  employees: HR_EMPLOYEE_CARDS_TYPE[]
}


export interface HRDashboardProps {
data?: HRDashboardData
isLoading?: boolean
className?: string
showLeaves?: boolean
showAbsents?: boolean
showAnnouncements?: boolean
showEmployees?: boolean
maxEmployees?: number
maxAnnouncements?: number
onEmployeeClick?: (employee: HR_EMPLOYEE_CARDS_TYPE) => void
onAnnouncementClick?: (announcement: Announcement) => void
}


export interface DonutChartOptions extends ApexOptions {
chart: {
  type: "donut"
  height: number
  animations: {
    enabled: boolean
    easing: string
    speed: number
  }
}
}

export interface BarChartOptions extends ApexOptions {
chart: {
  type: "bar"
  height: number
  toolbar: {
    show: boolean
  }
  animations: {
    enabled: boolean
    easing: string
    speed: number
  }
}
}

