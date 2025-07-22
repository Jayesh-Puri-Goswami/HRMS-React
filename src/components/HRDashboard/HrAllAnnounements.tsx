import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Card from '../ui/card/Card'
import { Announcement } from '../../types/HRDashboard'
import { CardSkeleton } from '../HrAttendance/skeletons/CardSkeleton'
import { Easing } from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles (ensure you have installed swiper: npm install swiper)
// import 'swiper/css';
// import 'swiper/css/pagination';

// import required modules
import { Mousewheel } from 'swiper/modules';
import HrAllAnnouncementsSkeleton from './Skeletons/HrAllAnnouncementsSkeleton'
// Local prop type definition
interface HrAllAnnounementsProps {
  isLoading?: boolean;
  displayAnnouncements: Announcement[];
  onAnnouncementClick?: (announcement: Announcement) => void;
}

// Animation variants for the card
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as Easing } },

};

const HrAllAnnounements = ({
  isLoading,
  displayAnnouncements,
  onAnnouncementClick,
}: HrAllAnnounementsProps) => {
  if (isLoading) return <HrAllAnnouncementsSkeleton />;
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className=""
    >
      <Card className="bg-white dark:bg-[var(--color-themeBackgroundColorDark)] p-4 shadow-md max-h-[350px] h-[280px] flex flex-col overflow-hidden">
        <div className="mb-2">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">All Announcements</h1>
        </div>
       
          <div className="flex-1 min-h-0">
            <Swiper
              direction={'vertical'}
              slidesPerView={3}
              spaceBetween={-40}
              mousewheel={true}
              modules={[Mousewheel]}
              className="mySwiper h-full"
              style={{ height: '260px' }}
            >
              {displayAnnouncements.map((announcement: Announcement, index: number) => (
                <SwiperSlide className='flex flex-col justify-center' key={announcement.id} >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors group"
                    onClick={() => onAnnouncementClick?.(announcement)}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-semibold shadow group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: announcement.logoColor }}
                    >
                      {announcement.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{announcement.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {announcement.company}, {announcement.location} - {announcement.date}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
  
      </Card>
    </motion.div>
  )
}

export default HrAllAnnounements
