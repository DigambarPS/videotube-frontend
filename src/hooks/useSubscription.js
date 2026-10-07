import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleChannelSubscription } from "../api/subscriptionApi";

export const useToggleSubscribe = (channelId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => toggleChannelSubscription(channelId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userChannelProfile"] });
    },
  });
};