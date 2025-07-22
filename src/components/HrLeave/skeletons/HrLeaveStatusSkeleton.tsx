import React from "react";
import Card from "../../ui/card/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HrLeaveCardSkeletonProps {
  count: number;
}

export const HrLeaveCardSkeleton = ({ count }: HrLeaveCardSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card
          key={index}
          className="bg-white text-center dark:bg-white/[0.03] w-full h-32 flex flex-col justify-center items-center"
        >
          <div className="animate-pulse flex flex-col items-center space-y-2">
            {/* Value Placeholder */}
            <div className="h-8 w-16 rounded bg-gray-200 dark:bg-gray-700"></div>
            {/* Label Placeholder */}
            <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </Card>
      ))}
    </>
  );
};

export const HrLeaveStatusTableSkeleton = () => {
  return (
    <>
      <div className="  dark:bg-white/[0.03] w-full h-32 flex flex-col justify-center items-center">
        <div className="animate-pulse w-full p-1  h-full items-center space-y-2">
          <div className="w-full rounded flex justify-between ">
            <div className="h-12 w-72 rounded-2xl bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex justify-between items-center gap-2">
              <ChevronLeft />
              <div className="h-8 w-16 rounded bg-gray-200 dark:bg-gray-700"></div>
              <ChevronRight />
            </div>
          </div>

          <div className="w-full flex justify-between items-center bg-gray-200 dark:bg-gray-700">
            

          </div>
        </div>
      </div>
    </>
  );
};
