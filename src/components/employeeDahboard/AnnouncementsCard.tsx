import React, { useState } from "react";
import Card from "../ui/card/Card";

interface Announcement {
  title: string;
  description: string;
  date: string;
}

const AnnouncementsCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const announcements: Announcement[] = [
    {
      title: "Announcement Title",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      date: `Today, ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}`,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : announcements.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < announcements.length - 1 ? prev + 1 : 0));
  };

  const currentAnnouncement = announcements[currentIndex];

  return (
    <Card className="bg-white dark:bg-white/[0.03] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-medium mb-2">Announcement</h2>
        <div className="py- px-4 border rounded-lg text-sm text-gray-600 dark:text-gray-300 mb-2">
          {currentAnnouncement.date}
        </div>
      </div>
      <div className="bg-blue-100 dark:bg-white/[0.2] p-3 rounded mb-4">
        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1 text-center">
          {currentAnnouncement.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {currentAnnouncement.description}
        </p>
      </div>
      <div className="flex justify-end gap-5">
        <button
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-0.5 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-0.5 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </Card>
  );
};

export default AnnouncementsCard;
