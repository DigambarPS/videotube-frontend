import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";
import { useAuth } from "../context/authContext";
import Avatar from "../components/ui/Avatar";
import { useChannelVideos } from "../hooks/useVideo";
import VideoCard from "../components/VideoCard";
import { formatTimeSinceUpload, formatViews } from "../utils/formatters";
import { useUserChannelProfile } from "../hooks/useUser";
import { useToggleSubscribe } from "../hooks/useSubscription";
import { useParams } from "react-router-dom";

const Channel = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const { user } = useAuth();
  const {channelId} = useParams(); 

  const tabs = ["Home", "Videos", "About"];

  //for channel videos
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useChannelVideos(1, 15, user?._id);
  const Videos = data?.pages.flatMap((page) => page.docs) || [];
  
  //for channel data
  const {
    data: channelData,
    isLoading: isChannelLoading,
    isError: isChannelError,
  } = useUserChannelProfile(channelId);

  const isSubscribed = channelData?.isSubscribed ?? false;

  // Mutation for toggling subscription
  const { mutate: toggleSubscribe, isPending } = useToggleSubscribe(channelData?._id);

  const handleSubscribeClick = () => {
    toggleSubscribe();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 1. Channel Banner */}
      <div className="w-full h-32 md:h-56 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Channel Header / Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 gap-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <Avatar
              src={channelData?.avatar}
              size="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md -mt-10 sm:-mt-12 z-10"
            />
            <div>
              <div className="flex items-center space-x-1.5">
                <h1 className="text-xl sm:text-2xl font-bold">
                  {channelData?.fullName}
                </h1>
                <HiCheckBadge className="w-5 h-5 text-gray-500" />
              </div>
              <p className="text-sm text-gray-500 font-medium">
                {"@" + channelData?.username} •{" "}
                <span className="font-semibold text-gray-700">
                  {channelData?.subscriberCount} subscribers
                </span>{" "}
                • {channelData?.channelVideosCount} videos
              </p>
              <p className="text-sm text-gray-600 mt-1 line-clamp-1 max-w-xl">
                {channelData?.about}
              </p>
            </div>
          </div>

          {/* Subscribe Action Button */}
          <div className="flex items-center space-x-2 self-stretch sm:self-auto">
            <button
              onClick={() => handleSubscribeClick()}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                isSubscribed
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-black text-white hover:bg-gray-800"
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
            </button>
          </div>
        </div>

        {/* 3. Navigation Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors duration-150 ${
                activeTab === tab
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-800"
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
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Latest Uploads
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Videos.map((video) => (
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
                ))}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-gray-500">
              <p className="text-base font-medium">
                No content in{" "}
                <span className="font-semibold text-gray-700">{activeTab}</span>{" "}
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
