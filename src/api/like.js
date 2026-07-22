import axiosInstance from "./axiosInstance.js";

const toggleVideoLike = (payload) => axiosInstance.post("/like/toggle/v/${videoId}");
const toggleCommentLike = (payload) => axiosInstance.post("/like/toggle/c/${videoId}");
const toggleTweetLike = (payload) => axiosInstance.post("/like/toggle/t/${videoId}");
const getLikedVideos = (payload) => axiosInstance.get("/like/videos", payload);

export {
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,
    getLikedVideos
}