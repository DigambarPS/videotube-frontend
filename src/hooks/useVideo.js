import { useState, useEffect } from "react";
import { getAllVideos, getVideoById, postVideo } from "../api/videoApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useVideos = (page,limit,userId,sort,query) => {
    return useInfiniteQuery({
        queryKey: ["videos", query],
        queryFn: () => getAllVideos(page,limit,userId,sort,query),
        initialPageParam:1,
        getNextPageParam: (lastPage) => {
            return lastPage.hasNextPage ? lastPage.nextPage : undefined
        }
    })
}

export const useVideo = (videoId) => {
    return useQuery({
        queryKey:['video', videoId],
        queryFn:() => getVideoById(videoId),
        enabled: !!videoId
    })
}

export const useChannelVideos = (page,limit,userId) => {
    return useInfiniteQuery({
        queryKey: ["channelVideos", userId],
        queryFn: () => getAllVideos(page,limit,userId),
        initialPageParam:1,
        getNextPageParam: (lastPage) => {
            return lastPage.hasNextPage ? lastPage.nextPage : undefined
        }
    })
}

export const useUploadVideo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (formData) => postVideo(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      navigate("/Home");
    },
  });

  return { mutate, isPending, error };
};