import React from 'react'
import Avatar from './ui/Avatar'
import Button from './ui/Button'
import { formatViews } from '../utils/formatters'
import { Link } from 'react-router-dom'
import SubscriptionButton from './SubscriptionButton'
import { useAuth } from '../context/authContext'

const SubscriptionListItem = ({ data }) => {
  const { user } = useAuth();
  return (
    
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-gray-100 dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 transition-colors">
      {/* Channel Avatar & Details */}
      <Link to={`/Channel/${data?._id}`}>
      <div className="flex items-center gap-4">
        <Avatar src={data?.avatar} size='w-25 h-25 shrink-0' />
        
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-900 dark:text-white font-semibold text-base">
            {data?.fullName}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
            <span>@{data?.username}</span>
            <span>•</span>
            <span>{formatViews(data?.subscriberCount) || "0"} subscribers</span>
          </div>

          {data?.about && (
            <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-1 mt-0.5">
              {data.about}
            </p>
          )}
        </div>
      </div>
      </Link>
      {/* Subscribe / Subscribed Button */}
      {/* <Button 
        val={data?.isSubscribed ? "Subscribed" : "Subscribe"} 
        extra_class={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
          data?.isSubscribed 
            ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700" 
            : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
        }`}
      /> */}
      {data && user && <SubscriptionButton data={data} user={user}/>}
    </div>
    
  )
}

export default SubscriptionListItem