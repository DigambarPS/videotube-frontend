import React from 'react'
import SubscriptionsListItem from '../components/SubscriptionListItem'
import SubscriptionsListSkeleton from '../components/shimmerUI/SubscriptionsListSkeleton'
import { useAuth } from '../context/authContext'
import { useSubscription } from '../hooks/useSubscription'
import { useParams } from 'react-router-dom'

const SubscriptionsList = () => {
  const { user } = useAuth();
  const { channelId } = useParams();
  const { data, isLoading, isError } = useSubscription(channelId);
  const list = data;
  if (isLoading) {
    return <SubscriptionsListSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold">All Subscriptions</h1>
      </div>

      {/* Error State */}
      {isError && (
        <div className="text-center py-12 text-gray-400">
          <p>Failed to load subscriptions. Please try again later.</p>
        </div>
      )}

      {/* Subscriptions Grid / List */}
      {!isError && (
        <div className="grid grid-cols-1 gap-4">
          {list?.map((channel) => (
            <SubscriptionsListItem
              key={channel._id}
              data={channel}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SubscriptionsList