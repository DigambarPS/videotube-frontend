import axiosInstance from "./axiosInstance";

const getVideoById = (payload) => axiosInstance.get("/videos/${videoId}", payload)
const getAllVideos = (payload) => axiosInstance.get("/videos/", payload)

const deleteVideo = (payload) => axiosInstance.delete("/videos/${videoId}", payload)

const postVideo = (payload) => axiosInstance.post("/videos/",payload)
const updateVideo = (payload) => axiosInstance.patch("/videos/${videoId}", payload)
const toggleVideoPublishStatus = (payload) => axiosInstance.patch("/videos/toggle/publish/${videoId}", payload)

export {
    getVideoById,
    getAllVideos,
    deleteVideo,
    postVideo,
    updateVideo,
    toggleVideoPublishStatus
}