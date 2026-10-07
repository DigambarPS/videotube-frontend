import React from 'react'
import ReactPlayer from 'react-player'
const VideoPlayer = ({src}) => {
  return (
    <ReactPlayer src={src || 'https://res.cloudinary.com/dajxuyxdx/video/upload/v1783798680/smt2koy0uefrg3ehsl9y.mp4'}
    config={{ file: { attributes: { controlsList: 'nodownload' } } }} 
            controls='true'
            style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
            className='rounded-lg'
            />
  )
}

export default VideoPlayer