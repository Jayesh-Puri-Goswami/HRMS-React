"use client"

import type React from "react"

export const AddressSkeleton: React.FC = () => (
  <div className="space-y-6">
    {[1, 2].map((i) => (
      <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
      </div>
    ))}
  </div>
)

export const DocumentsSkeleton: React.FC = () => (
  <div className="space-y-4">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
            <div className="h-3 bg-gray-200 rounded animate-pulse w-24" />
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
          <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    ))}
  </div>
)

export const GenericSkeleton: React.FC = () => (
  <div className="space-y-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse" />
    ))}
  </div>
)
