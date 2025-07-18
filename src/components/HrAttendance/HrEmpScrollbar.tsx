"use client";

import { motion } from "framer-motion";
// import type { Employee } from "../../types/Employee.type"

import clsx from "clsx";
import { Skeleton } from "./skeletons/CardSkeleton";
import { Employee } from "../../types/HrAttendance.type";
// Remove problematic Swiper CSS imports that cause module errors
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
``
interface EmployeeSidebarProps {
  employees: Employee[];
  selectedEmployeeId?: string;
  onEmployeeSelect?: (employeeId: string) => void;
  isLoading?: boolean;
  className?: string;
}

const EmployeeSidebarSkeleton = () => (
  <div className="space-y-2">
    {Array.from({ length: 8 }).map((_, i) => (
      <Skeleton key={i} className="h-12 w-full" />
    ))}
  </div>
);

export function EmployeeSidebar({
  employees,
  selectedEmployeeId,
  onEmployeeSelect,
  isLoading = false,
  className,
}: EmployeeSidebarProps) {
  if (isLoading) {
    return (
      <div className={clsx("w-full   p-4", className)}>
        <div className="mb-4">
          <Skeleton className="h-6 w-20" />
        </div>
        <EmployeeSidebarSkeleton />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={clsx("w-full h-full pb-4 pr-4", className)}
    >
      <h2 className="text-lg font-semibold text-slate-700 dark:text-white dark:border-white/[0.09] py-4  mb-4 hidden md:block">
        Employee
      </h2>
      <div style={{ height: 400, maxHeight: 500 }}>
        <Swiper
          direction="vertical"
          slidesPerView={5}
          spaceBetween={8}
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="employee-sidebar-swiper"
          style={{ height: "100%" }}
        >
          {employees.map((employee, index) => (
            <SwiperSlide key={employee.name} style={{ height: "auto" }}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onEmployeeSelect?.(employee.id)}
                className={clsx(
                  "w-full text-left md:p-3 p-1 rounded-lg transition-all duration-200",
                  selectedEmployeeId === employee.id
                    ? "bg-slate-600 text-white shadow-md  "
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-white/[0.03]"
                )}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={employee.image}
                    alt="Employee image"
                    onError={(e) => {
                      e.currentTarget.src = "https://randomuser.me/api/portraits/men/1.jpg";
                    }}
                    onLoad={(e) => {
                      e.currentTarget.src = employee.image || "";
                    }}    
                    className=" w-10 h-10  rounded-full"
                  />
                  <span className="w-10 h-10 md:w-auto md:h-auto font-medium hidden  md:block">
                    {employee.name}
                  </span>
                </div>
              </motion.button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
