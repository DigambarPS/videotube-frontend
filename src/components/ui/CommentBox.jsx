import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"; // Heroicons

export default function CommentBox() {
  const [comment, setComment] = useState("");

  const handleSend = () => {
    if (comment.trim() !== "") {
      console.log("Comment sent:", comment);
      setComment("");
    }
  };

  return (
    <div className="flex items-center border rounded-lg p-2 bg-white dark:bg-gray-800">
      <textarea
        className="flex-1 resize-none border-none focus:ring-0 text-gray-800 dark:text-gray-200 bg-transparent px-2"
        rows="2"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="ml-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <PaperAirplaneIcon className="h-5 w-5 hover:cursor-pointer" />
      </button>
    </div>
  );
}
