"use client";

// import DonutChart from "../ui/donut/DonutChart";
import StatusBadge from "../ui/badge/StatusBadge";
import DataTable from "../ui/datatable/DataTable";
import DateRange from "../../components/ui/daterange/DateRange";
import BadgeCard from "../../components/ui/card/BadgeCard";
import DonutChart from "../profile/DonutChart";


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

export default function AttendanceSummary() {
  return (
    <div className="dark:text-white">
      <DateRange />
      <div className="flex justify-between">
        <DonutChart
          data={[
            { label: "Present", value: 60, color: "#22c55e" },
            { label: "Absent", value: 30, color: "#ef4444" },
            { label: "Late", value: 10, color: "#facc15" },
          ]}
        />
        <div className="grid grid-cols-2 gap-4 py-4 px-2">
          <BadgeCard totalHours="190:00:00" label="Total schedule hour" />
          <BadgeCard totalHours="Early" label="Average Behavior" />
          <BadgeCard totalHours="185:00:00" label="Total Active hour" />
          <BadgeCard totalHours="95.5%" label="Total Work Availibality" />
        </div>
      </div>
      <DataTable
        showSearch={false}
        showActionButton={false}
        data={attendanceData}
        columns={columns}
      />
    </div>
  );
}

