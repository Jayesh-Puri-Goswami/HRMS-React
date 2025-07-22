import React from "react";
import { motion } from "framer-motion";
import Card from "../../ui/card/Card";

// Loading Skeleton for Charts
const ChartSkeleton: React.FC = () => (

    <Card className="bg-white h-[280px] dark:bg-[var(--color-themeBackgroundColorDark)] p-4 animate-pulse">

      <div className="h-6 w-24 bg-gray-200 dark:bg-gray-100 rounded mb-4" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-fit mt-10"
      >
        <div className="flex px-4 flex-col md:flex-row justify-between items-center gap-6">
          {/* Donut Chart Placeholder */}
          <div className="rounded-full bg-gray-200 dark:bg-gray-100 w-[130px] h-[130px]" />

          {/* Legend Placeholder */}
          <div className="flex flex-col space-y-3 w-full md:w-auto">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm w-full"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-100 rounded" />
                </div>
                <div className="h-4 w-8 bg-gray-200 dark:bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Card>


);

export default ChartSkeleton;
