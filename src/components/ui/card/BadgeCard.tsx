import React from 'react'

interface StatCardProps {
  totalHours?: string;
  label?: string;
  className?: string;
}

const BadgeCard: React.FC<StatCardProps> = ({
  totalHours = "000:00:00",
  label = "Total schedule hour",
  className = "",
}) => {
  return (
    <div
      className={`bg-themeBackgroundColor dark:bg-white/[0.05] rounded-xl shadow w-[20vw] gap-1.5 py-4  flex flex-col items-center justify-center border dark:border-white/10 ${className}`}
    >
      <p className="text-2xl sm:text-3xl md:text-xl font-semibold text-gray-800 dark:text-white">
        {totalHours}
      </p>
      <p className="text-sm sm:text-base md:text-sm text-gray-500 dark:text-white/50 text-center">
        {label}
      </p>
    </div>
  );
};

export default BadgeCard