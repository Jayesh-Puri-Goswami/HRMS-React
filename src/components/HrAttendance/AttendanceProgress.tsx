"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AttandanceProgressProps } from "../../types/HrAttendance.type";
import {
  defaultTotalRating,
  defaultRatingItems,
} from "../../constant/EmployeeProfile";
import clsx from "clsx";
import AttendanceDonutChart from "./AttendanceDonutChart";


// Skeleton loader styled like EmployeeCard
const ProgressSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={clsx(
      "bg-white  dark:bg-white/[0.03] rounded-2xl  h-full shadow-sm border  py-5 dark:border-gray-dark animate-pulse ",
      className
    )}
  >
    <div className="flex w-full  gap-10 items-center justify-center h-full ">
      <div className="rounded-full bg-gray-200 dark:bg-white/[0.1] w-32 h-32" />
      <div className="flex flex-col gap-2 px-5  py-2">
        <div className="h-5  bg-gray-200 dark:bg-white/[0.1] rounded w-44" />
        <div className="h-4 bg-gray-200 dark:bg-white/[0.1] rounded w-32" />
        <div className="h-4 bg-gray-200 dark:bg-white/[0.1] rounded w-24" />
      </div>
    </div>
  </motion.div>
);

// Main Component
const AttendanceProgress: React.FC<AttandanceProgressProps> = ({
  totalRating = defaultTotalRating,
  items = defaultRatingItems,
  className = "",
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading whenever component mounts or props change
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [items]);

  const labels = items.map((item) => item.label);
  const series = items.map((item) => item.value);
  const colors = items.map((item) => item.color);

  return (
    <motion.div
      layout
      className={clsx(
        "bg-white dark:bg-white/[0.09] rounded-2xl shadow-sm border  flex flex-col  justify-center    border-gray-100 dark:border-white/[0.09]",

        "transition-all duration-300 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        className
      )}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <ProgressSkeleton key="skeleton" />
        ) : (
          <motion.div
            key="chart"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AttendanceDonutChart
              labels={labels}
              series={series}
              colors={colors}
              //   title="Rating Distribution"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AttendanceProgress;
