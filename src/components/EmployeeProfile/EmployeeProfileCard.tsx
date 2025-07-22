"use client";

import React, { useEffect, useState } from "react";
// import { employeeProfileCardData } from "../../constant/EmployeeProfile";
import { EmployeeProfileCardProps } from "../../types/EmployeeProfile";
import Card from "../ui/card/Card";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import {
  User,
  Phone,
  Mail,
  Building2,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { AddressModel } from "./EmployeModels/Address.Model";


import { format } from 'date-fns';

// Skeleton Component
const EmployeeCardSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={clsx(
      "bg-white dark:bg-themeBackgroundColorDark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 animate-pulse h-64",
      className
    )}
  >
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-shrink-0 mx-auto lg:mx-0">
        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="flex-1 space-y-4">
        <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-48" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-36" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-44" />
      </div>
    </div>
  </motion.div>
);

// Info Item Component
const InfoItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}> = ({ icon, label, value, className }) => (
  <motion.div
    className={clsx(
      "flex items-center gap-3 group transition-colors duration-200 ",
      className
    )}
  >
    <div className="w-8 h-8 bg-blue-50 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-gray-600 transition-colors duration-200">
      <div className="text-blue-600 dark:text-blue-300 w-4 h-4">{icon}</div>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide ">
        {label}
      </p>
      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate capitalize">
        {value}
      </p>
    </div>
  </motion.div>
);

const EmployeeProfileCard: React.FC<EmployeeProfileCardProps> = ({
  className,
  showAvatar = true,
  showContactInfo = true,
  showDepartmentInfo = true,
  showWorkInfo = true,
  onCardClick,
  employeeProfileCardData
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  
  const formattedDate = employeeProfileCardData?.joiningDate ? format(new Date(employeeProfileCardData.joiningDate), 'dd-MMM-yyyy') : '';
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const IMAGE_URL = `${import.meta.env.VITE_IMAGE_URL}/${employeeProfileCardData?.avatar}`;

  if (isLoading) {
    return (
      <div className="space-y-4">
        <EmployeeCardSkeleton className={className} />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={employeeProfileCardData?.id}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        className={clsx(
          "bg-white lg:h-64 flex justify-center items-center dark:bg-themeBackgroundColorDark rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
          className
        )}
        // onClick={() => onCardClick?.(employeeProfileCardData)}
        tabIndex={0}
        role="button"
        aria-label={`Employee card for ${employeeProfileCardData?.name}`}
      >
        <div className="flex flex-col  w-full gap-3 md:gap-6 lg:flex-row ">
          {/* Avatar */}
          {showAvatar && (
            <div className="flex-shrink-0  mx-auto lg:mx-0">
              <div className={`rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden ring-4 ring-blue-50 dark:ring-gray-600 w-24 h-24 lg:w-32 lg:h-32 ${imageError ? 'p-5': ''}`}>
                {employeeProfileCardData?.avatar ? (
                  <img
                    src={ IMAGE_URL }
                    alt={`${employeeProfileCardData?.name}'s avatar`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/public/images/user/UserSVG.svg";
                      setImageError(true);
                    }}
                  />
                ) : (
                  <User className="text-blue-600 dark:text-blue-300 w-8 h-8 lg:w-12 lg:h-12" />
                )}
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 space-y-4  text-center lg:text-left">
            <h2 className="font-bold text-gray-900 dark:text-white text-xl lg:text-2xl">
              {employeeProfileCardData?.name}
            </h2>
            {showContactInfo && (
              <div className="space-y-1 mb-9 md:mb-2 text-gray-600 dark:text-gray-400">
                
                {employeeProfileCardData?.phone && (
                  <p className="text-sm flex items-center justify-center lg:justify-start gap-2">
                    <Phone className="w-4 h-4" />
                    {employeeProfileCardData?.phone}
                  </p>
                )}
                {employeeProfileCardData?.email && (
                  <p className="text-sm flex items-center justify-center lg:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">
                      {employeeProfileCardData?.email}
                    </span>
                  </p>
                )}
              </div>
            )}
            {showDepartmentInfo && employeeProfileCardData?.department && (
              <InfoItem
                icon={<Building2 className="w-4 h-4 " />}
                label="Department"
                value={employeeProfileCardData?.department}
                className="justify-start gap-0 md:gap-3"
              />
            )}
          </div>

          {/* Work Info */}
          {showWorkInfo && (
            <div className="space-y-4 flex-1 lg:min-w-[200px]">
              {employeeProfileCardData?.designation && (
                <InfoItem
                  icon={<User className="w-4 h-4" />}
                  label="Designation"
                  value={employeeProfileCardData?.designation}
                  className="justify-center lg:justify-start"
                />
              )}
              {employeeProfileCardData?.workShift && (
                <InfoItem
                  icon={<Clock className="w-4 h-4" />}
                  label="Work Shift"
                  value={employeeProfileCardData?.workShift}
                  className="justify-center lg:justify-start"
                />
              )}
              {employeeProfileCardData?.joiningDate && (
                <InfoItem
                  icon={<Calendar className="w-4 h-4" />}
                  label="Joining Date"
                  value={formattedDate}
                  className="justify-center lg:justify-start"
                />
              )}
             
            </div>
          )}
        </div>
      </motion.div>

    
    </AnimatePresence>
  );
};

export default EmployeeProfileCard;
