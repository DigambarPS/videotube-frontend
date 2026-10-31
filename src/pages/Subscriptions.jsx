import React from 'react'
import VideoCard from '../components/VideoCard'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { useSubscribedChannelVideos, useVideo } from '../hooks/useVideo'
import { getAllVideos } from '../api/videoApi'
import SubscriptionsSkeleton from '../components/shimmerUI/SubscriptionsSkeleton'

const Subscriptions = () => {
  const {user} = useAuth();

  const{ data, isLoading, isError } = useSubscribedChannelVideos(1,15,null,'desc',null,'mySubscriptions');
  const videos = data?.pages.flatMap((page) => page.docs) || [];
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
      {isLoading && <SubscriptionsSkeleton/>}
      {/* Top Header & Filter Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Latest</h1>
        
        {/* <Link to={`/subscriptionList/${user?._id}`}><button className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200">
          All subscriptions
        </button></Link> */}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos?.map((video) => (
          <VideoCard
            avatarSrc={video?.owner[0].avatar}
            thumbnailSrc={video?.thumbnail}
            videoTitle={video?.title}
            channelName={video?.owner[0]?.fullName}
            views={video?.views}
            timeFromPosting={video?.createdAt}
            videoId={video._id}
            key={video._id}
          />
        ))}
      </div>
    </div>
  )
}

export default Subscriptions