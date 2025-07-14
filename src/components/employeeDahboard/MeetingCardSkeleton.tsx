import React from "react";
import Card from "../ui/card/Card";

const MeetingCardSkeleton: React.FC = () => {
  return (
    <Card className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 animate-pulse w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-5 w-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="flex items-center p-3 mb-2 rounded-lg bg-gray-100 dark:bg-white/5"
        >
          <div className="w-8 h-8 rounded bg-gray-300 dark:bg-white/10 mr-3"></div>
          <div className="flex-1 space-y-1">
            <div className="h-4 w-40 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-3 w-28 bg-gray-200 dark:bg-gray-500 rounded"></div>
          </div>
          <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full ml-2"></div>
        </div>
      ))}

      <div className="h-4 w-36 bg-blue-200 dark:bg-blue-800 rounded mx-auto mt-4"></div>
    </Card>
  );
};

export default MeetingCardSkeleton;
