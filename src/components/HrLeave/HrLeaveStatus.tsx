import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DataTable from "../ui/datatable/DataTable";
import Card from "../ui/card/Card";
import {
  HR_LEAVE_STATUS_CARDS_DATA,
  HR_LEAVE_STATUS_TABLE_DATA,
} from "../../constant/HrLeave.data";
import { HR_LEAVE_STATUS_TABLE_DATA_TYPE } from "../../types/HrLeave.type";
import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Pencil,
} from "lucide-react";
import {
  HrLeaveCardSkeleton,
  HrLeaveStatusTableSkeleton,
} from "./skeletons/HrLeaveStatusSkeleton";

const EditModal = ({ isOpen, anchorRef, onClose }: { isOpen: boolean; anchorRef: React.RefObject<HTMLButtonElement>; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  // Position the modal under the anchor button
  return (
    <div
      ref={modalRef}
      className="absolute z-10 flex flex-col w-40 p-0.5 justify-between items-center left-0 text-sm bg-white border rounded shadow"
      style={{ top: "105%" }}
    >
      <button className="flex gap-3 px-4 w-full py-2 justify-start items-start">
        <Pencil className="w-4 h-4" />
        Edit
      </button>
    </div>
  );
};

const HrLeaveStatus = () => {
  const [cardLoading, setCardLoading] = useState(true);
  const [openPopoverKey, setOpenPopoverKey] = useState<string | null>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => setCardLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const columns = [
    {
      key: "date" as keyof HR_LEAVE_STATUS_TABLE_DATA_TYPE,
      header: "Profile",
      render: (row: HR_LEAVE_STATUS_TABLE_DATA_TYPE) => (
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
      key: "timeFrom" as keyof HR_LEAVE_STATUS_TABLE_DATA_TYPE,
      header: "Date & Time",
      render: (row: HR_LEAVE_STATUS_TABLE_DATA_TYPE) => (
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
      key: "leaveDuration" as keyof HR_LEAVE_STATUS_TABLE_DATA_TYPE,
      header: "Leave Duration",
    },
    {
      key: "leaveType" as keyof HR_LEAVE_STATUS_TABLE_DATA_TYPE,
      header: "Leave Type",
    },
    {
      key: "attachments" as keyof HR_LEAVE_STATUS_TABLE_DATA_TYPE,
      header: "Attachments",
      render: (row: HR_LEAVE_STATUS_TABLE_DATA_TYPE) => (
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
      key: "request" as keyof HR_LEAVE_STATUS_TABLE_DATA_TYPE,
      header: "Request",
      render: (row: HR_LEAVE_STATUS_TABLE_DATA_TYPE) => (
        <button onClick={row.action}>View</button>
      ),
    },
    {
      key: "action" as keyof HR_LEAVE_STATUS_TABLE_DATA_TYPE,
      header: "Action",
      render: (row: HR_LEAVE_STATUS_TABLE_DATA_TYPE) => {
        const rowKey = (row.profile?.name || "row") + (row.date || "");
        // Callback ref to store button element
        const setButtonRef = (el: HTMLButtonElement | null) => {
          buttonRefs.current[rowKey] = el;
        };
        return (
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              ref={setButtonRef}
              onClick={() =>
                setOpenPopoverKey(openPopoverKey === rowKey ? null : rowKey)
              }
            >
              <EllipsisVertical />
            </button>
            {openPopoverKey === rowKey && buttonRefs.current[rowKey] && (
              <EditModal
                isOpen={openPopoverKey === rowKey}
                anchorRef={{ current: buttonRefs.current[rowKey]! }}
                onClose={() => setOpenPopoverKey(null)}
              />
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {cardLoading ? (
            <HrLeaveCardSkeleton count={4} />
          ) : (
            HR_LEAVE_STATUS_CARDS_DATA.map((item, index) => (
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
      <div className="mt-6">
        {cardLoading ? (
          <HrLeaveStatusTableSkeleton />
        ) : (
          <DataTable
            data={HR_LEAVE_STATUS_TABLE_DATA}
            filter={<DateButton />}
            columns={columns}
            showSearch={true}
            showFilter={true}
            filterDirection="between"
            showActionButton={false}
          />
        )}
      </div>
    </div>
  );
};

const DateButton = () => {
  return (
    <div className="text-sm flex items-center gap-2 self-start text-gray-500">
      <span className="text-gray-500 font-medium">
        <ChevronLeft />
      </span>
      <span className="text-gray-500 font-medium">April, 2023</span>
      <span className="text-gray-500 font-medium">
        <ChevronRight />
      </span>
    </div>
  );
};

export default HrLeaveStatus;
