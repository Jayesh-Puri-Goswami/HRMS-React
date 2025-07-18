import React, { useMemo, useState } from "react";
import DataTable from "../ui/datatable/DataTable";
import {
  HR_ATTENDANCE_SUMMARY_TYPE,
} from "../../types/HrAttendance.type";
import {
  HR_ATTENDANCE_SUMMARY,
  mockEmployees,
} from "../../constant/HrAttendance";
import { EmployeeSidebar } from "./HrEmpScrollbar";

const columns = [
  { key: "date" as keyof HR_ATTENDANCE_SUMMARY_TYPE, header: "date" },
  {
    key: "profile" as keyof HR_ATTENDANCE_SUMMARY_TYPE,
    header: "profile",
    render: (row: HR_ATTENDANCE_SUMMARY_TYPE) => (
      <div className="flex items-center gap-2">
        <img
          src={row.profile.image}
          alt="profile"
          className="w-10 h-10 rounded-full"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.src = "https://randomuser.me/api/portraits/men/1.jpg";
          }}
        />
        <p>{row.profile.name}</p>
      </div>
    ),
  },
  { key: "punchIn" as keyof HR_ATTENDANCE_SUMMARY_TYPE, header: "Punch In" },
  {
    key: "punchOut" as keyof HR_ATTENDANCE_SUMMARY_TYPE,
    header: "Punch Out",
  },
  {
    key: "behavior" as keyof HR_ATTENDANCE_SUMMARY_TYPE,
    header: "Behavior",
    render: (row: HR_ATTENDANCE_SUMMARY_TYPE) => (
      <button
        className="bg-themeBlueLight  text-themeBlue px-4 py-1 rounded-md"
        onClick={row.action}
      >
        Late
      </button>
    ),
  },
  {
    key: "BreackTime" as keyof HR_ATTENDANCE_SUMMARY_TYPE,
    header: "Breack Time",
  },
  {
    key: "totelHours" as keyof HR_ATTENDANCE_SUMMARY_TYPE,
    header: "Total Hours",
  },
];

// Utility function to determine period
function getAttendancePeriod(
  dateStr: string
): "this-month" | "last-month" | "this-year" | "last-year" {
  const date = new Date(dateStr);
  const now = new Date();

  const yearDiff = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth();

  if (yearDiff === 0) {
    if (monthDiff === 0) return "this-month";
    if (monthDiff === 1) return "last-month";
    return "this-year";
  }

  if (yearDiff === 1 && date.getMonth() === 11 && now.getMonth() === 0) {
    // Handles case where last month was December of last year
    return "last-month";
  }

  if (yearDiff === 1) return "last-year";

  // fallback (shouldn't happen unless input is out of expected range)
  return "last-year";
}

const HrAttendanceSummary = ({ loading = false }: { loading?: boolean }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const [activeTab, setActiveTab] = useState("last-month");
  const enhancedPayslips = useMemo(() => HR_ATTENDANCE_SUMMARY, []);

  // When changing tab, reset page to 1
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const filteredAttendance = useMemo(() => {
    if (activeTab === "total") return enhancedPayslips;
    return enhancedPayslips.filter(
      (attendance) => getAttendancePeriod(attendance.date) === activeTab
    );
  }, [activeTab, enhancedPayslips]);

  const totalPages = Math.ceil(filteredAttendance.length / limit);

  return (
    <div className="grid grid-cols-[20%_1fr]">
      <div className="flex flex-col gap-4">
        <EmployeeSidebar employees={mockEmployees} isLoading={loading} />
      </div>
      <div className=" dark:border-white/[0.09] overflow-x-auto custom-scrollbar h-full f">
        <DataTable
          data={filteredAttendance}
          columns={columns}
          showSearch={true}
          showFilter={true}
          showActionButton={false}
          filterDirection="between"
          totalPages={totalPages}
          currentPage={currentPage}
          title=""
          limit={limit}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

const AttandanceTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabsData = [
    { label: "This Month", value: "this-month" },
    { label: "Last Month", value: "last-month" },
    { label: "This Year", value: "this-year" },
    { label: "Last Year", value: "last-year" },
    { label: "Total", value: "total" },
  ];

  return (
    <div className="flex items-center gap-3">
      {tabsData.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`text-xs font-medium px-3 py-1 rounded 
            ${
              activeTab === tab.value
                ? "bg-themeBlueLight text-themeBlue dark:bg-white/[0.09] dark:text-gray-400"
                : "text-gray-500 hover:text-themeBlue dark:text-gray-400"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
export default HrAttendanceSummary;
