import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSubscribedChannels, toggleChannelSubscription } from "../api/subscriptionApi";

export const useToggleSubscribe = (channelId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => toggleChannelSubscription(channelId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userChannelProfile"] });
    },
  });
};

export const useSubscription = (channelId) => {
    return useQuery({
        queryKey:['subscriptions', channelId],
        queryFn:() => getSubscribedChannels(channelId),
        enabled: !!channelId
    })
}