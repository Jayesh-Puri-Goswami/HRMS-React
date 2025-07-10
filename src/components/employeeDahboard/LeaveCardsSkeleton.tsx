import type React from "react"
import Card from "../ui/card/Card"

const LeaveCardsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {[1, 2].map((i) => (
        <Card key={i} className={i === 1 ? "bg-red-50 dark:bg-gray-500/40" : "bg-blue-50 dark:bg-gray-500/40"}>
          <div className="text-center">
            <div className="h-12 bg-gray-200 rounded w-16 mx-auto mb-2 animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded w-40 mx-auto mb-4 animate-pulse"></div>
            <div className="flex justify-center space-x-4">
              {[1, 2].map((j) => (
                <div key={j} className="flex items-center">
                  <div className="w-3 h-3 bg-gray-200 rounded-full mr-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default LeaveCardsSkeleton
