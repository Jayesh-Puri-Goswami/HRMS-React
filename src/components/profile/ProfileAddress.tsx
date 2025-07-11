import React from "react";
import { Image, SquarePen } from "lucide-react";

interface ProfileAddressProps {
  children?: React.ReactNode;
}

const ProfileAddress: React.FC<ProfileAddressProps> = ({
  children = (
    <>
      <div className="flex items-center gap-2 shrink-0">
        <Image className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full" />
        <h1 className="text-gray-500 whitespace-nowrap">Permanent Address</h1>
      </div>
      <p className="text-gray-500 min-w-[20rem] whitespace-nowrap">
        124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)
      </p>
      <div className="shrink-0">
        <SquarePen
          className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full cursor-pointer"
          onClick={() => {}}
        />
      </div>
    </>
  ),
}) => {
  return (
    <div className="w-full mt-3 px-4 py-5 overflow-x-auto">
      <div className="min-w-max flex items-center justify-between gap-6">
        {children}
      </div>
    </div>
  );
};

export default ProfileAddress;
