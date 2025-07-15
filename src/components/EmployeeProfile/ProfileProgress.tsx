"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import DonutChart from "../charts/donut/DonutChart";

interface RatingItem {
  label: string;
  value: number;
  color: string;
}

interface ProfileProgressProps {
  totalRating?: number;
  items?: RatingItem[];
  className?: string;
}

const defaultTotalRating = 85;
const defaultItems: RatingItem[] = [
  { label: "Design", value: 30, color: "#212121" },
  { label: "Development", value: 40, color: "#a0a0a0" },
  { label: "QA", value: 20, color: "#f1f1f1" },
  { label: "Management", value: 10, color: "#c9ddef" },
];

const ProfileProgress: React.FC<ProfileProgressProps> = ({
  totalRating = defaultTotalRating,
  items = defaultItems,
  className = "",
}) => {
  const [loading, setLoading] = useState(true); // 👈 Start with loading=true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // ✅ Show content after delay
    }, 1500); // ⏱️ 1.5 seconds delay

    return () => clearTimeout(timer); // 🔥 Clean up on unmount
  }, []);

  const labels = items.map((item) => item.label);
  const series = items.map((item) => item.value);
  const colors = items.map((item) => item.color);

  return (
    <motion.div
      className={clsx(
        "w-full md:w-[40%] md:h-[16.5rem] flex flex-col justify-between bg-white flex-2 dark:bg-[var(--color-themeBackgroundColorDark)] border border-gray-100 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex-1 flex flex-col justify-center">
        {loading ? (
          // 🩶 Skeleton placeholder with full height
          <div className="flex flex-col items-center justify-center h-full space-y-4 animate-pulse">
            <div className="rounded-full bg-gray-200 dark:bg-gray-700 w-32 h-32" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
          </div>
        ) : (
          // 🎯 Actual chart
          <DonutChart
            labels={labels}
            series={series}
            colors={colors}
            title="Rating Distribution"
          />
        )}
      </div>
    </motion.div>
  );
};

export default ProfileProgress;
