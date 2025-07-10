import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-gray-200 p-6 shadow-sm   dark:text-white dark:border-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
