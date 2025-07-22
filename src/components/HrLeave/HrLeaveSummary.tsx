import React, { useEffect, useState, useMemo } from "react";
import {
  HR_LEAVE_STATUS_CARDS_DATA,
  HR_LEAVE_SUMMARY_CARDS_DATA,
  HR_LEAVE_SUMMARY_EMPLOYEES,
  HR_LEAVE_SUMMARY_TABLE_DATA,
} from "../../constant/HrLeave.data";
import { AnimatePresence } from "framer-motion";
import {
  HrLeaveCardSkeleton,
  HrLeaveStatusTableSkeleton,
} from "./skeletons/HrLeaveStatusSkeleton";
import { motion } from "framer-motion";
import Card from "../ui/card/Card";
import DataTable from "../ui/datatable/DataTable";
import {
  HR_LEAVE_STATUS_TABLE_DATA_TYPE,
  HR_LEAVE_SUMMARY_TABLE_DATA_TYPE,
} from "../../types/HrLeave.type";
import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  FileOutput,
  Pencil,
} from "lucide-react";
import { EmployeeSidebar } from "../HrAttendance/HrEmpScrollbar";
import { HrLeaveSummaryEmp } from "./HrLeaveSummaryEmp";

function isThisMonth(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth()
  );
}
function isLastMonth(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  let lastMonth = now.getMonth() - 1;
  let year = now.getFullYear();
  if (lastMonth < 0) {
    lastMonth = 11;
    year -= 1;
  }
  return date.getFullYear() === year && date.getMonth() === lastMonth;
}
function isThisYear(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  return date.getFullYear() === now.getFullYear();
}
function isLastYear(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  return date.getFullYear() === now.getFullYear() - 1;
}

const tabsData = [
  { label: "This Month", value: "this-month" },
  { label: "Last Month", value: "last-month" },
  { label: "This Year", value: "this-year" },
  { label: "Last Year", value: "last-year" },
  { label: "Total", value: "total" },
];

const HrLeaveSummary = () => {
  const [cardLoading, setCardLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("this-month");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedRow, setSelectedRow] =
  useState<HR_LEAVE_SUMMARY_TABLE_DATA_TYPE | null>(null);
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => setCardLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = useMemo(() => {
    switch (activeTab) {
      case "this-month":
        return HR_LEAVE_SUMMARY_TABLE_DATA.filter((row) =>
          isThisMonth(row.date)
        );
      case "last-month":
        return HR_LEAVE_SUMMARY_TABLE_DATA.filter((row) =>
          isLastMonth(row.date)
        );
      case "this-year":
        return HR_LEAVE_SUMMARY_TABLE_DATA.filter((row) =>
          isThisYear(row.date)
        );
      case "last-year":
        return HR_LEAVE_SUMMARY_TABLE_DATA.filter((row) =>
          isLastYear(row.date)
        );
      default:
        return HR_LEAVE_SUMMARY_TABLE_DATA;
    }
  }, [activeTab]);

  const handleClose = () => {
    setIsModalOpen(false);
    setAnchorEl(null);
  };


  
const columns = [
  {
    key: "timeFrom" as keyof HR_LEAVE_SUMMARY_TABLE_DATA_TYPE,
    header: "Date & Time",
    render: (row: HR_LEAVE_SUMMARY_TABLE_DATA_TYPE) => (
      <div>
        <p className="text-gray-400 text-sm dark:text-white">
          From:{" "}
          <span className="text-gray-500 text-sm dark:text-gray-400">
            {row.timeFrom}
          </span>
        </p>
        <p className="text-gray-400 text-sm dark:text-gray-400">
          To:{" "}
          <span className="text-gray-500 text-sm dark:text-gray-400">
            {row.timeTo}
          </span>
          ,{" "}
          <span className="text-gray-500 text-sm dark:text-gray-400">
            {row.date}
          </span>
        </p>
      </div>
    ),
  },
  {
    key: "leaveDuration" as keyof HR_LEAVE_SUMMARY_TABLE_DATA_TYPE,
    header: "Leave Duration",
  },
  {
    key: "leaveType" as keyof HR_LEAVE_SUMMARY_TABLE_DATA_TYPE,
    header: "Leave Type",
  },
  {
    key: "attachments" as keyof HR_LEAVE_SUMMARY_TABLE_DATA_TYPE,
    header: "Attachments",
    render: (row: HR_LEAVE_SUMMARY_TABLE_DATA_TYPE) => (
      <div className="flex items-center gap-2">
        {row.attachments.map((attachment) => (
          <button className="" onClick={row.action}>
            View
          </button>
        ))}
      </div>
    ),
  },
  {
    key: "request" as keyof HR_LEAVE_SUMMARY_TABLE_DATA_TYPE,
    header: "Request",
    render: (row: HR_LEAVE_SUMMARY_TABLE_DATA_TYPE) => (
      <button onClick={row.action}>View</button>
    ),
  },
  {
    key: "action" as keyof HR_LEAVE_SUMMARY_TABLE_DATA_TYPE,
    header: "Action",
    render: (row: HR_LEAVE_SUMMARY_TABLE_DATA_TYPE) => (
      <button  onClick={(e) => {
        setIsModalOpen(true);
        setSelectedRow(row);
        setAnchorEl(e.currentTarget); // store clicked button
      }}>
        <EllipsisVertical />
      </button>
    ),
  },
];

  return (
    <div className="">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <AnimatePresence>
          {cardLoading ? (
            <HrLeaveCardSkeleton count={4} />
          ) : (
            HR_LEAVE_SUMMARY_CARDS_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Card className="bg-white text-center dark:bg-white/[0.03]  w-full h-32 flex flex-col justify-center items-center">
                  <h2 className="text-gray-500 font-medium text-3xl dark:text-white">
                    {item.value}
                  </h2>
                  <h2 className="text-gray-400 text-base font-medium dark:text-gray-400">
                    {item.label}
                  </h2>
                </Card>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-[20%_1fr] mt-7">
        <div className="flex flex-col gap-4">
          <HrLeaveSummaryEmp
            employees={HR_LEAVE_SUMMARY_EMPLOYEES}
            isLoading={cardLoading}
          />
        </div>
        {cardLoading ? (
          <HrLeaveStatusTableSkeleton />
        ) : (
          <div className=" dark:border-white/[0.09] overflow-x-auto custom-scrollbar h-full f">
            <DataTable
              data={filteredData}
              filter={
                <div className="flex items-center justify-center  gap-2">
                  <LeaveTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <ExportButton />
                </div>
              }
              columns={columns}
              showSearch={true}
              showFilter={true}
              filterDirection="between"
              showActionButton={false}
            />
          </div>
        )}
      </div>

      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          onClose={handleClose}
          anchorEl={anchorEl}
        />
      )}
    </div>
  );
};

const LeaveTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
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

const ExportButton = () => {
  return (
    <button className="text-sm p-2 rounded-md bg-themeBlueLight text-themeBlue">
      <FileOutput className="" />
    </button>
  );
};
const EditModal = ({
  isOpen,
  onClose,
  anchorEl,
}: {
  isOpen: boolean;
  onClose: () => void;
  anchorEl?: HTMLElement | null;
}) => {
  if (!isOpen || !anchorEl) return null;

  // Get position of button
  const rect = anchorEl.getBoundingClientRect();
  const style = {
    position: "absolute" as const,
    top: rect.bottom + window.scrollY + 4, // 4px gap below button
    left: rect.left + window.scrollX,
    minWidth: 180,
    zIndex: 50,
  };

  return (
    <>
      {/* Overlay to close on outside click */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        style={{ background: "transparent" }}
      />
      {/* Popup */}
      <div
        className="absolute z-10 flex flex-col w-40 p-0.5 justify-between items-center left-0 text-sm bg-white border rounded shadow"
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="flex gap-3 px-4 w-full py-2 justify-start items-start">
        <Pencil className="w-4 h-4" />
        Edit
      </button>
      </div>
    </>
  );
};
export default HrLeaveSummary;
