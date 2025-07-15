import StatusBadge from "../ui/badge/StatusBadge";
import DataTable from "../ui/datatable/DataTable";
import { Badge, FolderPen, FileCheck2 } from "lucide-react";

const attendanceData: AttendanceRow[] = [
  {
    date: "2024-06-01",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    request: "View",
    status: "Pending",
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
    request: "View",
    status: "Pending",
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
    request: "View",
    status: "Pending",
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
    request: "View",
    status: "Pending",
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
    request: "View",
    status: "Pending",
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
    request: "View",
    status: "Pending",
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
  request?: string;
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

  // {
  //   key: "request",
  //   header: "Request",

  // },

  {
    key: "request",
    header: "Request",
    render: (row: AttendanceRow) => (
      <div className="flex items-center gap-2">
        <span>{row.request}</span>
        <button>
          <FileCheck2 className="h-4 w-4 text-[#3A648A] dark:text-white" />
        </button>
      </div>
    ),
  },

  { key: "break", header: "Break Time" },
  { key: "working", header: "Total Hours" },

  {
    key: "status",
    header: "Status ",
    render: (row: AttendanceRow) => <StatusBadge label={row.status} />,
  },
  // {
  //   key: "entry",
  //   header: "Entry",
  //   render: (row: AttendanceRow) => (
  //     <StatusBadge label={row.entry} status="info" />
  //   ),
  // },
];

export default function AttendancePage() {
  return (
    <div className="dark:text-white">
      <DataTable data={attendanceData} columns={columns} />
    </div>
  );
}


