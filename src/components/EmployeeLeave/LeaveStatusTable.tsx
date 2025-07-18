import { ChevronLeft, ChevronRight, FileX } from "lucide-react";
import StatusBadge from "../ui/badge/StatusBadge";
import DataTable from "../ui/datatable/DataTable";
import { useState } from "react";

import { useSelector } from "react-redux";
import { useApi } from "../../hooks/useApi";
import EmptyState from "../ui/error/EmptyState";
import SubLoader from "../ui/loader/SubLoader";

// Types for API response row
interface LeaveDetail {
  date: string;
  leaveType: string;
  deductionType: number;
  halfDay: boolean;
  _id: string;
}

interface LeaveRequestRow {
  _id: string;
  employeeId: string;
  employeeName: string;
  applyDate: string;
  fromDate: string;
  toDate: string;
  reason: string;
  status: string;
  approvedByName: string | null;
  actualLeaveDays: number;
  totalLeaveDays: number;
  halfDay: boolean;
  leaveDetails: LeaveDetail[];
  attachment?: string;
}

// Table column config
type TableColumn<T> = {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
};

const columns: TableColumn<LeaveRequestRow>[] = [
  {
    key: "applyDate",
    header: "Applied On",
    render: (row) =>
      <div className="text-center">
        <span>{new Date(row.applyDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit"
        })}</span>
      </div>
  },
  {
    key: "fromDate",
    header: "From",
    render: (row) =>
      <div className="text-center">
        {new Date(row.fromDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit"
        })}
      </div>
  },
  {
    key: "toDate",
    header: "To",
    render: (row) =>
      <div className="text-center">
        {new Date(row.toDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit"
        })}
      </div>
  },
  {
    key: "reason",
    header: "Reason",
    render: (row) => <div className="text-center truncate" title={row.reason}>{row.reason}</div>,
  },
  {
    key: "totalLeaveDays",
    header: "Total Days",
    render: (row) => <div className="text-center">{row.totalLeaveDays}</div>,
  },
  {
    key: "halfDay",
    header: "Half Day",
    render: (row) => <div className="text-center">{row.halfDay ? "Yes" : "No"}</div>,
  },
  {
    key: "status",
    header: "Status",
    render: (row) => (
      <div className="text-center">
        <StatusBadge
          status={`${row.status === "approved" ? "success" : row.status === "pending" ? "warning" : "error"}`}
          label={row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        >
        </StatusBadge>
      </div>
    ),
  },
];

function LeaveStatusTable() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // 0 based
  const currentYear = currentDate.getFullYear();

  // State for filter (months/years)
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const user = useSelector((state: any) => state.auth.user);

  // Month/year dropdowns
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

  const { data, loading, error, refetch } = useApi(
    "/employee/get-All/leave-request",
    "GET",
    { params: { page: 1, limit: 10 } }
  );


  // The rows for the table
  const rows: LeaveRequestRow[] = Array.isArray(data?.data) ? data.data : [];

  // Pagination and filters UI (optional, you can improve this)
  const filter = (
    <div className="flex items-center gap-3 mb-4">
      <button
        className="p-1 rounded-full hover:bg-indigo-100"
        onClick={() =>
          setSelectedMonth((prev) => {
            if (prev === 0) {
              setSelectedYear((y) => y - 1);
              return 11;
            }
            return prev - 1;
          })
        }
      >
        <ChevronLeft size={20} />
      </button>
      <select
        className="border rounded px-2 py-0.5"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(Number(e.target.value))}
      >
        {months.map((month, idx) => (
          <option value={idx} key={month}>{month}</option>
        ))}
      </select>
      <select
        className="border rounded px-2 py-0.5"
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
      >
        {years.map((year) => (
          <option value={year} key={year}>{year}</option>
        ))}
      </select>
      <button
        className="p-1 rounded-full hover:bg-indigo-100"
        onClick={() =>
          setSelectedMonth((prev) => {
            if (prev === 11) {
              setSelectedYear((y) => y + 1);
              return 0;
            }
            return prev + 1;
          })
        }
      >
        <ChevronRight size={20} />
      </button>

    </div>
  );

  return (
    <div>
      {filter}
      {loading ? (
        <div className="py-6 text-center text-indigo-600">
          <SubLoader height="10vh" text="Loading leave requests..." />
        </div>
      ) : error ? (
        <EmptyState
          imageUrl="/images/svg/SomethingWentWrong.svg"
          title="Error loading data"
          description={error}
          size="lg"
          className="py-0 -mt-0 md:-mt-14"
          error={true}
        />
      ) : (
        data?.data?.length > 0 ? (<DataTable
          columns={columns}
          data={rows}
          showSearch={false}
          showActionButton={false}
          showFilter={false}
          filterDirection="between"
          title="Leave Status"
        />) : (
          <EmptyState
            imageUrl="/images/svg/NoDataFound.svg"
            title="No leave requests found"
            description="There are no leave requests to display at the moment. Create your first leave request to get started."
            size="lg"
            className="py-0 -mt-0 md:-mt-14"
          />
        )
      )}
    </div>
  );
}

export default LeaveStatusTable;
