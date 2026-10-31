import axiosInstance, { getRequest } from "./axiosInstance.js";

const toggleChannelSubscription = async (channelId) => {
    const {data} = await axiosInstance.post(`/subs/c/${channelId}`)
    return data.data;
}

const getSubscribedChannels = async (channelId) => getRequest(`/subs/c/${channelId}`);
const getChannelSubscribers = (payload) => axiosInstance.get("/subs/u/${channelId}", payload)

export {
    toggleChannelSubscription,
    getSubscribedChannels,
    getChannelSubscribers
}