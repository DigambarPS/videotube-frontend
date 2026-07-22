import axiosInstance from "./axiosInstance.js";

const toggleChannelSubscription = (payload) => axiosInstance.post("/subs/c/${channelId}", payload)
const getSubscribedChannels = (payload) => axiosInstance.get("/subs/c/${channelId}", payload)
const getChannelSubscribers = (payload) => axiosInstance.get("/subs/u/${channelId}", payload)

export {
    toggleChannelSubscription,
    getSubscribedChannels,
    getChannelSubscribers
}