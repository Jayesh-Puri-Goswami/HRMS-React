"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Megaphone } from "lucide-react"
import Card from "../ui/card/Card"

interface Announcement {
  title: string
  startDate: string
  endDate: string
  description: string
}

interface AnnouncementsCardProps {
  announcements: Announcement[]
}

const AnnouncementsCard: React.FC<AnnouncementsCardProps> = ({ announcements }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <Card className="bg-white dark:bg-gray-500/40" >
        <div className="flex items-center space-x-2 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Announcements</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-500">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-white">Title</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-white">Start Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-white">End Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              {announcements.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                    No announcements available
                  </td>
                </tr>
              ) : (
                announcements.map((announcement, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-900">{announcement.title}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{announcement.startDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{announcement.endDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{announcement.description}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  )
}

export default AnnouncementsCard
