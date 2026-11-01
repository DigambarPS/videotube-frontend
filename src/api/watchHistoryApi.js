import axiosInstance, { getRequest } from "./axiosInstance.js";

const addToWatchHistory = async(videoId) => {
    console.log('api called')
    const data = await axiosInstance.post(`/ws/v/${videoId}`);
    console.log(data)
    return data.data;
}

export {
    addToWatchHistory
};