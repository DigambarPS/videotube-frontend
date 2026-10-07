import axiosInstance from "./axiosInstance.js";

const healthcheck = (payload) => axiosInstance.get("/healthcheck/", payload)

export {
    healthcheck
}