import axiosInstance from "./axiosInstance";

const createPlaylist = (payload) => axiosInstance.post("/playlist/", payload)
const getPlaylist = (payload) => axiosInstance.get("/playlist/${playlistId}", payload)
const updatePlaylist = (payload) => axiosInstance.patch("/playlist/${playlistId}", payload)
const deletePlaylist = (payload) => axiosInstance.delete("/playlist/${playlistId}", payload)
const addVideoToPlaylist = (payload) => axiosInstance.patch("/playlist/add/${videoId}/${playlistId}", payload)
const removeVideoToPlaylist = (payload) => axiosInstance.patch("/playlist/remove/${videoId}/${playlistId}", payload)
const getUserPlaylists = (payload) => axiosInstance.get("/playlist/user/${userId}", payload)

export {
    createPlaylist,
    getPlaylist,
    updatePlaylist,
    deletePlaylist,
    addVideoToPlaylist,
    removeVideoToPlaylist,
    getUserPlaylists
}