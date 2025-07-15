"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";

interface ProfileTabButton {
  label: string;
  onClick?: () => void;
}

interface ProfileTabProps {
  actionButtons: ProfileTabButton[];
}

const ProfileTab: React.FC<ProfileTabProps> = ({ actionButtons }) => {
  return (
    <div className="max-w-7xl w-full">
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={16}
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      className="profile-tab-swiper"
      style={{ padding: "8px 8px" }}
    >
      {actionButtons.map((button, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
          >
            <button
              onClick={button.onClick}
              className="transition-all duration-300 ease-in-out transform hover:scale-[1.03] active:scale-[0.97] flex-shrink-0 min-w-[140px] rounded-xl bg-white dark:bg-gray-800 px-6 py-3 text-sm font-medium text-gray-700 dark:text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              hover:bg-themeBlueLight hover:text-white dark:hover:bg-gray-500 dark:hover:text-white
              "
            >
              {button.label}
            </button>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};

export default ProfileTab;
