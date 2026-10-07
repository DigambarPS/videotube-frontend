import React, { useState } from "react";
import Avatar from "./ui/Avatar";
import Button from "./ui/Button";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaThumbsDown,
  FaRegThumbsDown,
  FaRegBell,
  FaArrowDown,
  FaShare,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import VideoTile from "./VideoTile";
import { formatViews } from "../utils/formatters";

const VideoDescription = ({ videoData }) => {
  const [liked, setLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);

  function toggleVideoLike(e) {
    console.log("toggleVideoLike called");
    setLiked((prev) => !prev);
  }

  function toggleVideoDisLike() {
    console.log("toggleVideoDisLike called");
    setDisliked((prev) => !prev);
  }

  function toggleVideoSave() {
    console.log("toggleVideoSave called");
    setDisliked((prev) => !prev);
  }

  function toggleVideoShare() {
    console.log("toggleVideoShare called");
  }

  function subscribeOptions(e) {
    if (!isSubscribed) {
      subscribeToChannel();
      setIsSubscribed(true);
    } else {
      showSubScriptionOptions();
    }
  }

  function showSubScriptionOptions() {}
  
  return (
    
    <div className="flex flex-col">
      <h2 className="p-1 font-bold text-lg">{videoData?.title}</h2>
      <div className="flex flex-row my-2 justify-between">
        <div className="flex gap-2 px-1 items-center">
          <Link to={`/Channel/${videoData?.owner?._id}`}><Avatar size="w-8 h-8" /></Link>
          <div className="flex flex-col">
            <div className="font-bold text-sm">{videoData?.owner?.fullName}</div>
            <p className="text-xs">
              {formatViews(videoData?.owner?.subscriberCount)} subscribers
            </p>
          </div>
          {isSubscribed ? (
            <Button extra_class="text-xs rounded-xl p-1" val="Subscribe" />
          ) : (
            <Button
              extra_class="text-xs rounded-xl p-2"
              val="Subscribed"
            />
          )}
        </div>
        <div className="flex gap-1">
          <div className="flex">
            <Button
              extra_class="text-xs p-2 rounded-l-xl bg-primary"
              func={toggleVideoLike}
            >
              {
                <>
                  <div className="flex flex-row gap-2 justify-around items-center">
                    {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
                    <p>{formatViews(videoData?.totallikes)}</p>
                  </div>
                </>
              }
            </Button>
            <Button
              val={<FaRegThumbsDown />}
              extra_class="text-xs px-1 rounded-r-xl "
              func={toggleVideoDisLike}
            />
          </div>
          <Button
            val={
              <>
                <div className="flex flex-row gap-1 items-center">
                  <FaShare />
                  <p className="text-xs">Share</p>
                </div>
              </>
            }
            extra_class="text-xs p-2 rounded-xl "
          />
          <Button
            val={
              <>
                <div className="flex flex-row gap-1 items-center">
                  <FaRegBookmark />
                  <p className="text-xs">Save</p>
                </div>
              </>
            }
            extra_class="text-xs p-2 rounded-xl"
          />
        </div>
      </div>
      <div className="bg-gray-900 ml-1 rounded-xl p-2 text-sm ">
        <div className="flex gap-3">
          <p className="text-xs">{videoData?.views} views</p>
          <p className="text-xs">
            {new Date(videoData?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="text-xs mt-5">{videoData?.description}</div>
      </div>
    </div>
  );
};

export default VideoDescription;
