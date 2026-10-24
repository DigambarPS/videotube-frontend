import React from "react";
import VideoCard from "../components/VideoCard.jsx";
import SideBar from "../components/sideBar.jsx";
import { useVideos } from "../hooks/useVideo.js";
import { Link, useSearchParams } from "react-router-dom";
import { formatViews, formatTimeSinceUpload } from "../utils/formatters.js";
import VideoCardSkeleton from "../components/shimmerUI/VideoCardSkeleton.jsx";

const Home = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useVideos(
    1,
    20,
    null,
    null,
    search,
  );
  const videos = data?.pages.flatMap((page) => page.docs) || [];

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-900 text-white">


      
      {/* Video Grid */}
      <div className="flex-1 p-4">
      {isLoading ? (
        // Show a grid of skeletons while loading
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <VideoCardSkeleton key={index} />
          ))}
        </div>
      ) : isError ? (
        <p className="text-center text-red-500 py-10">Failed to load videos.</p>
      ) : videos?.length !== 0 ? (
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos?.map((video) => {
              return (
                <VideoCard
                  avatarSrc={video.owner[0]?.avatar}
                  thumbnailSrc={video.thumbnail}
                  videoTitle={video.title}
                  channelName={video.owner[0]?.fullName}
                  views={formatViews(video.views)}
                  timeFromPosting={formatTimeSinceUpload(video.createdAt)}
                  videoId={video._id}
                  key={video._id}
                />
              );
            })}
          </div>
        
      ) : (
        <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
          <p className="text-lg font-medium">No videos found</p>
          {search && (
            <p className="text-sm mt-1">
              Try searching for something else or clearing your search filter.
            </p>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default Home;
