import React from "react";

const ChannelSkeleton = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white animate-pulse">
      {/* Banner Skeleton */}
      <div className="w-full h-32 md:h-56 bg-gray-200 dark:bg-gray-800"></div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Channel Header Info Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 gap-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-4">
            {/* Avatar Skeleton */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 dark:bg-gray-800 rounded-full -mt-10 sm:-mt-12 shrink-0"></div>
            
            {/* Text Details Skeleton */}
            <div className="flex flex-col gap-2">
              <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded w-48"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-32"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-800 rounded w-64"></div>
            </div>
          </div>

          {/* Subscribe Button Skeleton */}
          <div className="h-10 w-28 bg-gray-300 dark:bg-gray-800 rounded-full"></div>
        </div>

        {/* Navigation Tabs Skeleton */}
        <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-800 py-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-12"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-16"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-14"></div>
        </div>

        {/* Video Grid Section Skeleton */}
        <div className="py-6">
          <div className="h-5 bg-gray-300 dark:bg-gray-800 rounded w-32 mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-full h-40 bg-gray-300 dark:bg-gray-800 rounded-xl"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-4/5"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-800 rounded w-2/5"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChannelSkeleton;