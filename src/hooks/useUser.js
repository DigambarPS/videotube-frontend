import { useQuery } from "@tanstack/react-query";
import { getCurrentUser, getUserChannelProfile } from "../api/userApi";

export const useGetCurrentUser = () => {
    return useQuery({
        queryKey: ['currentUser'],
        queryFn: getCurrentUser,
        retry: false
    })
}

export const useUserChannelProfile = (channelId) => {
    return useQuery({
        queryKey: ['userChannelProfile',channelId],
        queryFn: () => getUserChannelProfile(channelId),
        retry: false
    })
}