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
  items = defaultItems,
  className = "",
}) => {
  const labels = items.map((item) => item.label);
  const series = items.map((item) => item.value);
  const colors = items.map((item) => item.color);

  const [theme,setTheme] = useState(false)



  useEffect(() => {
    if(localStorage.getItem('theme') == 'dark') {
      setTheme(true)
    }else{
      setTheme(false)
    }
  }, [theme]);

  return (
    <motion.div
      className={clsx(
        "w-full md:w-[40%] h-full flex flex-col justify-between bg-white flex-2 dark:bg-[var(--color-themeBackgroundColorDark)] border border-gray-100 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <DonutChart
        labels={labels}
        series={series}
        colors={colors}
        title="Rating Distribution"
        theme={theme}
      />
    </motion.div>
  );
};

export default ProfileProgress;
