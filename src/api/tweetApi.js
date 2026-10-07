import axiosInstance from "./axiosInstance.js"

const createTweet = (payload) => axiosInstance.post("/tweet/", payload)
const getUserTweets = (payload) => axiosInstance.get("/tweet/user/${userId}", payload)
const updateTweetById = (payload) => axiosInstance.patch("/tweet/${tweetId}", payload)
const deleteTweetById = (payload) => axiosInstance.delete("/tweet/${tweetId}", payload)

export {
    createTweet,
    getUserTweets,
    updateTweetById,
    deleteTweetById
}