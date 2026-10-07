import React from 'react'
import { FaPlay } from 'react-icons/fa'

const VideoTile = ({
  videoTitle='Test Title', 
  thumbnailSrc='https://res.cloudinary.com/dajxuyxdx/image/upload/v1783798683/fyccme4ouyjwbujwobkr.png',
  channelName="Pida"
}) => {
  return (
    <div className='flex flex-row dark:bg-black p-2 dark:text-white gap-1 rounded-lg hover:bg-gray-900'>
        <img src={thumbnailSrc} width="100" className='w-2/3 rounded-lg'/>
        <div className='flex flex-col gap-1 pl-1'>
            <div className='text-sm'>{videoTitle}</div>
            <div className='text-xs text-gray-400 flex flex-col gap-1'>
            <div className=''>{channelName}</div>
            <div className='text-xs flex gap-2 items-center'>
              <div className='flex items-center'><FaPlay/> {1.2} M </div>
              <div className='flex'>{2+'w Ago'}</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default VideoTile