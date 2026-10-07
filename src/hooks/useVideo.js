import { useState, useEffect } from "react";
import { getAllVideos, getVideoById } from "../api/videoApi";
import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useVideos = () => {
    return useInfiniteQuery({
        queryKey: ["videos"],
        queryFn: getAllVideos,
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