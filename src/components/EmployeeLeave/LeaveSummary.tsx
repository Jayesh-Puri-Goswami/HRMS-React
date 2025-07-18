import React, { useState } from "react";
import { motion } from "framer-motion";
import RequestLeaveModal from './Modal/RequestLeave.Modal'
import StatsCard from "../ui/card/StatsCard";
import Button from "../ui/button/Button";
import { useApi } from "../../hooks/useApi";
import { useSelector } from "react-redux";

interface LeaveSummaryCardsProps {
  className?: string;
}

const LeaveSummaryCards: React.FC<LeaveSummaryCardsProps> = ({ className = "" }) => {

  const [isOpen, setIsOpen] = useState(false)

  const user = useSelector((state:any) => state.auth.user)

  const {data,error,loading,refetch} = useApi(`/employee/get/employees/paidLeaves/${user._id}`,"GET")

  console.log(data);
  

  return (
    <div className={` ${className}`}>
      <RequestLeaveModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Leave Summary Card */}
        <motion.div
          className="rounded-3xl border p-6 shadow-sm  bg-white dark:bg-white/[0.03] dark:text-white border-gray-200 dark:border-white/10 flex flex-col justify-between gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Leave Summary
            </h3>
            <div className="flex h-full flex-wrap md:gap-4 gap-0 justify-evenly md:justify-between">
              <StatsCard
                className="flex-1 sm:w-[250px] md: h-[70px]  scale-75 sm:scale-75 md:scale-90 rounded-xl"
                labelClassName="text-xs sm:text-sm md:text-base"
                boxClassName="p-1"
                valueClassName="text-base"
                label="Leave Approved"
                value={2}
              />
              <StatsCard
                className="flex-1 sm:w-[250px] md: h-[70px]  scale-75 sm:scale-75 md:scale-90 rounded-xl"
                labelClassName="text-xs sm:text-sm md:text-base"
                boxClassName="p-1"
                valueClassName="text-base"
                label="Upcoming Leave"
                value={1}
              />
              <StatsCard
                className="flex-1 sm:w-[250px] md: h-[70px]  scale-75 sm:scale-75 md:scale-90 rounded-xl"
                labelClassName="text-xs sm:text-sm md:text-base"
                boxClassName="p-1"
                valueClassName="text-base"
                label="Pending Request"
                value={0}
              />
            </div>
          </div>

          <div className="">
            <Button disabled={isOpen} onClick={() => setIsOpen(true)} className="w-full rounded-3xl " variant="primary">
              {isOpen ? <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              /> : null}
              {isOpen ? 'Requesting Leave' : 'Request Leave'}
            </Button>
          </div>
        </motion.div>

        {/* Leave Available Card */}
        <motion.div
          className="rounded-3xl border p-6 shadow-sm  bg-white dark:bg-white/[0.03] dark:text-white border-gray-200 dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Leave Available
          </h3>

          {/* Leave Allowance Section */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Leave Allowance
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
              <div>Casual Leave: 6</div>
              <div>Personal Leave: 6</div>
              <div>Medical Leave: 6</div>
              <div>Leave Without Pay: 0</div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-white/10 my-4"></div>

          {/* Leave Available Section */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Available Balance
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-themeBackgroundColor dark:bg-white/[0.05] px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">Casual Leave</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-white"> {data?.casualLeave || 0} </span>
              </div>
              <div className="flex justify-between items-center bg-themeBackgroundColor dark:bg-white/[0.05] px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">Personal Leave</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-white"> {data?.personalLeave || 0} </span>
              </div>
              <div className="flex justify-between items-center bg-themeBackgroundColor dark:bg-white/[0.05] px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">Medical Leave</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-white"> {data?.medicalLeave || 0} </span>
              </div>
              <div className="flex justify-between items-center bg-themeBackgroundColor dark:bg-white/[0.05] px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                Leave Without Pay</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-white"> {data?.LWP || 0} </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeaveSummaryCards;