import {
  Employee,
  HR_ATTENDANCE_DAILY_LOG_TYPE,
  HR_ATTENDANCE_SUMMARY_TYPE,
} from "../types/HrAttendance.type";

export const hrAttendanceMainData = [
  {
    id: 1,
    label: "Total Employee",
    value: 100,
  },
  {
    id: 2,
    label: "Total Leave Request",
    value: 10,
  },
  {
    id: 3,
    label: "On Leave Today",
    value: 90,
  },
  {
    id: 4,
    label: "On Half Day Today",
    value: 10,
  },
];
export const hrAttendanceChartData = {
  id: 1,
  early: 100,
  regular: 10,
  late: 90,
  absent: 10,
};

export const HR_ATTENDANCE_TABS = [
  { id: "dailylog", label: "Dailylog" },

  { id: "summary", label: "Summary" },
];

export const HR_ATTENDANCE_DAILY_LOG: HR_ATTENDANCE_DAILY_LOG_TYPE[] = [
  {
    id: "1",
    date: "2021-01-01",
    punchIn: "9:00 AM",
    punchOut: "5:00 PM",
    behavior: "Late",
    BreackTime: "1:00 PM",
    totelHours: "8:00",
    entry: "single",
    action: () => {},
  },
];
export const HR_ATTENDANCE_SUMMARY: HR_ATTENDANCE_SUMMARY_TYPE[] = [
  // This Month (July 2025)
  {
    id: "1",
    date: "2025-07-01",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
    },
    punchIn: "9:05 AM",
    punchOut: "5:10 PM",
    behavior: "Late",
    BreackTime: "1:00 PM",
    totelHours: "8:05",
    entry: "single",
    action: () => {},
  },
  {
    id: "2",
    date: "2025-07-10",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Jane Smith",
    },
    punchIn: "8:50 AM",
    punchOut: "5:00 PM",
    behavior: "On Time",
    BreackTime: "12:45 PM",
    totelHours: "8:10",
    entry: "single",
    action: () => {},
  },
  // Last Month (June 2025)
  {
    id: "3",
    date: "2025-06-05",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Robert Johnson",
    },
    punchIn: "9:15 AM",
    punchOut: "5:20 PM",
    behavior: "Late",
    BreackTime: "1:10 PM",
    totelHours: "7:55",
    entry: "single",
    action: () => {},
  },
  {
    id: "4",
    date: "2025-06-20",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Emily Davis",
    },
    punchIn: "8:45 AM",
    punchOut: "5:00 PM",
    behavior: "On Time",
    BreackTime: "1:00 PM",
    totelHours: "8:15",
    entry: "single",
    action: () => {},
  },
  // This Year (2025, not July or June)
  {
    id: "5",
    date: "2025-05-15",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Michael Brown",
    },
    punchIn: "9:30 AM",
    punchOut: "5:30 PM",
    behavior: "Late",
    BreackTime: "12:50 PM",
    totelHours: "7:50",
    entry: "single",
    action: () => {},
  },
  {
    id: "6",
    date: "2025-03-22",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Sophia Wilson",
    },
    punchIn: "9:00 AM",
    punchOut: "5:00 PM",
    behavior: "On Time",
    BreackTime: "1:15 PM",
    totelHours: "8:00",
    entry: "single",
    action: () => {},
  },
  // Last Year (2024)
  {
    id: "7",
    date: "2024-12-11",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "William Moore",
    },
    punchIn: "8:55 AM",
    punchOut: "5:05 PM",
    behavior: "On Time",
    BreackTime: "12:30 PM",
    totelHours: "8:10",
    entry: "single",
    action: () => {},
  },
  {
    id: "8",
    date: "2024-08-19",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Isabella Taylor",
    },
    punchIn: "9:10 AM",
    punchOut: "5:15 PM",
    behavior: "Late",
    BreackTime: "1:05 PM",
    totelHours: "7:55",
    entry: "single",
    action: () => {},
  },
  {
    id: "9",
    date: "2024-03-01",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "James Anderson",
    },
    punchIn: "8:40 AM",
    punchOut: "5:00 PM",
    behavior: "On Time",
    BreackTime: "12:55 PM",
    totelHours: "8:20",
    entry: "single",
    action: () => {},
  },
  {
    id: "10",
    date: "2024-01-20",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Mia Thomas",
    },
    punchIn: "9:20 AM",
    punchOut: "5:25 PM",
    behavior: "Late",
    BreackTime: "1:00 PM",
    totelHours: "7:50",
    entry: "single",
    action: () => {},
  },
];
export const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "3",
    name: "Mike Johnson",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "4",
    name: "Sarah Wilson",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "5",
    name: "David Brown",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "6",
    name: "Lisa Davis",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "7",
    name: "Tom Miller",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "8",
    name: "Amy Taylor",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "7",
    name: "Tom Miller",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "8",
    name: "Amy Taylor",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "7",
    name: "Tom Miller",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "8",
    name: "Amy Taylor",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "7",
    name: "Tom Miller",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "8",
    name: "Amy Taylor",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "7",
    name: "Tom Miller",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
  {
    id: "8",
    name: "Amy Taylor",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: false,
  },
];
