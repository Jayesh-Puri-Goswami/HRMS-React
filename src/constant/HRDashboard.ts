import {  LeaveDataType } from "../types/HRDashboard";

export const HRData = {
  name: "Nidhi Patidar",
  shiftTime: "09:00 am to 06:30 pm",
  punchInTime: "09:00 am",
  punchOutTime: "06:30 pm",
  breakTime: "01:00 pm",
  totalRating: 20,
  profileImage: "/images/user/user-39.jpg",
};

export const timeLogData = {
  today: {
    scheduled: "09:30",
    worked: "09:40",
    break: "01:15",
    balance: "01:01",
  },
  thisMonth: {
    totalScheduled: "185 hrs",
    workedTime: 85,
    overTime: 60,
  },
};

export const leaveData = {
  totalEmoloyee: 100,
  attendance: 90, // Today's Present employee
  absent: 10, // Today's Absent employee
  leave: 5, // Today's Leave employee
  halfDay: 2, // Today's Half Day employee
};

export const leaveChartData: LeaveDataType[] = [
  { id: "1", type: "Sick Leave", count: 45, color: "#3B82F6" },
  { id: "2", type: "Annual Leave", count: 38, color: "#10B981" },
  { id: "3", type: "Personal Leave", count: 25, color: "#F59E0B" },
  { id: "4", type: "Emergency Leave", count: 20, color: "#EF4444" },
];

export const absents = [
  {
    month: "Monday",
    count: 2,
    color: "#8B5CF6",
  },
  {
    month: "Tuesday",
    count: 1,
    color: "#10B981",
  },
  {
    month: "Wednesday",
    count: 5,
    color: "#1F2937",
  },
  {
    month: "Thursday",
    count: 2,
    color: "#3B82F6",
  },
  {
    month: "Friday",
    count: 3,
    color: "#3B82F6",
  },
  {
    month: "Saturday",
    count: 4,
    color: "#10B981",
  },
];

export const announcements = [
  {
    id: "1",
    title: "Remote Work Policy Update",
    company: "Carnia Softlabs",
    location: "All Offices",
    date: "01-06-2024",
    logo: "P",
    logoColor: "#6366F1",
  },
  {
    id: "2",
    title: "Mandatory Cybersecurity Training",
    company: "Carnia Softlabs",
    location: "Online Portal",
    date: "03-06-2024",
    logo: "T",
    logoColor: "#F59E42",
  },
  {
    id: "3",
    title: "Annual Company Townhall",
    company: "Carnia Softlabs",
    location: "Main Auditorium",
    date: "10-06-2024",
    logo: "E",
    logoColor: "#10B981",
  },
  {
    id: "4",
    title: "New Health Insurance Benefits",
    company: "Carnia Softlabs",
    location: "HR Portal",
    date: "15-06-2024",
    logo: "B",
    logoColor: "#EF4444",
  },
  {
    id: "5",
    title: "Upcoming Public Holiday: Independence Day",
    company: "Carnia Softlabs",
    location: "All Offices",
    date: "15-08-2024",
    logo: "H",
    logoColor: "#3B82F6",
  },
];

export const DEFAULT_CHART_COLORS = [
  "#aec7ed",
  "#94e9b8",
  "#92bfff",
  "#111111",
  "#8B5CF6",
  "#EC4899",
];

export const LOADING_SKELETON_CONFIG = {
  baseDelay: 0.1,
  staggerDelay: 0.05,
  animationDuration: 1.5,
};
