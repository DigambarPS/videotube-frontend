import { useQuery, useMutation } from "@tanstack/react-query";
import { getVideoComments, postVideoComment } from "../api/commentApi";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useVideoComments = (videoId, sortBy) => {
    return useInfiniteQuery({
        queryKey: ["comments",videoId],
        queryFn: () => getVideoComments(videoId, sortBy),
        initialPageParam:1,
        getNextPageParam: (lastPage) => {
            return lastPage.hasNextPage ? lastPage.nextPage : undefined
        }
    })
}

export const usePostComment = (videoId, comment) => {
    return useMutation({
        mutationFn: ({videoId, comment}) => postVideoComment(videoId, comment),
        onSuccess: (data, {videoId}) => {
            // console.log(data.data)
        }
    })
}