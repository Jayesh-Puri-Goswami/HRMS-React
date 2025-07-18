import { ChevronLeft, ChevronRight } from "lucide-react";
import StatusBadge from "../ui/badge/StatusBadge";
import DataTable from "../ui/datatable/DataTable";
import { useState } from "react";


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

const columns: ColumnConfig<AttendanceRow>[] = [
  {
    key: "Date&Time", header: "Date & Time",
    render: (row) => (
      <div className="text-center"> {row["Date&Time"]} </div>
    ),
  },
  {
    key: "leaveDeduction", header: "Leave Deduction",
    render: (row) => (
      <div className="text-center"> {row.leaveDeduction} </div>
    ),
  },

  {
    key: "leaveType",
    header: "Leave Type",
    render: (row) => (
      <div className="text-center"> {row.leaveType} </div>
    ),
  },
  {
    key: "attachment", header: "Attachment",
    render: (row) => (
      <div className="text-center"> {row.attachment} </div>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (row) => (
      <div className="text-center"><StatusBadge label={row.status} status={row.statusType} /></div>
    ),
  },
];

function LeaveStatusTable() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // 0-11
  const currentYear = currentDate.getFullYear();

  // State for selected month and year
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const baseURL = import.meta.env.VITE_API_URL;

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Handle month navigation
  const handlePrevMonth = () => {
    setSelectedMonth((prev) => {
      if (prev === 0) {
        setSelectedYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setSelectedMonth((prev) => {
      if (prev === 11) {
        setSelectedYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  // Handle month selection from dropdown
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  // Handle year selection from dropdown
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(e.target.value));
  };

  // Generate years for dropdown (current year ± 5 years)
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

  // Format selected month and year for API usage (e.g., "2025-07")
  const formattedDateForAPI = `${selectedYear}-${(selectedMonth + 1)
    .toString()
    .padStart(2, "0")}`;

  const filter = (
    <div className="flex text-xs md:text-base lg:text-base justify-evenly items-center gap-2">
      <button
        onClick={handlePrevMonth}
        className="p-1 hover:bg-gray-200 rounded-full"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <select
        value={selectedMonth}
        onChange={handleMonthChange}
        className="p-1 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
      >
        {months.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>
      <select
        value={selectedYear}
        onChange={handleYearChange}
        className="p-1 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark.border-gray-600"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button
        onClick={handleNextMonth}
        className="p-1 hover:bg-gray-200 rounded-full"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );



  return (
    <div className="w-full">
      <DataTable
        filter={filter}
        showActionButton={false}
        showFilter={true}
        data={attendanceData}
        columns={columns}
        showSearch={false}
        filterDirection="left"
      />
    </div>
  );
}

export default LeaveStatusTable;
