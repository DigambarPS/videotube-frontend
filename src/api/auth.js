import axiosInstance from "./axiosInstance";

const loginUserApi = (payload) => axiosInstance.post('/users/login', payload);
const registerUserApi = (payload) => axiosInstance.post('/users/register', payload);
const logoutUserApi = (payload) => axiosInstance.post('/users/logout', payload);

export {
    loginUserApi,
    registerUserApi,
    logoutUserApi
}