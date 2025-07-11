import React from "react";

interface ProfileTabButton {
  label: string;
  onClick?: () => void;
}

interface ProfileTabProps {
  actionButtons: ProfileTabButton[];
}

const ProfileTab: React.FC<ProfileTabProps> = ({ actionButtons }) => {
  return (
    <div className="">
      <div className="flex space-x-4 px-1 py-2">
        {actionButtons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className="min-w-[140px] rounded-xl bg-white dark:bg-white/10 px-20 py-3 text-sm font-medium text-gray-700 dark:text-white shadow-sm transition-all duration-200 hover:bg-gray-100 dark:hover:bg-white/20 hover:shadow-md focus:outline-none"
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTab;
