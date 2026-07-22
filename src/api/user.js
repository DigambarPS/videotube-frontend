import axiosInstance from "./axiosInstance";

const changeUserPassword = (payload) => axiosInstance.post('/users/change-password', payload);
const updateUserDetails = (payload) => axiosInstance.post('/users/update-details', payload);
const updateAvatar = (payload) => axiosInstance.post('/users/update-avatar', payload);
const updateCoverImage = (payload) => axiosInstance.post('/users/update-coverImage', payload);
const renewAccessToken = (payload) => axiosInstance.post('/users/renew-access-token', payload);

const getCurrentUser = (payload) => axiosInstance.get('/users/get-current-user', payload);
const getHistory = (payload) => axiosInstance.get('/users/get-history', payload);
const getUserChannelProfile = (payload) => axiosInstance.get('/users/c/${id}', payload);

export {
    changeUserPassword,
    updateUserDetails,
    updateAvatar,
    updateCoverImage,
    renewAccessToken,
    getCurrentUser,
    getHistory,
    getUserChannelProfile
}