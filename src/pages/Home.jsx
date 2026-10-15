import React from 'react'
import VideoCard from '../components/VideoCard.jsx'
import SideBar from '../components/sideBar.jsx'
import { useVideos } from '../hooks/useVideo.js'
import { Link } from 'react-router-dom'
import { formatViews, formatTimeSinceUpload } from '../utils/formatters.js'

const Home = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useVideos();
  const videos = data?.pages.flatMap((page) => page.docs) || [];

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-900 text-white">
      
      {/* Sidebar */}
      <SideBar />

      {/* Video Grid */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((video)=>{
            return (
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
          )})}
        </div>
      </div>
    </div>
  )
}

export default Home
