import React from "react";

const CommentListSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full animate-pulse my-4">
      {/* Render 3-4 skeleton comment items */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex gap-3 items-start w-full">
          {/* Avatar Skeleton */}
          <div className="w-8 h-8 bg-gray-800 rounded-full shrink-0"></div>

          {/* Comment Body Skeleton */}
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-2">
              <div className="h-3 bg-gray-800 rounded w-28"></div>
              <div className="h-2.5 bg-gray-800 rounded w-16"></div>
            </div>
            <div className="h-3 bg-gray-800 rounded w-full"></div>
            <div className="h-3 bg-gray-800 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentListSkeleton;