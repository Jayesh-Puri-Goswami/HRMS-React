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
  id?: string;
  onClick?: () => void;
}

interface ProfileTabProps {
  actionButtons: ProfileTabButton[];
  currentTab: string;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ actionButtons, currentTab }) => {
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
      {actionButtons.map((button, index) => {
        const isActive = currentTab === (button.id || button.label.toLowerCase().replace(/\s+/g, '-'));
        
        return (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            >
              <button
                onClick={button.onClick}
                className={`transition-all duration-300 ease-in-out transform hover:scale-[1.03] active:scale-[0.97] flex-shrink-0 min-w-[140px] rounded-xl px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md  ${
                  isActive
                    ? "bg-themeGradientColorFrom  text-white shadow-md"
                    : "bg-white dark:bg-white/[0.1] text-gray-700 dark:text-white hover:bg-themeGradientColorFrom hover:text-white dark:hover:bg-gray-500 dark:hover:text-white"
                }`}
              >
                {button.label}
              </button>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);
};

export default ProfileTab;
