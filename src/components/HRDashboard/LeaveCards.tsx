import type React from "react";
import { motion } from "framer-motion";
import Card from "../ui/card/Card";
// import { LeaveData } from "../../types/HRDashboard";

interface LeaveCardsProps {
  totalEmployee  : string;
  absentEmployees : string;
  leaveEmployees : string;
  halfDayEmployees : string;
}

const LeaveCards: React.FC<LeaveCardsProps> = ({ totalEmployee,absentEmployees,leaveEmployees,halfDayEmployees }) => {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35%_65%] gap-4 flex-1">
      {/* Total Leave Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=""
      >
        <Card className="bg-[#ffe0e0] dark:bg-white/[0.03] dark:border-white/10 py-4 px-6 flex justify-between items-center h-full">
          <div>
            <h3 className="text-[28px] text-center font-semibold text-gray-600 dark:text-white">
              {totalEmployee}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Total Employee
            </p>
          </div>
          <div>
            <h3 className="text-[28px] text-center font-semibold text-gray-600 dark:text-white">
              {totalEmployee}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Attendance
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Absent, Present, Leave Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-[#e0ebff] text-center dark:bg-white/[0.03] py-4 px-6 flex justify-between items-center h-full">
          <div>
            <h3 className="text-[28px] font-semibold text-gray-600 dark:text-white">
              {absentEmployees}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Absents
            </p>
          </div>
          <div>
            <h3 className="text-[28px] font-semibold text-gray-600 dark:text-white">
              {leaveEmployees}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Leaves
            </p>
          </div>
          <div>
            <h3 className="text-[28px] font-semibold text-gray-600 dark:text-white">
              {halfDayEmployees}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Half Days
            </p>
          </div>
          <div>
            <h3 className="text-[28px] font-semibold text-gray-600 dark:text-white">
              {halfDayEmployees}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Work From Home
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default LeaveCards;
