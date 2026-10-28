import {getRequest} from "./axiosInstance";
import axiosInstance from "./axiosInstance";

const changeUserPassword = (payload) => axiosInstance.post('/users/change-password', payload);

const updateUserDetails = async (payload) => 
{
    const data = await axiosInstance.patch('/users/update-details', payload);
    return data.data;
}

const updateAvatar = async (payload) => {
    const data = await axiosInstance.patch('/users/update-avatar', payload);
    return data.data;
}

const updateCoverImage = async (payload) => {
    const data = await axiosInstance.patch('/users/update-coverImage', payload);
    return data.data;
}

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