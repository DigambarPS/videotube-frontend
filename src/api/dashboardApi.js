import axiosInstance from "./axiosInstance.js";

const getStats = (payload) => axiosInstance.get("/dashboard/stats", payload)
const getVideos = (payload) => axiosInstance.get("/dashboard/videos", payload)

export {
    getStats,
    getVideos
}