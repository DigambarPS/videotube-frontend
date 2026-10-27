import React from 'react'

const VideoPlayerSkeleton = () => {
  return (
    <div className='relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden animate-pulse flex flex-col justify-between p-4'>
      {/* Top bar skeleton */}
      <div className='flex justify-between items-center'>
        <div className='h-4 bg-gray-800 rounded w-1/4'></div>
        <div className='flex gap-2'>
          <div className='w-8 h-8 bg-gray-800 rounded-full'></div>
          <div className='w-8 h-8 bg-gray-800 rounded-full'></div>
        </div>
      </div>

      {/* Center play icon or loading spinner pulse */}
      <div className='self-center justify-self-center w-12 h-12 bg-gray-800 rounded-full'></div>

      {/* Bottom control bar skeleton */}
      <div className='flex flex-col gap-2'>
        <div className='w-full h-1.5 bg-gray-800 rounded'></div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-3 items-center'>
            <div className='w-6 h-6 bg-gray-800 rounded'></div>
            <div className='w-12 h-4 bg-gray-800 rounded'></div>
          </div>
          <div className='flex gap-3'>
            <div className='w-6 h-6 bg-gray-800 rounded'></div>
            <div className='w-6 h-6 bg-gray-800 rounded'></div>
            <div className='w-6 h-6 bg-gray-800 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayerSkeleton