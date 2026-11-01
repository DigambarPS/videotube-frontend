import axiosInstance, { getRequest } from "./axiosInstance.js";

const changeUserPassword = (payload) =>
  axiosInstance.post("/users/change-password", payload);

const updateUserDetails = async (payload) => {
  const data = await axiosInstance.patch("/users/update-details", payload);
  return data.data;
};

const updateAvatar = async (payload) => {
  const data = await axiosInstance.patch("/users/update-avatar", payload);
  return data.data;
};

const updateCoverImage = async (payload) => {
  const data = await axiosInstance.patch("/users/update-coverImage", payload);
  return data.data;
};

const renewAccessToken = (payload) =>
  axiosInstance.post("/users/renew-access-token", payload);

const getCurrentUser = async () => {
  return getRequest("/users/get-current-user");
};
const getHistory = async ({ page, limit, userId, sortType, query }) =>
  getRequest("/users/history", { page, limit, userId, sortType, query });

const getUserChannelProfile = async (channelId) =>
  getRequest(`/users/c/${channelId}`);

export {
  changeUserPassword,
  updateUserDetails,
  updateAvatar,
  updateCoverImage,
  renewAccessToken,
  getCurrentUser,
  getHistory,
  getUserChannelProfile,
};
