"use client"

import type React from "react"
import { motion } from "framer-motion"
import Badge from "../ui/badge/BadgeCard"

interface TotalRatingBadgeProps {
  rating: number
}

const TotalRatingBadge: React.FC<TotalRatingBadgeProps> = ({ rating }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Badge variant="success" className="bg-[#76bc7d] text-white px-4 py-2 text-lg font-semibold">Total Rating {rating}%</Badge>
    </motion.div>
  )
}

export default TotalRatingBadge
