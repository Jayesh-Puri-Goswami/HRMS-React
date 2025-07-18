import { motion } from "motion/react";
import type React from "react";
import Card from "../../ui/card/Card";
import clsx from "clsx";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };

export const CardSkeleton: React.FC = () => (
  <div className="space-y-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Skeleton Header */}
      <Card className=" dark:border-white/[0.09] h-24 mt-1 rounded-2xl flex flex-col gap-2 p- bg-white w-full  dark:bg-white/[0.08]  animate-pulse">
        <div className="h-6 w-32 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
        <div className="h-6 w-40 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
      </Card>
    </motion.div>
  </div>
);
export const EmployeeSidebarSkeleton: React.FC = () => (
  <div className="space-y-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Skeleton Header */}
      <Card className=" dark:border-white/[0.09] h-24 mt-1 rounded-2xl flex flex-col gap-2 p- bg-white w-full  dark:bg-white/[0.08]  animate-pulse">
        <div className="h-6 w-32 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
        <div className="h-6 w-40 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
      </Card>
    </motion.div>
  </div>
);
export const HrDailyLogSkeleton: React.FC = () => (
  <div className="space-y-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Skeleton Header */}
      <div className=" dark:border-white/[0.09] h-24 w mt-1 rounded-2xl flex flex-col gap-2 p- bg-white w-full  dark:bg-white/[0.08]  animate-pulse">
        <div className="flex justify-between gap-2">
          <div className="h-10 w-60 bg-gray-200 rounded-2xl dark:bg-white/[0.08]  animate-pulse"></div>
          <div className="flex gap-2">
            <div className="h-10 w-32 bg-gray-200 rounded-2xl dark:bg-white/[0.08]  animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-2xl dark:bg-white/[0.08]  animate-pulse"></div>
          </div>
        </div>
        <div className="h-32  w-full mt-5 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
      </div>
    </motion.div>
  </div>
);
