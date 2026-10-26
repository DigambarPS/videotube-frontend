import { getRequest } from "./axiosInstance";
import axiosInstance from "./axiosInstance";

const getAllVideos = async (
  page = 1,
  limit = 15,
  userId = null,
  sort = null,
  query,
) => {
  return getRequest("/videos/", { page, limit, userId, sort, query });
};

const getVideoById = async (videoId) => {
  return getRequest(`/videos/${videoId}`);
};

const deleteVideo = async (videoId) => {
  const { data } = await axiosInstance.delete(`/videos/${videoId}`);
  return data.data;
};

const postVideo = async (formData) => {
  const { data } = await axiosInstance.post("/videos/", formData);
  console.log(data);
  return data.data;
};

const updateVideo = async (payload) =>
  await axiosInstance.patch(`/videos/${videoId}`, payload);
const toggleVideoPublishStatus = async (payload) =>
  await axiosInstance.patch(`/videos/toggle/publish/${videoId}`, payload);

export {
  getVideoById,
  getAllVideos,
  deleteVideo,
  postVideo,
  updateVideo,
  toggleVideoPublishStatus,
};
