"use client";

import React from "react";
import clsx from "clsx";
import { Calendar, Clock, Briefcase, Image } from "lucide-react";


interface EmployeeCardProps {
  employee: {
    id: string;
    name: string;
    phone: string;
    email: string;
    department: string;
    designation: string;
    workShift: string;
    joiningDate: string;
    avatar?: string;
  };
  className?: string;
  children?: string;
  onDocumentsClick?: () => void;
  onBankDetailClick?: () => void;
  onSalaryOverviewClick?: () => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  className,
  children,
}) => {
  return (
    <div className={clsx("max-w-5xl flex-3", className)}>
      <div className="mb-6 rounded-2xl bg-white dark:bg-white/[0.03] dark:border-white/10 border p-4 shadow-sm md:p-6 lg:p-8 transition-colors">
        <div className=" flex items-center justify-around">
          {/* Left Side */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-full bg-themeBlueLight dark:bg-white/10 text-gray-800 dark:text-white">
                  {employee.avatar ? (
                    <img
                      src={employee.avatar}
                      alt={employee.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <Image className="h-10 w-10 md:h-14 md:w-14" />
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-2">
                <h2 className="text-base font-semibold text-gray-500 dark:text-gray-300 md:text-2xl">
                  {employee.name}
                </h2>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  <div>{employee.phone}</div>
                  <div>{employee.email}</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-gray-800">
                    <Image className="h-4 w-4 dark:text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Department
                    </div>
                    <div className="text-base font-medium text-gray-900 dark:text-white">
                      {employee.department}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Stack details vertically on smaller screens */}
          <div className="lg:col-span-5 space-y-4 flex flex-col">
            <ProfileDetail
              icon={Briefcase}
              label="Designation"
              value={employee.designation}
            />
            <ProfileDetail
              icon={Clock}
              label="Work Shift"
              value={employee.workShift}
            />
            <ProfileDetail
              icon={Calendar}
              label="Joining Date"
              value={employee.joiningDate}
            />
          </div>
        </div>
      </div>

      {/* Custom Action Tabs */}
      {children}
    </div>
  );
};

interface ProfileDetailProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="flex items-start gap-2">
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-gray-800">
      <Icon className="h-4 w-4 text-gray-800 dark:text-white" />
    </div>
    <div className="flex-1">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-base font-medium text-gray-900 dark:text-white">
        {value}
      </div>
    </div>
  </div>
);

export default EmployeeCard;
