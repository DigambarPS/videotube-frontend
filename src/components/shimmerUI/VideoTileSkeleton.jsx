import React from "react";

const VideoTileSkeleton = () => {
  return (
    <div className="flex flex-row dark:bg-black p-2 dark:text-white gap-1 rounded-lg animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="w-2/3 h-24 bg-gray-700 rounded-lg"></div>

      {/* Content Skeleton */}
      <div className="flex flex-col gap-2 pl-1 w-full justify-center">
        {/* Video Title Skeleton (2 lines) */}
        <div className="flex flex-col gap-1.5">
          <div className="h-3.5 bg-gray-700 rounded w-full"></div>
          <div className="h-3.5 bg-gray-700 rounded w-3/4"></div>
        </div>

        {/* Channel Name & Metadata Skeleton */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          <div className="flex gap-2 items-center">
            <div className="h-2.5 bg-gray-700 rounded w-1/3"></div>
            <div className="h-2.5 bg-gray-700 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTileSkeleton;
