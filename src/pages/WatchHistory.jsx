import React from "react";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import WatchHistorySkeleton from "../components/shimmerUI/WatchHistorySkeleton";
import { useUserWatchHistory } from "../hooks/useUser";

const WatchHistory = () => {
  const { user } = useAuth();

  const { data, isLoading, isError } = useUserWatchHistory(
    1,
    15,
    user?._id,
    "desc",
    null,
  );
  const videos = data?.pages.flatMap((page) => page.docs) || [];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
      {isLoading && <WatchHistorySkeleton />}
      {/* Top Header & Filter Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Watch History</h1>
      </div>

      {/* Video Grid */}
      {videos.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos?.map((obj) => {
            const video = obj.videoData[0];
            return (
            <VideoCard
              avatarSrc={video?.owner?.avatar}
              thumbnailSrc={video?.thumbnail}
              videoTitle={video?.title}
              channelName={video?.owner?.fullName}
              views={video?.views}
              timeFromPosting={video?.createdAt}
              videoId={video._id}
              key={video._id}
            />
          )})}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
          <p className="text-lg font-medium">
            No videos found in watch history
          </p>
        </div>
      )}
    </div>
  );
};

export default WatchHistory;
