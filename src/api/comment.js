import axiosInstance from "./axiosInstance";

const getVideoComments = (payload) => axiosInstance.get("/comment/${videoId}", payload)
const postVideoComment = (payload) => axiosInstance.post("/comment/${videoId}", payload)
const updateVideoComment = (payload) => axiosInstance.patch("/comment/c/${videoId}", payload)
const deleteVideoComment = (payload) => axiosInstance.delete("/comment/c/${videoId}", payload)

export {
    getVideoComments,
    postVideoComment,
    updateVideoComment,
    deleteVideoComment
}