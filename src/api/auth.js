import axiosInstance from "./axiosInstance";

const loginUser = (payload) => axiosInstance.post('/users/login', payload);
const registerUser = (payload) => axiosInstance.post('/users/register', payload);
const logoutUser = (payload) => axiosInstance.post('/users/logout', payload);

export {
    loginUser,
    registerUser,
    logoutUser
}