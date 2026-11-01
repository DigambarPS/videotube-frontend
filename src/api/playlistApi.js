import axiosInstance, { getRequest } from "./axiosInstance.js";

const createPlaylist = async (payload) => {
    const data = await axiosInstance.post("/playlist/", payload)
    return data.data;
}

const getPlaylist = async(payload) => getRequest("/playlist/${playlistId}", payload);

const updatePlaylist = (payload) => axiosInstance.patch("/playlist/${playlistId}", payload)
const deletePlaylist = (payload) => axiosInstance.delete("/playlist/${playlistId}", payload)
const addVideoToPlaylist = (payload) => axiosInstance.patch("/playlist/add/${videoId}/${playlistId}", payload)
const removeVideoToPlaylist = (payload) => axiosInstance.patch("/playlist/remove/${videoId}/${playlistId}", payload)
const getUserPlaylists = async(payload) => getRequest("/playlist/${playlistId}", payload);

export {
    createPlaylist,
    getPlaylist,
    updatePlaylist,
    deletePlaylist,
    addVideoToPlaylist,
    removeVideoToPlaylist,
    getUserPlaylists
}