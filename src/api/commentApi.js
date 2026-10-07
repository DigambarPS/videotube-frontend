import axiosInstance from "./axiosInstance";

const getVideoComments = async (videoId) => {
    const {data} = await axiosInstance.get(`/comment/${videoId}`);
    return data.data;
}

const postVideoComment = async (videoId,comment) => {
    const {data} = await axiosInstance.post(`/comment/${videoId}`, {content:comment});
    return data.data;
}

const updateVideoComment = async (commentId, comment) => {
    const { data } = await axiosInstance.patch(`/comment/c/${videoId}`);
    return data.data;
}

const deleteVideoComment = async (commentId) => {
    axiosInstance.delete(`/comment/c/${videoId}`);
    return data.data;
}

export {
    getVideoComments,
    postVideoComment,
    updateVideoComment,
    deleteVideoComment
}