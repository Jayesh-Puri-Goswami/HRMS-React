import React from "react";
import Card from "../ui/card/Card";
import { motion } from "framer-motion";

interface Meeting {
  day: string;
  title: string;
  time: string;
  isActive?: boolean;
}

const MeetingCard: React.FC = () => {
  const meetings: Meeting[] = [
    { day: "Sat", title: "Interview", time: "10:00 am - 11:30am", isActive: false },
    { day: "Mon", title: "Managers Meeting", time: "10:00 am - 11:30am", isActive: true },
    { day: "Sat", title: "Meeting For Lorem Ipsum", time: "10:00 am - 11:30am", isActive: false },
  ];

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div className="w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    >
     <Card className="bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 w-full ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium">Meetings</h2>
        <div className="py-1 px-3 border rounded-lg text-sm text-gray-500 dark:text-gray-400 border-gray-300 dark:border-white/20">
          Today, {currentDate}
        </div>
      </div>

      {meetings.map((meeting, index) => (
        <div
          key={index}
          className={`flex items-center p-3 mb-2 rounded-lg transition ${
            meeting.isActive
              ? "bg-blue-100 dark:bg-blue-900/20"
              : "bg-gray-100 dark:bg-white/5"
          }`}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-300 dark:bg-white/10 mr-3">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              {meeting.day}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 dark:text-gray-100">
              {meeting.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {meeting.time}
            </p>
          </div>
          <div className="text-gray-400 dark:text-gray-500 text-xl">⋮</div>
        </div>
      ))}

      <div className="text-center mt-4">
        <a href="#" className="text-blue-500 dark:text-blue-300 hover:underline">
          See All Announcement
        </a>
      </div>
    </Card>
    </motion.div>
  );
};

export default MeetingCard;
