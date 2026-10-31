import React from 'react'

const SubscriptionsSkeleton = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      {/* Top Header & Filter Button Shimmer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="h-7 w-24 bg-zinc-800 rounded animate-pulse" />
        <div className="h-10 w-36 bg-zinc-800 rounded-full animate-pulse" />
      </div>

      {/* Video Grid Shimmer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-3 animate-pulse">
            {/* Thumbnail Shimmer */}
            <div className="w-full aspect-video bg-zinc-800 rounded-xl" />
            
            {/* Details Shimmer */}
            <div className="flex gap-3 items-start">
              {/* Avatar Shimmer */}
              <div className="w-9 h-9 bg-zinc-800 rounded-full flex-shrink-0" />
              
              <div className="flex flex-col gap-2 w-full">
                {/* Title Shimmer */}
                <div className="h-4 bg-zinc-800 rounded w-full" />
                <div className="h-4 bg-zinc-800 rounded w-2/3" />
                
                {/* Channel & Views Shimmer */}
                <div className="h-3 bg-zinc-800 rounded w-1/2 mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubscriptionsSkeleton