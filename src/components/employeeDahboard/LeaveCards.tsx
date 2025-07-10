import type React from "react";
import { motion } from "framer-motion";
import Card from "../ui/card/Card";

interface LeaveData {
  leaveTaken: {
    total: number;
    paid: number;
    unpaid: number;
  };
  leaveRequest: {
    total: number;
    paid: number;
    unpaid: number;
  };
}

interface LeaveCardsProps {
  data: LeaveData;
}

const LeaveCards: React.FC<LeaveCardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
      {/* Leave Taken Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=""
      >
        <Card className="bg-[#ffe0e0] dark:bg-gray-500 py-4 px-6 flex justify-between items-center h-full">
          <div>
            <h3 className="text-[28px] font-semibold text-gray-900 dark:text-white">
              {data.leaveTaken.total.toString().padStart(2, "0")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Leave Taken This Month</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#6f2cf5]"></div>
              <span className="text-gray-800">Paid-{data.leaveTaken.paid}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#5a5a5a] dark:bg-warning-25"></div>
              <span className="text-gray-800">Unpaid-{data.leaveTaken.unpaid}</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Leave Request Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-[#e1e0ff] dark:bg-gray-500 rounded-xl py-4 px-6 flex justify-between items-center h-full">
          <div>
            <h3 className="text-[28px] font-semibold text-gray-900 dark:text-white">
              {data.leaveRequest.total.toString().padStart(2, "0")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Leave Request Pending</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#6f2cf5]"></div>
              <span className="text-gray-800">Paid-{data.leaveRequest.paid}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#5a5a5a] dark:bg-amber-50"></div>
              <span className="text-gray-800">Unpaid-{data.leaveRequest.unpaid}</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default LeaveCards;
