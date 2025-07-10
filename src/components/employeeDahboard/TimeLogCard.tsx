"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Card from "../ui/card/Card";

interface TimeLogData {
  today: {
    scheduled: string;
    worked: string;
    break: string;
    balance: string;
  };
  thisMonth: {
    totalScheduled: string;
    workedTime: number;
    overTime: number;
  };
}

interface TimeLogCardProps {
  data: TimeLogData;
}

const TimeLogCard: React.FC<TimeLogCardProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="bg-white dark:bg-gray-500/40"  >
        <div className="flex items-center space-x-2 pb-3 mb-3 border-b border-themeBackgroundColor dark:border-gray-500">
          <div className="w-6 h-6 bg-transparent rounded-full flex items-center justify-center">
            {/* <Clock className="w-4 h-4 text-white" /> */}
            <img src="/public/images/svg/CircleFram.svg" alt="" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Time Log</h3>
        </div>

        <div className="space-y-6">
          <div className=" bg-[#e0ebff] dark:bg-gradient-to-r dark:from-gray-500 to-gray-500 rounded-2xl px-[18px] py-[12px] mb-4 ">
            <h4 className="font-medium text-gray-800 dark:text-white mb-4">Today</h4>
            <div className="grid grid-cols-4 gap-4 border-t-white dark:border-white/50 border-t pt-3">
              <div className="text-center">
                <p className=" font-medium text-gray-800 dark:text-white">
                  {data.today.scheduled}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">Scheduled</p>
              </div>
              <div className="text-center">
                <p className=" font-medium text-gray-800 dark:text-white">
                  {data.today.worked}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">Worked</p>
              </div>
              <div className="text-center">
                <p className=" font-medium text-gray-800 dark:text-white">{data.today.break}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">Break</p>
              </div>
              <div className="text-center">
                <p className=" font-medium text-gray-800 dark:text-white">
                  {data.today.balance}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">Balance</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 dark:text-white pb-2 border-b border-themeBackgroundColor dark:border-gray-500">
              This Month
            </h4>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-[#6c3ecd] rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col justify-center items-start pt-2">
                <p className="text-sm text-gray-900 dark:text-white">
                  {data.thisMonth.totalScheduled}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">Total Scheduled time</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-5 items-center">
                <div className="w-[60%] flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600 dark:text-white">
                    Worked Time - 154 h and 1 Min.
                  </span>
                </div>
                <div className="w-[40%] bg-gray-200 dark:bg-gray-500/40 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-themeGradientColorFrom to-[#6c3ecd] h-3 rounded-full"
                    style={{ width: `${data.thisMonth.workedTime}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-5 items-center" >
                <div className=" w-[60%] flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600 dark:text-white">
                    Over Time - 01 h and 20 Min.
                  </span>
                </div>
                <div className="w-[40%] bg-gray-200 dark:bg-gray-500/40 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-themeGradientColorFrom to-[#6c3ecd] h-3 rounded-full"
                    style={{ width: `${data.thisMonth.overTime}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TimeLogCard;
