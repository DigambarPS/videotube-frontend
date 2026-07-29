import React from 'react'
import VideoCard from '../components/VideoCard.jsx'
import SideBar from '../components/sideBar.jsx'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-900 text-white">
      
      {/* Sidebar */}
      <div className="w-full md:w-1/5 lg:w-1/6 bg-gray-950 p-4">
        <SideBar />
      </div>

      {/* Video Grid */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  )
}

export default Home
