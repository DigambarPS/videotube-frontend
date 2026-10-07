import {getRequest} from "./axiosInstance";

const getAllVideos = async (page=1, limit=15, userId=null, sort=null) => {
    return getRequest("/videos/",{page, limit, userId, sort})
}

const getVideoById = async (videoId) => {
    return getRequest(`/videos/${videoId}`);
}

const deleteVideo = async (videoId) => {
    const {data} = await axiosInstance.delete(`/videos/${videoId}`);
    return data.data;
}

const postVideo = async (payload) => await axiosInstance.post("/videos/",payload)
const updateVideo = async (payload) => await axiosInstance.patch(`/videos/${videoId}`, payload)
const toggleVideoPublishStatus = async (payload) => await axiosInstance.patch(`/videos/toggle/publish/${videoId}`, payload)

export {
    getVideoById,
    getAllVideos,
    deleteVideo,
    postVideo,
    updateVideo,
    toggleVideoPublishStatus
}