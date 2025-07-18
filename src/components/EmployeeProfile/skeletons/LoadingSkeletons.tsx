"use client";

import { motion } from "motion/react";
import type React from "react";

export const AddressSkeleton: React.FC = () => (
  <div className="space-y-6">
    {[1].map((i) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Skeleton Header */}
        <div className=" dark:border-white/[0.09]">
          <div className="h-6 w-32 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
        </div>

        {/* Skeleton Address Cards */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-white/[0.03] rounded-lg transition-colors duration-200"
          >
            {/* Icon Placeholder */}
            <div className="w-10 h-10 bg-gray-200 dark:bg-white/[0.08] rounded-full animate-pulse"></div>

            {/* Text Placeholder */}
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/3 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
              <div className="h-3 w-2/3 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
            </div>

            {/* Button Placeholder */}
            <div className="w-8 h-8 bg-gray-200 dark:bg-white/[0.08] rounded-full animate-pulse"></div>
          </motion.div>
        ))}
      </motion.div>
    ))}
  </div>
);

export const DocumentsSkeleton: React.FC = () => (
  <div className="space-y-4">
    {[1].map((i) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Skeleton Header */}
        <div className=" dark:border-white/[0.09]">
          <div className="h-6 w-32 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
        </div>

        {/* Skeleton Address Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i }}
          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-white/[0.03] rounded-lg transition-colors duration-200"
        >
             <div
      
            className="w-full h-52 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse mx-2"
          ></div>
        </motion.div>
      </motion.div>
    ))}
  </div>
);
export const BankDetailsSkeleton: React.FC = () => (
  <div className="space-y-4">
    {[1].map((i) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Skeleton Header */}
        <div className=" dark:border-white/[0.09]">
          <div className="h-6 w-32 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
        </div>

        {/* Skeleton Address Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i }}
          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-white/[0.03] rounded-lg transition-colors duration-200"
        >
             <div
      
            className="w-full h-52 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse mx-2"
          ></div>
        </motion.div>
      </motion.div>
    ))}
  </div>
);
export const GraduationSkeleton: React.FC = () => (
  <div className="space-y-4">
    {[1].map((i) => (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Skeleton Header */}
      <div className=" dark:border-white/[0.09] flex justify-between items-center">
        <div className="h-6 w-40 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
        <div className="h-8 w-28 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
      </div>
    
      {/* Skeleton Graduation Cards */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i }}
          className="flex flex-col md:flex-row md:items-start justify-start space-y-4 md:space-y-0 md:space-x-4 p-4 bg-gray-50 dark:bg-white/[0.09] rounded-lg transition-colors duration-200"
        >
          {/* Left Icon and Text */}
          <div className="flex items-center gap-4 flex-1">
            {/* Icon Placeholder */}
            <div className="w-10 h-10 bg-gray-200 dark:bg-white/[0.08] rounded-md animate-pulse"></div>
    
            {/* Text Placeholders */}
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
              <div className="h-3 w-2/3 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse"></div>
            </div>
          </div>
    
          {/* Contact List Placeholders */}
          <div className="w-full md:w-auto space-y-2">
            {[...Array(3)].map((_, j) => (
              <div
                key={j}
                className="flex items-center gap-2 h-3 bg-gray-200 dark:bg-white/[0.08] rounded animate-pulse w-40"
              ></div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
    
    ))}
  </div>
);

export const GenericSkeleton: React.FC = () => (
  <div className="space-y-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse" />
    ))}
  </div>
);
