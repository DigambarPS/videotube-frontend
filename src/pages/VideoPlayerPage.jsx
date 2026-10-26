import React from 'react'
import VideoPlayer from '../components/VideoPlayer.jsx'
import CommentLayout from '../components/CommentLayout.jsx'
import VideoDescription from '../components/VideoDescription.jsx'
import RecommendationList from '../components/RecommendationList.jsx'
import { useVideo } from '../hooks/useVideo.js';
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/authContext.js'

const VideoPlayerPage = () => {
  const {user} = useAuth();
  const {videoId} = useParams();
  const {data, isLoading, isError} = useVideo(videoId);
  // console.log(data)
  return (
    <div className='flex flex-wrap lg:flex-nowrap w-full p-2 bg-primary text-foreground'>
        <div className='flex flex-wrap lg:w-10/12 sm:w-full pr-1'>
            <div className=''>
            <VideoPlayer src={!isloading && data?.src}/>
            <VideoDescription videoData={data}/>
            </div>
            <CommentLayout videoId={videoId}/>
        </div>
        {/* <RecommendationList userId={user?._id}/> */}
    </div>
  )
}

export default VideoPlayerPage