import React from "react";
import VideoTile from '../components/VideoTile.jsx';
import VideoTileSkeleton from "../components/shimmerUI/VideoTileSkeleton.jsx";
import { useVideos } from "../hooks/useVideo.js";
import { formatViews, formatTimeSinceUpload } from "../utils/formatters.js";

const RecommendationList = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useVideos(
      1,
      10,
      null,
      null,
      null,
    );
    const videos = data?.pages.flatMap((page) => page.docs) || [];

  return (
    <section className="w-full flex flex-col gap-3 p-1">
      {isLoading ? (
        <div className="w-full flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <VideoTileSkeleton key={index} />
          ))}
        </div>
      ) : isError ? (
        <p className="text-center text-red-500 py-10">Failed to load videos.</p>
      ) : videos?.length !== 0 ? (
        <div className="w-full flex flex-col gap-3">
          {videos?.map((video) => {
            return (
              <VideoTile
                thumbnailSrc={video?.thumbnail}
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
        </div>
      )}
    </section>
  );
};

export default RecommendationList;