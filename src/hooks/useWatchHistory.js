import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToWatchHistory } from "../api/watchHistoryApi";

export const useAddWatchHistory = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (videoId) => addToWatchHistory(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchHistory"] });
    },
  })

  return { mutate, isPending, error }
};