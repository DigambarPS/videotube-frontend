import React from 'react'
import Avatar from './ui/Avatar'
import { Link } from 'react-router-dom';
import { formatViews, formatTimeSinceUpload } from "../utils/formatters.js";

const VideoCard = ({
  avatarSrc='https://res.cloudinary.com/dajxuyxdx/image/upload/v1783798683/fyccme4ouyjwbujwobkr.png',
  thumbnailSrc='https://res.cloudinary.com/dajxuyxdx/image/upload/v1783798683/fyccme4ouyjwbujwobkr.png',
  videoTitle,
  channelName,
  views,
  timeFromPosting,
  variant='grid-item',
  videoId
}) => {
  return (
    <Link to={`/play/${videoId}`}>
    <div className="flex flex-col gap-2 p-2 
                bg-gray-950 hover:bg-gray-800  transition-colors duration-500 text-white rounded-lg overflow-clip">
      
      <img
        className="rounded-lg w-full aspect-video object-cover"
        src={thumbnailSrc}
        alt="thumbnail"
      />

      <div className="flex flex-row justify-items-center gap-2 mt-2">
        <Avatar size="w-10 h-10 mt-2" src={avatarSrc} />
        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-base font-semibold truncate">{videoTitle}</p>
          <p className="text-xs md:text-sm text-gray-400 truncate">{channelName}</p>
          <div className="flex gap-2 text-xs md:text-sm text-gray-500">
            <span>{formatViews(views)} views</span>
            <span>{formatTimeSinceUpload(timeFromPosting)}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default VideoCard