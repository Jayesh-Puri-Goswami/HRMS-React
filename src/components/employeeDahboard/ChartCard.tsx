import type React from "react";
import { motion } from "framer-motion";
import Card from "../ui/card/Card";


const ChartCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="col-span-2"
    >
      <Card className="bg-white dark:bg-white/[0.03]">
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Statistics</h2>
          <div className="flex justify-center items-center h-[53vh] bg-gray-100 dark:bg-white/[0.2] rounded-2xl">
            {/* Placeholder for chart */}
            <span className="text-gray-500 dark:text-white ">Chart Placeholder</span>
          </div>
          <div className="mt-4 flex space-x-4 flex-wrap">
            <span className="text-gray-500 dark:text-white">Productivity</span>
            <span className="text-gray-500 dark:text-white">Availability</span>
            <span className="text-gray-500 dark:text-white">Punctuality</span>
            <span className="text-gray-500 dark:text-white">Lorem</span>
          </div>
          <div className="mt-2 text-gray-500 dark:text-gray-400">Total Rating: 85%</div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ChartCard;
