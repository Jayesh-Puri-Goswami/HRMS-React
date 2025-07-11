"use client";

import StatusBadge from "../ui/badge/StatusBadge";
// import {FolderPen } from "lucide-react";
// import Button from "../ui/button/Button";
// // import SearchBar from "../../components/ui/searchbar/SearchBar";
// import SearchBar from "../ui/searchbar/SearchBar";
// import StatusBadge from "../ui/badge/StatusBadge";
import DataTable from "../ui/datatable/DataTable";

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
    status: "Present",
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
    header: "Punctuality ",
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
  return (
    <div className="">
      <DataTable data={attendanceData} columns={columns} />
    </div>
  );
}

// export function AttendanceDetailsContent() {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-lg font-semibold text-gray-900">
//         Detailed Attendance Report
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-blue-50 rounded-lg p-4">
//           <h4 className="font-medium text-blue-900">Total Present Days</h4>
//           <p className="text-2xl font-bold text-blue-600 mt-2">22</p>
//           <p className="text-sm text-blue-600">This month</p>
//         </div>
//         <div className="bg-red-50 rounded-lg p-4">
//           <h4 className="font-medium text-red-900">Total Absent Days</h4>
//           <p className="text-2xl font-bold text-red-600 mt-2">3</p>
//           <p className="text-sm text-red-600">This month</p>
//         </div>
//         <div className="bg-yellow-50 rounded-lg p-4">
//           <h4 className="font-medium text-yellow-900">Late Arrivals</h4>
//           <p className="text-2xl font-bold text-yellow-600 mt-2">5</p>
//           <p className="text-sm text-yellow-600">This month</p>
//         </div>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-gray-200">
//               <th className="text-left py-3 px-4 font-medium text-gray-600">
//                 Employee
//               </th>
//               <th className="text-left py-3 px-4 font-medium text-gray-600">
//                 Department
//               </th>
//               <th className="text-left py-3 px-4 font-medium text-gray-600">
//                 Present Days
//               </th>
//               <th className="text-left py-3 px-4 font-medium text-gray-600">
//                 Absent Days
//               </th>
//               <th className="text-left py-3 px-4 font-medium text-gray-600">
//                 Late Count
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b border-gray-100 hover:bg-gray-50">
//               <td className="py-3 px-4 text-sm">John Doe</td>
//               <td className="py-3 px-4 text-sm">Engineering</td>
//               <td className="py-3 px-4 text-sm">22</td>
//               <td className="py-3 px-4 text-sm">3</td>
//               <td className="py-3 px-4 text-sm">2</td>
//             </tr>
//             <tr className="border-b border-gray-100 hover:bg-gray-50">
//               <td className="py-3 px-4 text-sm">Jane Smith</td>
//               <td className="py-3 px-4 text-sm">Marketing</td>
//               <td className="py-3 px-4 text-sm">24</td>
//               <td className="py-3 px-4 text-sm">1</td>
//               <td className="py-3 px-4 text-sm">1</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export function SummaryContent() {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-lg font-semibold text-gray-900">
//         Attendance Summary
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
//           <h4 className="font-medium">Total Employees</h4>
//           <p className="text-3xl font-bold mt-2">156</p>
//         </div>
//         <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
//           <h4 className="font-medium">Present Today</h4>
//           <p className="text-3xl font-bold mt-2">142</p>
//         </div>
//         <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6 text-white">
//           <h4 className="font-medium">Absent Today</h4>
//           <p className="text-3xl font-bold mt-2">14</p>
//         </div>
//         <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6 text-white">
//           <h4 className="font-medium">On Leave</h4>
//           <p className="text-3xl font-bold mt-2">8</p>
//         </div>
//       </div>
//       <div className="bg-white border border-gray-200 rounded-lg p-6">
//         <h4 className="font-medium text-gray-900 mb-4">
//           Monthly Attendance Trend
//         </h4>
//         <div className="space-y-3">
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-gray-600">Average Attendance</span>
//             <span className="font-medium">91.2%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div
//               className="bg-blue-600 h-2 rounded-full"
//               style={{ width: "91.2%" }}
//             ></div>
//           </div>
//         </div>
//         <div className="mt-6 space-y-3">
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-gray-600">Punctuality Rate</span>
//             <span className="font-medium">87.5%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div
//               className="bg-green-600 h-2 rounded-full"
//               style={{ width: "87.5%" }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
