import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, getUserChannelProfile, updateAvatar, updateCoverImage, updateUserDetails } from "../api/userApi";
import { logoutUserApi } from "../api/authApi";
import { useNavigate } from "react-router-dom";

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

export const useLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: logoutUserApi,
        onSuccess: () => {
            queryClient.setQueryData(['currentUser'], null);
            queryClient.clear();
            navigate("/login", { replace: true });
        },
        onError: (error) => {
            console.error("Logout failed:", error);
            queryClient.clear();
            navigate("/login", { replace: true });
        }
    });
};

export const useUpdateProfileDetails = (data) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => updateUserDetails(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        },
        onError: (error) => {
            console.error("Mutation failed:", error);
        }
    });
};

export const useUpdateAvatar = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => updateAvatar(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['avatar'] })
        },
        onError: (error) => {
            console.error("Mutation failed:", error);
        }
    });
}

export const useUpdateCoverImage = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => updateCoverImage(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['coverImage'] })
        },
        onError: (error) => {
            console.error("Mutation failed:", error);
        }
    });
}