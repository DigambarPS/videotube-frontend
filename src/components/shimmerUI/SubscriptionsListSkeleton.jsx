import React from 'react'

const SubscriptionsListSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
      {/* Header Shimmer */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-7 w-40 bg-gray-800 rounded animate-pulse" />
      </div>

      {/* Grid List Shimmer */}
      <div className="grid grid-cols-1 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-800 animate-pulse"
          >
            <div className="flex items-center gap-4 w-full">
              {/* Avatar Shimmer */}
              <div className="w-12 h-12 bg-gray-700 rounded-full flex-shrink-0" />
              
              <div className="flex flex-col gap-2 w-full">
                {/* Channel Name Shimmer */}
                <div className="h-4 bg-gray-700 rounded w-3/4" />
                {/* Username / Subscriptions Shimmer */}
                <div className="h-3 bg-gray-700 rounded w-1/2" />
              </div>
            </div>

            {/* Button Shimmer */}
            <div className="w-24 h-9 bg-gray-700 rounded-full flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubscriptionsListSkeleton