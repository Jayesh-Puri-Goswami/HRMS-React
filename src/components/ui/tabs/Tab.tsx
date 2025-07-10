import React from "react";
import clsx from "clsx";

interface TabProps {
  title: string;
  className?: string;
  isActive : 'DailyLog' | 'AttendanceLog';
  setIsActive : (isActive : string) => void
}

const Tab: React.FC<TabProps> = ({ title, className,isActive, setIsActive }) => {
  return (
    <div
      className={clsx(
        `rounded-t-xl px-6 py-4 shadow-sm ${isActive = 'DailyLog' ? 'bg-white' : 'bg-themeBackgroundColor'} `,
        className
      )}
      onClick={setIsActive}
    >
      {title}
    </div>
  );
};

export default Tab;
