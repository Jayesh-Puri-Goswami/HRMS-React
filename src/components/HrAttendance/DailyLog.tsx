import React, { useState, useEffect } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { HR_ATTENDANCE_DAILY_LOG } from "../../constant/HrAttendance";
import { motion } from "framer-motion";
import DataTable from "../ui/datatable/DataTable";
import { ApiResponse, AttendanceRecord } from "../../types/HrAttendance.type";
import { FileInput } from "lucide-react";
import SearchBar from "../ui/searchbar/SearchBar";
import { HrAttendanceModel } from "./HrAttendanceModels/HrAttendance.Model";
import InputField from "../ui/inputs/InputField";
import { useApi } from "../../hooks/useApi";
import Loader from "../ui/loader/Loader";
import SubLoader from "../ui/loader/SubLoader";
import EmptyState from "../ui/error/EmptyState";

function statusClass(status: string) {
  switch (status) {
    case "present":
      return "bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium text-center";
    case "absent":
      return "bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium text-center";
    case "leave":
      return "bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium text-center";
    case "halfday":
      return "bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium text-center";
    case "weekend":
      return "bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium text-center";
    default:
      return "bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs font-medium text-center";
  }
}

const columns = [
  {
    key: "employeeName",
    header: "Employee",
    render: (row: AttendanceRecord) => (
      <div className="flex items-center gap-2">
        <img
          src={row.employeeId.profile_image || "/default-user.png"}
          alt={row.employeeName}
          className="w-8 h-8 rounded-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/public/images/user/UserSVG.svg";
          }}
        />
        <span>{row.employeeName}</span>
      </div>
    ),
  },
  {
    key: "date",
    header: "Date",
    render: (row: AttendanceRecord) => (
      <div className="text-center">
        <span>{new Date(row.date).toLocaleDateString()}</span>
      </div>
    ),
  },
  {
    key: "checkInTime",
    header: "Check-In",
    render: (row: AttendanceRecord) => (
      <div className="text-center">
        <span>
          {row.checkInTime
            ? new Date(row.checkInTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Not Checked In"}
        </span>
      </div>
    ),
  },
  {
    key: "checkOutTime",
    header: "Check-Out",
    render: (row: AttendanceRecord) => (
      <div className="text-center">
        <span>
          {row.checkOutTime
            ? new Date(row.checkOutTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Not Checked Out"}
        </span>
      </div>
    ),
  },
  {
    key: "totalHours",
    header: "Total Hours",
    render: (row: AttendanceRecord) => (
      <div className="text-center">
        <span>{row.totalHours ? row.totalHours : "0"}</span>
      </div>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (row: AttendanceRecord) => (
      <div className="flex justify-center items-center">
        <span className={`${statusClass(row.status)} text-center`}>
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </span>
      </div>
    ),
  },
];

const DailyLog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(20);
  const [employeeName, setEmployeeName] = useState("");

  const { data, loading, error, refetch } = useApi<ApiResponse>(
    "/admin/all-attendance/today",
    "GET",
    {
      params: { page: currentPage, limit, employeeName },
      manual: true,
    }
  );

  useEffect(() => {
    refetch();
  }, [currentPage, employeeName]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setEmployeeName(query);
    setCurrentPage(1);
  };
  const [user, setUser] = useState({
    name: "",
    punchIn: "",
    punchOut: "",
    reasonNotPunchIn: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsModalOpen2(false);
  };
  return (
    <>
      <div className=" dark:border-white/[0.09]">
        {/* {loading && <SubLoader />} */}
        {error && <p>Error: {error}</p>}
        {data ? (
          <DataTable
            data={data.attendanceRecords}
            columns={columns}
            showSearch={true}
            showFilter={true}
            showActionButton={true}
            filterDirection="between"
            actionButton={
              <ActionButtons
                setIsModalOpen={setIsModalOpen}
                handleClose={handleClose}
                setIsModalOpen2={setIsModalOpen2}
              />
            }
            totalPages={Math.ceil(data.totalCount / limit)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onSearch={handleSearch}
            serverSidePagination={true}
          />
        ) : (
          <EmptyState
            imageUrl="/public/images/error/noData.png"
            title="No data found"
          />
        )}
      </div>

      <HrAttendanceModel
        className="max-w-xl  scale-75 md:scale-100   p-3"
        isOpen={isModalOpen}
        onClose={handleClose}
      >
        {isModalOpen && (
          <div className="p-4 space-y-4  ">
            <h2 className="text-lg font-medium mb border-b pb-2  dark:border-white/[0.09] ">
              Add Attendance
            </h2>
            <div>
              <InputField
                name="name"
                value={user.name}
                onChange={handleInputChange}
                type="text"
                id="employee"
                label="Employee"
                placeholder="Search and select an employee"
              />
              <InputField
                name="punchIn"
                value={user.punchIn}
                onChange={handleInputChange}
                placeholder="Enter Punch In date and time"
                type="text"
                id="punchIn"
                label="Punch In date and time"
                className="w-full flex justify-center items-center"
              />
              <InputField
                name="punchOut"
                value={user.punchOut}
                onChange={handleInputChange}
                placeholder="Enter Punch Out date and time"
                type="text"
                id="punchOut"
                label="Punch Out date and time"
                className="w-full flex justify-center font-medium  items-center"
              />
              <label
                htmlFor="reasonNotPunchIn"
                className="text-lg font-medium text-gray-600 dark:text-white  mb-2 block"
              >
                Reason for not punching in
              </label>
              <div className="flex rounded-2xl overflow-hidden  h-20 py-2 outline outline-themeBlueLight dark:outline-white/[0.09] ">
                <textarea
                  name="reasonNotPunchIn"
                  id="reasonNotPunchIn"
                  className="flex-1 bg-transparent border-0 px-4 text-lg  dark:placeholder:text-white  dark:text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                  value={user.reasonNotPunchIn}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-end gap-2 mt-4">
              <button
                type="button"
                className="px-8 py-2 rounded-xl dark:bg-white/[0.03] dark:border-none border-none dark:text-white  shadow-md  bg-white border-2 border-themeBlueLight text-black hover:bg-themeBlueLight hover:text-white transition-all duration-300"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-2 rounded-xl bg-themeBlueLight  dark:text-black text-black hover:bg-white/[0.03] hover:dark:text-white  transition-all duration-300"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </HrAttendanceModel>

      {isModalOpen2 && (
        <ExportModal isOpen={isModalOpen2} onClose={handleClose} />
      )}
    </>
  );
};

const ActionButtons = ({
  setIsModalOpen,
  handleClose,
  setIsModalOpen2,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
  handleClose: () => void;
  setIsModalOpen2: (isOpen: boolean) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  return (
    <div className="flex gap-2 w-full sm:w-auto justify-center items-center relative">
      <button
        className="w-32 h-10 text-sm bg-themeBlue dark:bg-themeBlue text-white rounded-xl"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Entry
      </button>
      <div className="relative">
        <button
          className="w-32 h-10 text-sm bg-themeBlue relative flex items-center justify-center gap-1 dark:bg-themeBlue text-white rounded-xl"
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
            setIsModalOpen2(true);
          }}
        >
          <FileInput className="w-5 h-5" /> Export
        </button>
        <ExportModal
          isOpen={Boolean(anchorEl)}
          onClose={() => {
            setIsModalOpen2(false);
            setAnchorEl(null);
          }}
          anchorEl={anchorEl}
        />
      </div>
    </div>
  );
};

const ExportModal = ({
  isOpen,
  onClose,
  anchorEl,
}: {
  isOpen: boolean;
  onClose: () => void;
  anchorEl?: HTMLElement | null;
}) => {
  if (!isOpen || !anchorEl) return null;
  return (
    <div className="z-50 absolute -left-27 mt-2" style={{ minWidth: 180 }}>
      {/* Overlay to close on outside click */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        style={{ background: "transparent" }}
      />
      <div
        className="bg-white dark:bg-gray-500 cursor-pointer rounded-xl  shadow-lg p-2 gap-4   px-4 flex  items-center justify-between relative border  border-gray-200 dark:border-white/10 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <FileInput className="w-5 h-5" />{" "}
        <span className="text-sm">Export Attendance File</span>
      </div>
    </div>
  );
};

export default DailyLog;
