import React, { useState } from "react";
import Avatar from "./ui/Avatar";
import Button from "./ui/Button";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsDown,
  FaShare,
  FaRegBookmark,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatViews } from "../utils/formatters";
import { useToggleSubscribe } from "../hooks/useSubscription";
import { useToggleVideoLike } from "../hooks/useLike";

const VideoDescription = ({ videoData, user }) => {
  const [isVideoDisliked, setIsVideoDisliked] = useState(false);
  const [saved, setSaved] = useState(false);

  const [isSubscribed, setIsSubscribed] = useState(
    videoData?.owner?.isSubscribed ?? false,
  );
  const { mutate: toggleSubscribe } = useToggleSubscribe(videoData?.owner?._id);

  const [isVideoLiked, setIsVideoLiked] = useState(videoData?.isLiked ?? false);
  const [videoLikeCount, setVideoLikeCount] = useState(
    videoData?.totalLikes ?? 0,
  );
  const { mutate: toggleVidLike } = useToggleVideoLike(videoData?._id);

  function toggleVideoLike() {
    toggleVidLike();
    const nextLikedState = !isVideoLiked;
    setIsVideoLiked(nextLikedState);

    if (nextLikedState) {
      if (isVideoDisliked) {
        setIsVideoDisliked(false);
      }
      setVideoLikeCount((prev) => prev + 1);
    } else {
      setVideoLikeCount((prev) =>
        Math.ln ? Math.max(0, prev - 1) : Math.max(0, prev - 1),
      );
    }
  }

  function toggleVideoDisLike() {
    toggleVidLike();
    const nextDislikedState = !isVideoDisliked;
    setIsVideoDisliked(nextDislikedState);

    if (nextDislikedState) {
      if (isVideoLiked) {
        setIsVideoLiked(false);
        setVideoLikeCount((prev) => Math.max(0, prev - 1));
      }
    }
  }

  function toggleVideoSave() {
    setSaved((prev) => !prev);
  }

  async function toggleVideoShare() {
    const shareData = {
      title: document.title,
      text: "Check out this video on VidRepublic!",
      url: window.location.href, // Gets the current page URL
    };

    // Check if the browser supports the native Web Share API
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    } else {
      // Fallback: Copy to clipboard if Web Share API isn't available
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy link: ", err);
      }
    }
  }

  function subscribeOptions() {
    toggleSubscribe();
    setIsSubscribed((prev) => !prev);
  }

  return (
    <div className="flex flex-col w-full">
      <h2 className="p-1 font-bold text-lg">{videoData?.title}</h2>

      {/* Channel info & Action buttons container */}
      <div className="flex flex-col sm:flex-row sm:items-center my-2 justify-between gap-3">
        {/* Channel Details */}
        <div className="flex gap-2 px-1 items-center">
          <Link to={`/Channel/${videoData?.owner?._id}`} className="shrink-0">
            <Avatar size="w-8 h-8" src={videoData?.owner?.avatar} />
          </Link>
          <div className="flex flex-col min-w-0">
            <div className="font-bold text-sm truncate">
              {videoData?.owner?.fullName}
            </div>
            <p className="text-xs text-gray-400">
              {formatViews(videoData?.owner?.subscriberCount || 0)} subscribers
            </p>
          </div>
          {videoData && user && videoData?.owner?._id !== user?._id && (
            <Button
              func={subscribeOptions}
              extra_class="text-xs rounded-xl p-3 ml-2 bg-gray-800"
              val={isSubscribed ? "Subscribed" : "Subscribe"}
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-1 items-center">
          <div className="flex">
            <Button
              extra_class="text-xs p-2 rounded-l-xl bg-primary"
              func={toggleVideoLike}
            >
              <div className="flex flex-row gap-2 justify-around items-center">
                {isVideoLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
                <p>{formatViews(videoLikeCount || 0)}</p>
              </div>
            </Button>
            <Button
              val={isVideoDisliked ? <FaThumbsDown /> : <FaRegThumbsDown />}
              extra_class="text-xs px-2 py-2 rounded-r-xl"
              func={toggleVideoDisLike}
            />
          </div>
          <Button
            val={
              <div className="flex flex-row gap-1 items-center">
                <FaShare />
                <p className="text-xs">Share</p>
              </div>
            }
            extra_class="text-xs p-2 rounded-xl"
            func={toggleVideoShare}
          />
          <Button
            val={
              <div className="flex flex-row gap-1 items-center">
                {saved ? (
                  <FaRegBookmark className="text-blue-500" />
                ) : (
                  <FaRegBookmark />
                )}
                <p className="text-xs">Save</p>
              </div>
            }
            extra_class="text-xs p-2 rounded-xl"
            func={toggleVideoSave}
          />
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-gray-900 ml-1 rounded-xl p-2 text-sm">
        <div className="flex gap-3 text-gray-400">
          <p className="text-xs">{formatViews(videoData?.views || 0)} views</p>
          <p className="text-xs">
            {videoData?.createdAt &&
              new Date(videoData.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </p>
        </div>
        <div className="text-xs mt-3 whitespace-pre-wrap text-gray-200">
          {videoData?.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
