"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
import { ProfileTabProps } from "../../types/EmployeeProfile";

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
          const isActive =
            currentTab ===
            (button.id || button.label.toLowerCase().replace(/\s+/g, "-"));

          return (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              >
                <button
                  onClick={button.onClick}
                  className={`relative transition-all duration-300 ease-in-out transform hover:scale-[1.03] active:scale-[0.97] flex-shrink-0 min-w-[140px] rounded-xl px-6 py-3 text-sm font-medium shadow-sm
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.09] dark:text-white hover:text-themeGradientColorFrom dark:hover:text-white "
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-bg"
                      className="absolute inset-0 bg-themeGradientColorFrom rounded-xl shadow-md"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{button.label}</span>
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
