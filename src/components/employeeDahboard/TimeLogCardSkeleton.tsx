import type React from "react"
import Card from "../ui/card/Card"

const TimeLogCardSkeleton: React.FC = () => {
  return (
    <Card className="dark:bg-gray-500/40 bg-white">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-5 bg-gray-200 rounded w-20 animate-pulse"></div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="h-5 bg-gray-200 rounded w-16 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="h-8 bg-gray-200 rounded w-12 mx-auto mb-1 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-16 mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="h-5 bg-gray-200 rounded w-20 mb-4 animate-pulse"></div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
            <div>
              <div className="h-5 bg-gray-200 rounded w-16 mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i}>
                <div className="h-4 bg-gray-200 rounded w-48 mb-1 animate-pulse"></div>
                <div className="w-full bg-gray-200 rounded-full h-2 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TimeLogCardSkeleton
