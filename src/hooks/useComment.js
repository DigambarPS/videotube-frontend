import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getVideoComments, postVideoComment } from "../api/commentApi";

export const useVideoComments = (videoId, sortBy) => {
  return useInfiniteQuery({
    queryKey: ["comments", videoId],
    queryFn: () => getVideoComments(videoId, sortBy),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
  });
};

export const usePostComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ videoId, comment }) => postVideoComment(videoId, comment),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['comments', variables.videoId] });
    },
  });
};