import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/card/Card";

const ChartCardSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      className="col-span-2"
    >
      <Card className="bg-white dark:bg-white/[0.03] p-6">
        <div className="animate-pulse space-y-6">
          {/* Heading Skeleton */}
          <div className="w-32 h-5 bg-gray-200 dark:bg-white/10 rounded"></div>

          {/* Chart Box Skeleton */}
          <div className="h-[53vh] w-full bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center">
            <div className="w-20 h-20 bg-gray-300 dark:bg-white/10 rounded-full"></div>
          </div>

          {/* Chart Labels Skeleton */}
          <div className="flex gap-4 mt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-20 h-4 bg-gray-200 dark:bg-white/10 rounded"></div>
            ))}
          </div>

          {/* Footer Total Rating Skeleton */}
          <div className="w-36 h-4 mt-2 bg-gray-200 dark:bg-white/10 rounded"></div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ChartCardSkeleton;
