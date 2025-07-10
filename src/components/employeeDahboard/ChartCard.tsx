import type React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Card from "../ui/card/Card";


const ChartCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="col-span-2"
    >
      <Card className="bg-white dark:bg-gray-500/40">
        {/* <div className="flex items-center space-x-2 mb-6">
          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Meeting Schedule</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Title</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Start Time</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">End Time</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Description</th>
              </tr>
            </thead>
            <tbody>
              {meetings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                    No meetings scheduled
                  </td>
                </tr>
              ) : (
                meetings.map((meeting, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-900">{meeting.title}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{meeting.date}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{meeting.startTime}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{meeting.endTime}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{meeting.description}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div> */}
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Statistics</h2>
          <div className="flex justify-center items-center h-96 bg-gray-100 dark:bg-gradient-to-r dark:from-gray-500 to-gray-500">
            {/* Placeholder for chart */}
            <span className="text-gray-500 dark:text-white ">Chart Placeholder</span>
          </div>
          <div className="mt-4 flex space-x-4">
            <span className="text-gray-500 dark:text-white">Productivity</span>
            <span className="text-gray-500 dark:text-white">Availability</span>
            <span className="text-gray-500 dark:text-white">Punctuality</span>
            <span className="text-gray-500 dark:text-white">Lorem</span>
            <span className="text-gray-500 dark:text-white">Lorem</span>
          </div>
          <div className="mt-2 text-gray-500 dark:text-gray-400">Total Rating: 85%</div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ChartCard;
