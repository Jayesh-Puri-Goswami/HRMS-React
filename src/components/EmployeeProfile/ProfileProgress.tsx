"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DonutChart from "../charts/donut/DonutChart";
import { ProfileProgressProps } from "../../types/EmployeeProfile";
import {
  defaultTotalRating,
  defaultRatingItems,
} from "../../constant/EmployeeProfile";
import clsx from "clsx";

// Skeleton loader styled like EmployeeCard
const ProgressSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={clsx(
      "bg-white dark:bg-white/[0.03] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-dark animate-pulse",
      className
    )}
  >
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="rounded-full bg-gray-200 dark:bg-white/[0.1] w-28 h-28" />
      <div className="h-5 bg-gray-200 dark:bg-white/[0.1] rounded w-1/2" />
      <div className="h-4 bg-gray-200 dark:bg-white/[0.1] rounded w-1/3" />
      <div className="h-4 bg-gray-200 dark:bg-white/[0.1] rounded w-1/4" />
    </div>
  </motion.div>
);

// Main Component
const ProfileProgress: React.FC<ProfileProgressProps> = ({
  totalRating = defaultTotalRating,
  items = defaultRatingItems,
  className = "",
}) => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);



  const labels = items.map((item) => item.label);
  const series = items.map((item) => item.value);
  const colors = items.map((item) => item.color);


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={clsx(
          "bg-white dark:bg-white/[0.03] rounded-2xl  shadow-sm border border-gray-100 dark:border-gray-dark",
          "hover:shadow-lg hover:border-gray-200",
          "transition-all duration-300 cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          className
        )}
      >
        {loading ? (
          <ProgressSkeleton />
        ) : (
          <DonutChart
            labels={labels}
            series={series}
            colors={colors}
            title="Rating Distribution"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileProgress;
