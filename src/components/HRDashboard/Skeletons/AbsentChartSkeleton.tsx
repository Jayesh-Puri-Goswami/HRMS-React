import React from "react";
import Card from "../../ui/card/Card";

const AbsentChartSkeleton: React.FC = () => {
  return (
    <Card className="bg-white dark:bg-themeBackgroundColorDark h-[280px] p-4 animate-pulse">
      {/* Title Placeholder */}
      <div className="h-6 w-28 bg-gray-200 dark:bg-gray-100 rounded mb-4" />

      {/* Bar Chart Placeholder */}
      <div className="flex items-end justify-between h-[200px] space-x-2 mt-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-gray-200 dark:bg-gray-100 rounded"
            style={{
              width: "12%", // bar width
              height: `${40 + idx * 20}px`, // staggered heights
            }}
          />
        ))}
      </div>
    </Card>
  );
};

export default AbsentChartSkeleton;
