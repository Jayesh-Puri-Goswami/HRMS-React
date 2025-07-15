"use client";

import StatusBadge from "../ui/badge/StatusBadge";
// import {FolderPen } from "lucide-react";
// import Button from "../ui/button/Button";
// // import SearchBar from "../../components/ui/searchbar/SearchBar";
// import SearchBar from "../ui/searchbar/SearchBar";
// import StatusBadge from "../ui/badge/StatusBadge";
import DataTable from "../ui/datatable/DataTable";
import { useState } from "react";

const attendanceData: AttendanceRow[] = [
  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "Late",
    statusType: "info",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },
  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "Late",
    statusType: "info",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },
  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "On time",
    statusType: "success",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },

  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    status: "Late",
    statusType: "info",
    break: "1h",
    working: "8h",
    entry: "Multi",
  },
];

interface AttendanceRow {
  date: string;
  name: string;
  avatar?: string;
  inTime: string;
  outTime: string;
  behaviour?: string; 
  status: string;
  statusType: "info" | "success" | "error";
  break: string;
  working: string;
  entry: string;
}

interface ColumnConfig<T> {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
}

const columns: ColumnConfig<AttendanceRow>[] = [
  { key: "date", header: "Date" },
  {
    key: "name",
    header: "Profile",
    render: (row: AttendanceRow) => (
      <div className="flex items-center gap-2">
        {row.avatar && (
          <img
            src={row.avatar}
            alt={row.name}
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
        <span>{row.name}</span>
      </div>
    ),
  },
  { key: "inTime", header: "Punched In" },
  { key: "outTime", header: "Punched Out" },
  {
    key: "status",
    header: "Behaviour ",
    render: (row: AttendanceRow) => (
      <StatusBadge label={row.status} status={row.statusType} />
    ),
  },
  { key: "break", header: "Break Time" },
  { key: "working", header: "Total Hours" },
  {
    key: "entry",
    header: "Entry",
    render: (row: AttendanceRow) => (
      <StatusBadge label={row.entry} status="info" />
    ),
  },
];

export default function AttendancePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const totalPages = Math.ceil(attendanceData.length / limit);
  return (
    <div className="dark:text-white">
      <DataTable
        data={attendanceData}
        columns={columns}
        showSearch={false}
        showActionButton={true}
        totalPages={totalPages}
        currentPage={currentPage}
        limit={limit}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
