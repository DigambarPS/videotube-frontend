import React, { useState } from "react";
import Avatar from "./ui/Avatar";
import Button from "./ui/Button";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaShare,
  FaRegBookmark,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatViews } from "../utils/formatters";

const VideoDescription = ({ videoData }) => {
  const [liked, setLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);

  function toggleVideoLike(e) {
    setLiked((prev) => !prev);
  }

  function toggleVideoDisLike() {
    setDisliked((prev) => !prev);
  }

  function toggleVideoSave() {
    setSaved((prev) => !prev);
  }

  function toggleVideoShare() {
    console.log("toggleVideoShare called");
  }

  function subscribeOptions(e) {
    if (!isSubscribed) {
      setIsSubscribed(true);
    } else {
      // handle subscription options
    }
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
            <div className="font-bold text-sm truncate">{videoData?.owner?.fullName}</div>
            <p className="text-xs text-gray-400">
              {formatViews(videoData?.owner?.subscriberCount || 0)} subscribers
            </p>
          </div>
          <button onClick={subscribeOptions} className="ml-2">
            {isSubscribed ? (
              <Button extra_class="text-xs rounded-xl p-1" val="Subscribed" />
            ) : (
              <Button extra_class="text-xs rounded-xl p-2" val="Subscribe" />
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-1 items-center">
          <div className="flex">
            <Button
              extra_class="text-xs p-2 rounded-l-xl bg-primary"
              func={toggleVideoLike}
            >
              <div className="flex flex-row gap-2 justify-around items-center">
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
                <p>{formatViews(videoData?.totallikes || 0)}</p>
              </div>
            </Button>
            <Button
              val={<FaRegThumbsDown />}
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
                {saved ? <FaRegBookmark className="text-blue-500" /> : <FaRegBookmark />}
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