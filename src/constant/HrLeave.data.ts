import {
  HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
  HR_LEAVE_STATUS_CARDS_DATA_TYPE,
  HR_LEAVE_STATUS_TABLE_DATA_TYPE,
  HR_LEAVE_SUMMARY_CARDS_DATA_TYPE,
  HR_LEAVE_SUMMARY_EMPLOYEES_TYPE,
  HR_LEAVE_SUMMARY_TABLE_DATA_TYPE,
  HR_LEAVE_TABS_TYPE,
} from "../types/HrLeave.type";

// HR_LEAVE_TABS  Data

export const HR_LEAVE_TABS: HR_LEAVE_TABS_TYPE[] = [
  { id: "leave-status", label: "Leave Status" },

  { id: "leave-request", label: "Leave Request" },

  { id: "leave-summary", label: "Leave Summary" },
];

// HR LEAVE STATUS CARDS DATA

export const HR_LEAVE_STATUS_CARDS_DATA: HR_LEAVE_STATUS_CARDS_DATA_TYPE[] = [
  {
    id: 1,
    label: "Employee on Leave",
    value: 4,
  },
  {
    id: 2,
    label: "on Leave single day",
    value: 2,
  },
  {
    id: 3,
    label: "on Leave half day",
    value: 1,
  },
  {
    id: 4,
    label: "on Leave multiple day",
    value: 1,
  },
];

// HR LEAVE STATUS TABLE DATA

export const HR_LEAVE_STATUS_TABLE_DATA: HR_LEAVE_STATUS_TABLE_DATA_TYPE[] = [
  {
    id: "1",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      designation: "Software Engineer",
    },
    timeFrom: "9:00 AM",
    timeTo: "5:00 PM",
    date: "2025-01-01",
    leaveDuration: "1 day",
    leaveType: "Leave",
    attachments: ["https://via.placeholder.com/150"],
    request: "2025-01-01",
    action: () => {},
  },
  {
    id: "2",
    profile: {
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Jane Doe",
      designation: "Software Engineer",
    },
    timeFrom: "9:00 AM",
    timeTo: "5:00 PM",
    date: "2025-01-01",
    leaveDuration: "1 day",
    leaveType: "Leave",
    attachments: ["https://via.placeholder.com/150"],
    request: "2025-01-01",
    action: () => {},
  },
  {
    id: "3",
    profile: {
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Emily Smith",
      designation: "Product Manager",
    },
    timeFrom: "10:00 AM",
    timeTo: "4:00 PM",
    date: "2025-01-02",
    leaveDuration: "0.5 day",
    leaveType: "Sick Leave",
    attachments: ["https://via.placeholder.com/150"],
    request: "2025-01-01",
    action: () => {},
  },
  {
    id: "4",
    profile: {
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Michael Johnson",
      designation: "UX Designer",
    },
    timeFrom: "1:00 PM",
    timeTo: "5:00 PM",
    date: "2025-01-03",
    leaveDuration: "0.5 day",
    leaveType: "Casual Leave",
    attachments: ["https://via.placeholder.com/150"],
    request: "2025-01-02",
    action: () => {},
  },
  {
    id: "5",
    profile: {
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Sarah Williams",
      designation: "QA Engineer",
    },
    timeFrom: "9:00 AM",
    timeTo: "5:00 PM",
    date: "2025-01-04",
    leaveDuration: "1 day",
    leaveType: "Annual Leave",
    attachments: ["https://via.placeholder.com/150"],
    request: "2025-01-03",
    action: () => {},
  },
  {
    id: "6",
    profile: {
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "David Brown",
      designation: "Frontend Developer",
    },
    timeFrom: "2:00 PM",
    timeTo: "6:00 PM",
    date: "2025-01-05",
    leaveDuration: "0.5 day",
    leaveType: "Sick Leave",
    attachments: ["https://via.placeholder.com/150"],
    request: "2025-01-04",
    action: () => {},
  },
  {
    id: "7",
    profile: {
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      name: "Olivia Davis",
      designation: "Backend Developer",
    },
    timeFrom: "9:00 AM",
    timeTo: "12:00 PM",
    date: "2025-01-06",
    leaveDuration: "0.5 day",
    leaveType: "Emergency Leave",
    attachments: ["https://via.placeholder.com/150"],
    request: "2025-01-05",
    action: () => {},
  },
  {
    id: "8",
    profile: {
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      name: "James Miller",
      designation: "DevOps Engineer",
    },
    timeFrom: "9:00 AM",
    timeTo: "5:00 PM",
    date: "2025-01-07",
    leaveDuration: "1 day",
    leaveType: "Annual Leave",
    attachments: ["https://via.placeholder.com/150"],
    request: "2025-01-06",
    action: () => {},
  },
];

// HR LEAVE REQUEST TABLE DATA

export const HR_LEAVE_REQUEST_TABLE_DATA: HR_LEAVE_REQUEST_TABLE_DATA_TYPE[] = [
  {
    id: "1",
    profile: {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      designation: "Software Engineer",
    },
    timeFrom: "10:00 AM",
    timeTo: "6:00 PM",
    date: "2025-07-20",
    leaveDuration: "1 day",
    leaveType: "Sick Leave",
    attachments: ["doctor-note.pdf", "doctor-note.pdf"],
    status: "pending",
    request: "Need leave due to medical appointment",
    action: () => {
      console.log("Approve/Reject clicked for John Doe");
    },
  },
  {
    id: "2",
    profile: {
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      designation: "UI/UX Designer",
    },
    timeFrom: "2:00 PM",
    timeTo: "6:00 PM",
    date: "2025-07-21",
    leaveDuration: "Half day",
    leaveType: "Casual Leave",
    attachments: ["doctor-note.pdf"],
    status: "approved",
    request: "Personal work in the afternoon",
    action: () => {
      console.log("Approve/Reject clicked for Jane Smith");
    },
  },
];

// HR LEAVE SUMMARY CARDS DATA

export const HR_LEAVE_SUMMARY_CARDS_DATA: HR_LEAVE_SUMMARY_CARDS_DATA_TYPE[] = [
  {
    id: 1,
    label: "Total leave",
    value: 20,
  },
  {
    id: 2,
    label: "Casual leave",
    value: 2,
  },
  {
    id: 3,
    label: "Personal leave",
    value: 4,
  },
  {
    id: 4,
    label: "Leave Pending",
    value: 2,
  },
];

// HR LEAVE SUMMARY TABLE DATA

export const HR_LEAVE_SUMMARY_TABLE_DATA: HR_LEAVE_SUMMARY_TABLE_DATA_TYPE[] = [
    {
      id: "1",
      timeFrom: "9:00 AM",
      timeTo: "5:00 PM",
      date: "2025-07-12", // this month
      leaveDuration: "1 day",
      leaveType: "Leave",
      attachments: ["https://via.placeholder.com/150"],
      status: "Approved",
      report: "FileText",
      action: () => {},
    },
    {
      id: "2",
      timeFrom: "9:00 AM",
      timeTo: "5:00 PM",
      date: "2025-06-25", // last month
      leaveDuration: "1 day",
      leaveType: "Leave",
      attachments: ["https://via.placeholder.com/150"],
      status: "Approved",
      report: "FileText",
      action: () => {},
    },
    {
      id: "3",
      timeFrom: "10:00 AM",
      timeTo: "4:00 PM",
      date: "2025-03-08", // this year
      leaveDuration: "0.5 day",
      leaveType: "Sick Leave",
      attachments: ["https://via.placeholder.com/150"],
      status: "Approved",
      report: "FileText",
      action: () => {},
    },
    {
      id: "4",
      timeFrom: "1:00 PM",
      timeTo: "5:00 PM",
      date: "2024-12-18", // last year
      leaveDuration: "0.5 day",
      leaveType: "Casual Leave",
      attachments: ["https://via.placeholder.com/150"],
      status: "Approved",
      report: "FileText",
      action: () => {},
    },
    {
      id: "5",
      timeFrom: "9:00 AM",
      timeTo: "5:00 PM",
      date: "2025-07-05", // this month
      leaveDuration: "1 day",
      leaveType: "Annual Leave",
      attachments: ["https://via.placeholder.com/150"],
      status: "Approved",
      report: "FileText",
      action: () => {},
    },
    {
      id: "6",
      timeFrom: "2:00 PM",
      timeTo: "6:00 PM",
      date: "2025-01-27", // this year
      leaveDuration: "0.5 day",
      leaveType: "Sick Leave",
      attachments: ["https://via.placeholder.com/150"],
      status: "Approved",
      report: "FileText",
      action: () => {},
    },
    {
      id: "7",
      timeFrom: "9:00 AM",
      timeTo: "12:00 PM",
      date: "2024-09-14", // last year
      leaveDuration: "0.5 day",
      leaveType: "Emergency Leave",
      attachments: ["https://via.placeholder.com/150"],
      status: "Approved",
      report: "FileText",
      action: () => {},
    },
    {
      id: "8",
      timeFrom: "9:00 AM",
      timeTo: "5:00 PM",
      date: "2025-06-19", // last month
      leaveDuration: "1 day",
      leaveType: "Annual Leave",
      attachments: ["https://via.placeholder.com/150"],
      status: "Approved",
      report: "FileText",
      action: () => {},
    },
  ];


  export const HR_LEAVE_SUMMARY_EMPLOYEES: HR_LEAVE_SUMMARY_EMPLOYEES_TYPE[] = [
    {
      id: "1",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      isActive: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      isActive: false,
    },
    {
      id: "3",
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      isActive: false,
    },
    {
      id: "4",
      name: "Sarah Wilson",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      isActive: false,
    },
    {
      id: "5",
      name: "David Brown",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      isActive: false,
    },
    {
      id: "6",
      name: "Lisa Davis",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      isActive: false,
    },
    {
      id: "7",
      name: "Tom Miller",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      isActive: false,
    },
    {
      id: "8",
      name: "Amy Taylor",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      isActive: false,
    },
    {
      id: "7",
      name: "Tom Miller",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      isActive: false,
    },
    {
      id: "8",
      name: "Amy Taylor",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
      image: "https://randomuser.me/api/portraits/men/7.jpg",
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
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      isActive: false,
    },
  ];
  