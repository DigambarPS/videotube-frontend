import axiosInstance from "./axiosInstance.js";

const toggleVideoLike = async (videoId) => {
    const {data} = await axiosInstance.post(`/like/toggle/v/${videoId}`);
    return data.data;
}

const toggleCommentLike = async (videoId) => {
    const {data} = await axiosInstance.post(`/like/toggle/c/${videoId}`);
    return data.data;
}

const toggleTweetLike = async (payload) => {
    const {data} = await axiosInstance.post("/like/toggle/t/${videoId}");
    return data.data;
}

const getLikedVideos = async () => {
    const {data} = await axiosInstance.get("/like/videos", payload);
    return data.data;
}

export {
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,
    getLikedVideos
}