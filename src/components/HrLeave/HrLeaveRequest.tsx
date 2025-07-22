import React, { useState } from "react";
import DataTable from "../ui/datatable/DataTable";
import { HR_LEAVE_REQUEST_TABLE_DATA } from "../../constant/HrLeave.data";
import {
  HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
  HR_LEAVE_STATUS_TABLE_DATA_TYPE,
} from "../../types/HrLeave.type";
import { EllipsisVertical, Pencil } from "lucide-react";
import { HrLeaveModel } from "./HRLeaveModels/HrLeave.model";

const HrLeaveRequest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] =
    useState<HR_LEAVE_REQUEST_TABLE_DATA_TYPE | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClose = () => {
    setIsModalOpen(false);
    setAnchorEl(null);
  };

  const columns = [
    {
      key: "profile" as keyof HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
      header: "Profile",
      render: (row: HR_LEAVE_REQUEST_TABLE_DATA_TYPE) => (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full">
            <img
              src={row.profile.image}
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h2 className="text-gray-500 font-medium text-base dark:text-white">
              {row.profile.name}
            </h2>
            <p className="text-gray-400 text-sm dark:text-gray-400">
              {row.profile.designation}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "date" as keyof HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
      header: "Date & Time",
      render: (row: HR_LEAVE_REQUEST_TABLE_DATA_TYPE) => (
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
      key: "leaveDuration" as keyof HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
      header: "Leave Duration",
    },
    {
      key: "leaveType" as keyof HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
      header: "Leave Type",
    },
    {
      key: "attachments" as keyof HR_LEAVE_STATUS_TABLE_DATA_TYPE,
      header: "Attachments",
      render: (row: HR_LEAVE_REQUEST_TABLE_DATA_TYPE) => (
        <div className="flex items-center gap-2">
          {row.attachments.map((attachment, index) => (
            <button key={index} onClick={row.action}>
              View
            </button>
          ))}
        </div>
      ),
    },
    {
      key: "status" as keyof HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
      header: "Status",
    },
    {
      key: "request" as keyof HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
      header: "Request",
      render: (row: HR_LEAVE_REQUEST_TABLE_DATA_TYPE) => (
        <button onClick={row.action}>View</button>
      ),
    },
    {
      key: "action" as keyof HR_LEAVE_REQUEST_TABLE_DATA_TYPE,
      header: "Action",
      render: (row: HR_LEAVE_REQUEST_TABLE_DATA_TYPE) => (
        <button
          onClick={(e) => {
            setIsModalOpen(true);
            setSelectedRow(row);
            setAnchorEl(e.currentTarget); // store clicked button
          }}
        >
          <EllipsisVertical />
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="mt-6">
        <DataTable
          data={HR_LEAVE_REQUEST_TABLE_DATA}
          columns={columns}
          showSearch={true}
          showFilter={false}
          filterDirection="between"
          showActionButton={false}
        />
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
        className="bg-white dark:bg-gray-500 cursor-pointer rounded-xl shadow-lg p-2 px-4 flex items-center justify-between border border-gray-200 dark:border-white/10"
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        <Pencil className="w-5 h-5" />{" "}
        <span className="text-sm text-gray-700 dark:text-white">Edit</span>
      </div>
    </>
  );
};

export default HrLeaveRequest;
