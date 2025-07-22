import React from "react";
import Card from "../../ui/card/Card";


const HrAllAnnouncementsSkeleton: React.FC = () => {
  return (
    <Card className="bg-white dark:bg-gray-500/40 p-4 shadow-md max-h-[350px] h-[280px] animate-pulse">
      {/* Title Placeholder */}
      <div className="h-6 w-40 bg-gray-200 dark:bg-gray-100 rounded mb-4" />

      {/* Announcement placeholders */}
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-3 p-3 rounded-lg "
          >
            {/* Logo Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-100" />

            {/* Text placeholders */}
            <div className="flex-1 min-w-0 space-y-1">
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-100 rounded" />
              <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-100 rounded" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HrAllAnnouncementsSkeleton;
