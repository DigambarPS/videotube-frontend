import React from 'react'

const VideoCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="w-full aspect-video bg-gray-800 rounded-xl"></div>

      {/* Details Skeleton */}
      <div className="flex gap-3 px-1">
        {/* Channel Avatar Skeleton */}
        <div className="w-10 h-10 bg-gray-800 rounded-full shrink-0"></div>

        {/* Text Lines Skeleton */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-4 bg-gray-800 rounded w-5/6"></div>
          <div className="h-3 bg-gray-800 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export default VideoCardSkeleton