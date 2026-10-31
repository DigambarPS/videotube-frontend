import React from 'react'
import VideoPlayer from '../components/VideoPlayer.jsx'
import CommentLayout from '../components/CommentLayout.jsx'
import VideoDescription from '../components/VideoDescription.jsx'
import RecommendationList from '../components/RecommendationList.jsx'
import { useVideo } from '../hooks/useVideo.js';
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/authContext.js'
import VideoPlayerSkeleton from '../components/shimmerUI/VideoPlayerSkeleton.jsx'

const VideoPlayerPage = () => {
  const {user} = useAuth();
  const {videoId} = useParams();
  const {data, isLoading, isError} = useVideo(videoId);

  return (
    <div className='flex flex-col lg:flex-row w-full max-w-full overflow-x-hidden p-3 gap-4 bg-primary text-foreground box-border'>
        {/* Main Video & Comments Section (takes up 8 parts on large screens) */}
        <div className='w-full lg:w-8/xl xl:w-9/12 flex flex-col box-border'>
            <div className='w-full'>
              {isLoading && <VideoPlayerSkeleton/>}
              {data?.videoFile && <VideoPlayer src={data.videoFile}/>}
              {data && user && <VideoDescription videoData={data} user={user}/>}
            </div>
            <CommentLayout videoId={videoId}/>
        </div>

        {/* Recommendations Section (takes up a comfortable 3 to 4 parts) */}
        <div className='w-full lg:w-4/12 xl:w-3/12 flex flex-col box-border'>
          <RecommendationList userId={user?._id}/>
        </div>
    </div>
  )
}

export default VideoPlayerPage