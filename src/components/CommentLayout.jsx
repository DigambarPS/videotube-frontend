import React, { useState } from "react";
import Button from "./ui/Button";
import { FaSort } from "react-icons/fa";
import CommentBox from "./ui/CommentBox";
import CommentList from "./CommentList";
import CommentListSkeleton from "./shimmerUI/CommentListSkeleton";
import { useVideoComments } from '../hooks/useComment.js';

const CommentLayout = ({ videoId }) => {
  const { data, isLoading, isError, error } = useVideoComments(videoId);
  
  // Safely extract comments array with fallbacks
  const commentList = data?.pages?.[0]?.docs?.[0]?.comments || [];
  const totalComments = commentList.length;

  function toggleSortBy() {}

  return (
    <div className="w-full dark:bg-black dark:text-white rounded-lg p-2">
      <div className="flex gap-2 items-center my-2">
        <div className="text-sm font-bold">
          {totalComments} {totalComments > 1 ? 'Comments' : 'Comment'}
        </div>
        <Button extra_class="text-xs p-2 rounded-lg" func={toggleSortBy}>
          <div className="flex flex-row gap-2 justify-around items-center">
            <FaSort />
            <p>Sort by</p>
          </div>
        </Button>
      </div>
      <div>
        <CommentBox size="w-full" id={videoId} />
      </div>
      <hr className="my-4" />
      
      {/* Conditional rendering for loading, error, or data */}
      {isLoading ? (
        <CommentListSkeleton />
      ) : isError ? (
        <div className='text-red-400 text-sm text-center m-10'>
          {error?.message || "Failed to load comments"}
        </div>
      ) : totalComments > 0 ? (
        <CommentList commentList={commentList} />
      ) : (
        <div className='text-gray-400 text-sm text-center m-10'>No Comments Yet</div>
      )}
    </div>
  );
};

export default CommentLayout;