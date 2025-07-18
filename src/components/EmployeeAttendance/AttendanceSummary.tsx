"use client";
 
// import DonutChart from "../ui/donut/DonutChart";
import { motion } from "framer-motion";
import StatusBadge from "../ui/badge/StatusBadge";
import DataTable from "../ui/datatable/DataTable";
import DateRange from "../../components/ui/daterange/DateRange";
import BadgeCard from "../../components/ui/card/BadgeCard";
// import DonutChart from "../charts/donut/DonutChart";
import ProfileProgress from "../EmployeeProfile/ProfileProgress";
 
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
  {
    key: "date",
    header: "Date",
    render: (row) => <div className="text-center"> {row.date} </div>,
  },
  {
    key: "name",
    header: "Profile",
    render: (row: AttendanceRow) => (
      <div className="flex items-center gap-2 justify-center">
        {row.avatar && (
          <img
            src={row.avatar}
            alt={row.name}
            className="w-6 h-6 md:w-8  md:h-8 rounded-full object-cover"
          />
        )}
        <span>{row.name}</span>
      </div>
    ),
  },
  {
    key: "inTime",
    header: "Punched In",
    render: (row) => <div className="text-center"> {row.inTime} </div>,
  },
  {
    key: "outTime",
    header: "Punched Out",
    render: (row) => <div className="text-center"> {row.outTime} </div>,
  },
  {
    key: "status",
    header: "Behaviour ",
    render: (row: AttendanceRow) => (
      <div className="flex justify-center">
        <StatusBadge label={row.status} status={row.statusType} />
      </div>
    ),
  },
  {
    key: "break",
    header: "Break Time",
    render: (row) => <div className="text-center"> {row.break} </div>,
  },
  {
    key: "working",
    header: "Total Hours",
    render: (row) => <div className="text-center"> {row.working} </div>,
  },
  {
    key: "entry",
    header: "Entry",
    render: (row: AttendanceRow) => (
      <div className="flex justify-center">
        <StatusBadge label={row.status} status="info" />
      </div>
    ),
  },
];
 
export default function AttendanceSummary() {
  return (
    <div className="dark:text-white space-y-6">
      {/* Date Range Animation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <DateRange />
      </motion.div>
 
      {/* Donut & Stats */}
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Donut Chart */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3 w-full flex-col md:flex-row justify-center md:justify-start">
            <ProfileProgress
              totalRating={23}
              items={[
                { label: "Regular", value: 6, color: "#22c55e" },
                { label: "Early", value: 15, color: "#ef4444" },
                { label: "Late", value: 2, color: "#facc15" },
                { label: "On Leave", value: 0, color: "#E5E7EB" },
              ]}
            />
          </div>
        </motion.div>
 
        {/* Badge Cards */}
        <div>
          <motion.div
            className="grid grid-cols-2 gap-4 py-4 px-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              // animate each card
              { totalHours: "190:00:00", label: "Total schedule hour" },
              { totalHours: "Early", label: "Average Behavior" },
              { totalHours: "185:00:00", label: "Total Active hour" },
              { totalHours: "95.5%", label: "Total Work Availability" },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <BadgeCard className="w-[38vw] md:w-[19vw]" totalHours={card.totalHours} label={card.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
 
      {/* DataTable */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <DataTable
          showSearch={false}
          showActionButton={false}
          data={attendanceData}
          columns={columns}
        />
      </motion.div>
    </div>
  );
}