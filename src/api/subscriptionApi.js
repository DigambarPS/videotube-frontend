import axiosInstance from "./axiosInstance.js";

const toggleChannelSubscription = async (channelId) => {
    const {data} = await axiosInstance.post(`/subs/c/${channelId}`)
    return data.data;
}

const getSubscribedChannels = (payload) => axiosInstance.get("/subs/c/${channelId}", payload)
const getChannelSubscribers = (payload) => axiosInstance.get("/subs/u/${channelId}", payload)

export {
    toggleChannelSubscription,
    getSubscribedChannels,
    getChannelSubscribers
}