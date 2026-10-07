import {getRequest} from "./axiosInstance";

const changeUserPassword = (payload) => axiosInstance.post('/users/change-password', payload);
const updateUserDetails = (payload) => axiosInstance.post('/users/update-details', payload);
const updateAvatar = (payload) => axiosInstance.post('/users/update-avatar', payload);
const updateCoverImage = (payload) => axiosInstance.post('/users/update-coverImage', payload);
const renewAccessToken = (payload) => axiosInstance.post('/users/renew-access-token', payload);

const getCurrentUser = async () => {
    return getRequest('/users/get-current-user');
}
const getHistory = async (payload) => getRequest('/users/get-history', payload);

const getUserChannelProfile = async (channelId) => getRequest(`/users/c/${channelId}`);

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