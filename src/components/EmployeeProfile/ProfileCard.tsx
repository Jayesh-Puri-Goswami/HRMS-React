"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Calendar, Clock, Briefcase, Image } from "lucide-react";
import PopupBox from "../ui/popup/PopupBox";

interface EmployeeData {
  id: string;
  name: string;
  phone: string;
  email: string;
  department: string;
  designation: string;
  workShift: string;
  joiningDate: string;
  avatar?: string;
}
interface EmployeeCardProps {
  employee: EmployeeData;
  className?: string;
  children?: React.ReactNode;
  onDocumentsClick?: () => void;
  onBankDetailClick?: () => void;
  onSalaryOverviewClick?: () => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  className,
  children,
}) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading (you can replace with real API loading state)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={clsx(
        "max-w-5xl w-full md:w-auto flex-3 h-[17rem]",
        "transition-transform duration-500 ease-in-out  ",
        className
      )}
    >
      <div
        className={clsx(
          " rounded-3xl flex-col px-6  bg-white dark:bg-black  dark:border-gray-800 border p-4 shadow-sm md:p-6 lg:p-8 transition-colors"
        )}
      >
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="flex flex-col  items-center justify-between md:flex-row gap-6 ">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

const SkeletonLoader = () => (
  <div className="flex flex-col  md:justify-between md:flex-row gap-6 animate-pulse">
    {/* Left Side */}
    <div className="w-full md:w-[70%] h-[13rem] flex flex-col md:flex-row items-center md:items-start gap-4">
      {/* Avatar */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <div className="flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Name */}
        <div className="h-6 md:h-8 w-32 md:w-48 bg-gray-200 dark:bg-gray-700 rounded" />
        {/* Phone & Email */}
        <div className="space-y-2">
          <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        {/* Department */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="flex-1 space-y-1">
            <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="w-full md:w-[30%] flex px-4 flex-col md:items-start items-center gap-4">
      <div className="w-full space-y-4 ">
        {/* Designation */}
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        {/* Work Shift */}
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        {/* Joining Date */}
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default EmployeeCard;
