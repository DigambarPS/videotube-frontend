import React from "react";

const VideoDescriptionSkeleton = () => {
  return (
    <div className="flex flex-col w-full animate-pulse my-2">
      {/* Title Skeleton */}
      <div className="h-6 bg-gray-800 rounded w-4/5 mb-3 p-1"></div>

      {/* Channel info & Action buttons row */}
      <div className="flex flex-col sm:flex-row sm:items-center my-2 justify-between gap-3">
        {/* Channel Details Skeleton */}
        <div className="flex gap-2 px-1 items-center">
          <div className="w-8 h-8 bg-gray-800 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-1.5">
            <div className="h-3.5 bg-gray-800 rounded w-28"></div>
            <div className="h-3 bg-gray-800 rounded w-16"></div>
          </div>
          <div className="h-7 w-20 bg-gray-800 rounded-xl ml-4"></div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex flex-wrap gap-1 items-center">
          <div className="h-8 w-24 bg-gray-800 rounded-xl"></div>
          <div className="h-8 w-16 bg-gray-800 rounded-xl"></div>
          <div className="h-8 w-16 bg-gray-800 rounded-xl"></div>
        </div>
      </div>

      {/* Description Box Skeleton */}
      <div className="bg-gray-900 ml-1 rounded-xl p-3 flex flex-col gap-2 mt-2">
        <div className="flex gap-3">
          <div className="h-3 bg-gray-800 rounded w-16"></div>
          <div className="h-3 bg-gray-800 rounded w-28"></div>
        </div>
        <div className="flex flex-col gap-1.5 mt-2">
          <div className="h-3 bg-gray-800 rounded w-full"></div>
          <div className="h-3 bg-gray-800 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoDescriptionSkeleton;