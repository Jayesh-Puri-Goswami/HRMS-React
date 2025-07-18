import React, { useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { HR_ATTENDANCE_DAILY_LOG } from "../../constant/HrAttendance";
import { motion } from "framer-motion";
import DataTable from "../ui/datatable/DataTable";
import {
  HR_ATTENDANCE_DAILY_LOG_TYPE,
  HR_ATTENDANCE_TABLE_TYPE,
} from "../../types/HrAttendance.type";
import { FileInput, X } from "lucide-react";
import SearchBar from "../ui/searchbar/SearchBar";
import { HrAttendanceModel } from "./HrAttendanceModels/HrAttendance.Model";
import InputField from "../ui/inputs/InputField";

const columns = [
  { key: "id" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE, header: "Sr.No" },
  { key: "date" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE, header: "Date" },
  { key: "punchIn" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE, header: "Punch In" },
  {
    key: "punchOut" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE,
    header: "Punch Out",
  },
  { key: "behavior" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE, header: "Behavior" },
  {
    key: "BreackTime" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE,
    header: "Breack Time",
  },
  {
    key: "totelHours" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE,
    header: "Totel Hours",
  },
  { key: "entry" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE, header: "Entry" },
  {
    key: "action" as keyof HR_ATTENDANCE_DAILY_LOG_TYPE,
    header: "Action",
    render: (row: HR_ATTENDANCE_DAILY_LOG_TYPE) => (
      <button onClick={row.action}>View</button>
    ),
  },
];
const DailyLog = () => {
  const [selectedBankDetail, setSelectedBankDetail] =
    useState<HR_ATTENDANCE_DAILY_LOG_TYPE | null>(null);
  const [addBankdetails, setAddBankdetails] =
    useState<HR_ATTENDANCE_DAILY_LOG_TYPE | null>(null);
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const handleClose = () => {
    setIsModalOpen(false);
    setIsModalOpen2(false);
  };
  return (
    <>
      <div className=" dark:border-white/[0.09]">
        <DataTable
          data={HR_ATTENDANCE_DAILY_LOG as HR_ATTENDANCE_DAILY_LOG_TYPE[]}
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
        />
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
        <FileInput className="w-5 h-5" /> <span className="text-sm">Export Attendance File</span>
      </div>
    </div>
  );
};

export default DailyLog;
