import React from "react";
import Card from "../ui/card/Card";
import { AnimatePresence, motion } from "framer-motion";

const AnnouncementsCardSkeleton: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div className=""
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        >
        <Card className="bg-white w-full dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 animate-pulse">
          <div className="flex justify-between items-center mb-3">
            <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          <div className="bg-blue-100 dark:bg-white/[0.2] p-3 rounded mb-4">
            <div className="h-5 w-3/4 bg-blue-200 dark:bg-blue-800 rounded mb-2 mx-auto"></div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 w-4/6 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </div>

          <div className="flex justify-end gap-5">
            <div className="h-7 w-16 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            <div className="h-7 w-16 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnnouncementsCardSkeleton;
