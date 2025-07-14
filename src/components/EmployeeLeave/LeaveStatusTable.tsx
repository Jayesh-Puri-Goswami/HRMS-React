import { ChevronLeft, ChevronRight } from "lucide-react";
import StatusBadge from "../ui/badge/StatusBadge";
import DataTable from "../ui/datatable/DataTable";

const attendanceData: AttendanceRow[] = [
  {
    name: "Ariana Gomez",
    avatar: "https://i.pravatar.cc/300?img=5",
    "Date&Time": "09 Jul 2025, 10:30 AM",
    leaveDeduction: "0.5",
    leaveType: "Sick Leave",
    attachment: "doctor-note.pdf",
    status: "Approved",
    statusType: "success",
  },
  {
    name: "Ravi Malhotra",
    avatar: "https://i.pravatar.cc/300?img=10",
    "Date&Time": "08 Jul 2025, 2:00 PM",
    leaveDeduction: "1",
    leaveType: "Casual Leave",
    attachment: "casual-request.jpg",
    status: "Pending",
    statusType: "warning",
  },
  {
    name: "Emma Watson",
    avatar: "https://i.pravatar.cc/300?img=12",
    "Date&Time": "07 Jul 2025, 9:00 AM",
    leaveDeduction: "1",
    leaveType: "Work From Home",
    attachment: "request.pdf",
    status: "Rejected",
    statusType: "error",
  },
  {
    name: "Kabir Sharma",
    avatar: "https://i.pravatar.cc/300?img=16",
    "Date&Time": "06 Jul 2025, 11:15 AM",
    leaveDeduction: "0.5",
    leaveType: "Emergency Leave",
    attachment: "emergency-note.pdf",
    status: "Approved",
    statusType: "success",
  },
];

interface AttendanceRow {
  name: string;
  avatar?: string;
  ["Date&Time"]: string;
  leaveDeduction: string;
  leaveType: string;
  attachment: string;
  status?: string;
  statusType: "success" | "warning" | "error";
}

interface ColumnConfig<T> {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
}

const columns: ColumnConfig<AttendanceRow>[] = [
  {
    key: "name",
    header: "Profile",
    render: (row) => (
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
  { key: "Date&Time", header: "Date & Time" ,
    render: (row) => (
      <div className="text-center"> {row["Date&Time"]} </div>
    ),},
  { key: "leaveDeduction", header: "Leave Deduction",
    render: (row) => (
      <div className="text-center"> {row.leaveDeduction} </div>
    ), },
  
  {
    key: "leaveType",
    header: "Leave Type",
    render: (row) => (
      <div className="text-center"> {row.leaveType} </div>
    ),
  },
  { key: "attachment", header: "Attachment",
    render: (row) => (
      <div className="text-center"> {row.attachment} </div>
    ), },
  {
    key: "status",
    header: "Status",
    render: (row) => (
      <div className="text-center"><StatusBadge label={row.status} status={row.statusType} /></div>
    ),
  },
];

function LeaveStatusTable() {
  const filter = (
    <div className="flex justify-evenly items-center">
      <ChevronLeft /> April, 2025 <ChevronRight />
    </div>
  );

  return (
    <div className="">
      <DataTable
        filter={filter}
        showActionButton={false}
        showFilter={true}
        data={attendanceData}
        columns={columns}
      />
    </div>
  );
}

export default LeaveStatusTable;
