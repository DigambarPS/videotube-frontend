import React from 'react'
import Avatar from './ui/Avatar'

const VideoCard = ({
  avatarSrc='https://res.cloudinary.com/dajxuyxdx/image/upload/v1783798683/fyccme4ouyjwbujwobkr.png',
  thumbnailSrc='https://res.cloudinary.com/dajxuyxdx/image/upload/v1783798683/fyccme4ouyjwbujwobkr.png',
  videoTitle,
  channelName,
  views,
  timeFromPosting,
}) => {
  return (
    <div className="flex flex-col gap-2 p-2 
                    w-full sm:w-1/2 md:w-1/3 lg:w-1/4 
                    bg-gray-950 hover:bg-gray-800 text-white rounded-lg">
      {/* Thumbnail */}
      <img
        className="rounded-lg w-full h-auto object-cover"
        src={thumbnailSrc}
        alt="thumbnail"
      />

      {/* Info Section */}
      <div className="flex flex-row gap-2 mt-2">
        <Avatar size="w-10 h-10" src={avatarSrc} />
        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-base font-semibold truncate">{videoTitle}</p>
          <p className="text-xs md:text-sm text-gray-400 truncate">{channelName}</p>
          <div className="flex gap-2 text-xs md:text-sm text-gray-500">
            <span>{views} views</span>
            <span>{timeFromPosting}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VideoCard