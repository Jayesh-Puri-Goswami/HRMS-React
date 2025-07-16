import { motion, easeOut } from "framer-motion";
import { useEffect, useState } from "react";

interface GuardianDetailProps {
  guardianDetail: any[];
  onClick?: () => void;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const GuardianDetail = ({
  children,
  guardianDetail,
  onClick,
  isLoading = false,
}: GuardianDetailProps) => {
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setLoading(false), 1000); // Simulate 1s loading
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <motion.div
      className="w-full mt-3 px-2 sm:px-4 py-5 rounded-xl overflow-hidden shadow-sm
                 
                 dark:bg-[var(--color-themeBackgroundColorDark)]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-6">
        {loading
          ? Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4 
                           border-b border-[var(--color-themeBorderColor)] 
                           dark:border-[var(--color-themeBorderColorDark)] pb-3"
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
                <div className="flex-1">
                  <div className="h-4 w-1/2 mb-2 bg-gray-300 dark:bg-gray-700" />
                  <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-600" />
                </div>
                <div className="w-6 h-6 rounded-md bg-gray-300 dark:bg-gray-700" />
              </div>
            ))
          : guardianDetail.map((item: any, idx: number) => (
              <motion.div
                key={item.name || idx}
                className="flex flex-col md:flex-row md:items-center md:justify-start w-full gap-4 md:gap-8 
                           border-b border-[var(--color-themeBorderColor)] 
                           dark:border-[var(--color-themeBorderColorDark)] pb-3"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Icon + Name + Subhead */}
                <div className="flex items-start gap-3 flex-wrap min-w-[180px]">
                  <div className="shrink-0">{item.icon}</div>
                  <div className="flex-1 min-w-[120px]">
                    <h1
                      className="text-lg sm:text-base font-semibold 
                                   text-[var(--color-themeTextColor)] 
                                   dark:text-[var(--color-themeTextColorDark)]"
                    >
                      {item.name}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                      {item.subhead}
                    </p>
                  </div>
                </div>

                {/* Data Items */}
                <div className="flex flex-wrap gap-2 md:gap-4 w-full md:w-auto">
                  {item.data &&
                    item.data.map((dataItem: any, dIdx: number) => (
                      <motion.div
                        key={dIdx}
                        className="p-3 rounded-lg 
                                 bg-gray-50 dark:bg-gray-900 
                                 flex flex-col min-w-[150px] max-w-full"
                        variants={itemVariants}
                      >
                        <div className="flex flex-col gap-1 text-gray-500 dark:text-gray-400 font-medium">
                          <p className="flex items-center gap-2 break-all">
                            <span className="text-themeBlue">
                              {dataItem.icon}
                            </span>
                            {dataItem.phone}
                          </p>
                          <p className="flex items-center gap-2 break-all">
                            <span className="text-themeBlue">
                              {dataItem.icon}
                            </span>
                            {dataItem.email}
                          </p>
                          <p className="flex items-center gap-2 break-all">
                            <span className="text-themeBlue">
                              {dataItem.icon}
                            </span>
                            {dataItem.address}
                          </p>
                          <p className="flex items-center gap-2 break-all">
                            <span className="text-themeBlue">
                              {dataItem.icon}
                            </span>
                            {dataItem.status}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
      </div>
    </motion.div>
  );
};

export default GuardianDetail;
