import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Helper function for GET requests
export const getRequest = async (url, params = {}) => {
  const { data } = await axiosInstance.get(url, { params });
  return data.data;
};

export default axiosInstance;
