import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";
import { useAuth } from "../context/authContext";
import Avatar from "../components/ui/Avatar";
import { useChannelVideos } from "../hooks/useVideo";
import VideoCard from "../components/VideoCard";
import ChannelSkeleton from "../components/shimmerUI/ChannelSkeleton";
import { formatTimeSinceUpload, formatViews } from "../utils/formatters";
import { useUserChannelProfile } from "../hooks/useUser";
import { useToggleSubscribe } from "../hooks/useSubscription";
import { useParams } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

const Channel = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const { user } = useAuth();
  const { channelId } = useParams();

  const tabs = ["Home", "Videos", "About"];

  // For channel videos
  const { data, isLoading: isVideosLoading, isError } = useChannelVideos(1, 15, channelId, 'desc');
  const Videos = data?.pages.flatMap((page) => page.docs) || [];

  // For channel data
  const {
    data: channelData,
    isLoading: isChannelLoading,
    isError: isChannelError,
  } = useUserChannelProfile(channelId);

  const isSubscribed = channelData?.isSubscribed ?? false;
  const { mutate: toggleSubscribe } = useToggleSubscribe(channelData?._id);

  const handleSubscribeClick = () => {
    toggleSubscribe();
  };

  // 2. Return the separate skeleton if channel data is loading
  if (isChannelLoading) {
    return <ChannelSkeleton />;
  }

  if (isChannelError || !channelData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-white">
        <p className="text-lg font-medium text-red-500">Failed to load channel profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white font-sans">
      {/* 1. Channel Banner */}
      <div className="w-full h-32 md:h-56 relative overflow-hidden bg-gray-800">
        {channelData?.coverImage ? (
          <img src={channelData.coverImage} alt="cover banner" className="w-full h-full object-cover"/>
        ) : (
          <div className="absolute inset-0 bg-black/10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        )}
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Channel Header / Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 gap-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="shrink-0 -mt-10 sm:-mt-12 z-10">
              <Avatar
                src={channelData?.avatar}
                size="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white dark:border-black shadow-md"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h1 className="text-xl sm:text-2xl font-bold">
                  {channelData?.fullName}
                </h1>
                <HiCheckBadge className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {"@" + channelData?.username} •{" "}
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {formatViews(channelData?.subscriberCount || 0)} subscribers
                </span>{" "}
                • {channelData?.channelVideosCount || 0} videos
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1 max-w-xl">
                {channelData?.about}
              </p>
            </div>
          </div>

          {/* Subscribe Action Button */}
          <div className="flex items-center space-x-2 self-stretch sm:self-auto">
            {channelData && user && channelData?._id !== user?._id && (
              <Button
                func={() => handleSubscribeClick()}
                extra_class={`flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubscribed
                    ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                    : "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                }`}
              >
                {isSubscribed ? (
                  <>
                    <FiBell className="w-4 h-4" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* 3. Navigation Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-800 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors duration-150 ${
                activeTab === tab
                  ? "border-black dark:border-white text-black dark:text-white"
                  : "border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4. Tab Content */}
        <div className="py-6">
          {activeTab === "Home" || activeTab === "Videos" ? (
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Latest Uploads
              </h2>
              {isVideosLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                  ))}
                </div>
              ) : Videos.length !== 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Videos.map((video) => (
                    <VideoCard
                      avatarSrc={video.owner[0]?.avatar}
                      thumbnailSrc={video.thumbnail}
                      videoTitle={video.title}
                      channelName={video.owner[0]?.fullName}
                      views={video.views}
                      timeFromPosting={video.createdAt}
                      videoId={video._id}
                      key={video._id}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-gray-500 dark:text-gray-400 text-base font-medium">
                  No Videos Found
                </div>
              )}
            </div>
          ) : activeTab === "About" ? (
            <div className="py-6 text-gray-700 dark:text-gray-300">
              <h3 className="text-md font-semibold mb-2">About this channel</h3>
              <p className="text-sm whitespace-pre-wrap">{channelData?.about || "No description provided."}</p>
            </div>
          ) : (
            <div className="py-12 text-center text-gray-500">
              <p className="text-base font-medium">
                No content in{" "}
                <span className="font-semibold text-gray-700 dark:text-gray-300">{activeTab}</span>{" "}
                tab yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Channel;