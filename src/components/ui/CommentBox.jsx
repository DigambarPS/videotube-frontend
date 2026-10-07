import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"; // Heroicons
import Avatar from "./Avatar";
import { usePostComment } from "../../hooks/useComment";
import { useAuth } from "../../context/authContext";

export default function CommentBox({ size = "w-12", id }) {
  const [comment, setComment] = useState("");
  const videoId = id;
  const { mutate: postComment, isLoading } = usePostComment();
  const {user} = useAuth();

  const handleSend = async () => {
    if (comment.trim() !== "") {
      postComment(
        { videoId, comment },
        {
          onSuccess: () => {
            setComment("");
          },
        },
      );
    }
  };

  return (
    <div
      className={`flex items-center rounded-lg p-2 bg-white dark:bg-black ${size}`}
    >
      <Avatar size="w-8 h-8 mr-2" src={user?.avatar} />
      <textarea
        className="flex-1 resize-none focus:border-b-2 focus:outline-none text-gray-800 dark:text-gray-200 bg-transparent text-xs"
        rows="1"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="ml-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <PaperAirplaneIcon className="h-3 w-3 hover:cursor-pointer" />
      </button>
    </div>
  );
}
