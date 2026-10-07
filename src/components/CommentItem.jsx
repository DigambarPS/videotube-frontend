import { useState } from "react";
import Avatar from "../components/ui/Avatar";
import { FaEllipsisH, FaEllipsisV, FaRegThumbsDown, FaRegThumbsUp, FaReply, FaArrowDown } from "react-icons/fa";
import CommentBox from "./ui/CommentBox";
import { formatTimeSinceUpload } from "../utils/formatters";

export default function CommentItem({comment, isMine=true, size="", subCommentCount="2"}) {
  // console.log(comment)
  const displayCommentOptions = () => {
    
  }

  const toggleReply = (e) => 
  {

  }

  const toggleReplies = () => {

  }
  
  return (
    <div className={`flex items-center rounded-lg p-2 bg-white dark:bg-black ${size}`}>
      <Avatar size="w-8 h-8 mr-2" src={comment?.commentor?.avatar}/>
      <div className="flex flex-col p-1 my-1 justify-between gap-2">
        <div className="flex items-center text-xs gap-2">
        <div className="">{comment.commentor.fullName}</div>
        <div className="text-gray-400">{formatTimeSinceUpload(comment.createdAt)}</div>
        </div>
      <p
        className="text-sm dark:text-white"
      >{comment?.content}</p>
      {/* <div className="flex gap-10 text-xs items-center">
        <div className="flex gap-2 items-center">
        <FaRegThumbsUp className="dark: text-white"/>
        <p>{comment?.commentLikes}</p>
        </div>
        <FaRegThumbsDown className="dark: text-white"/>
        <div onClick={toggleReply}>Reply</div>
        {isMine && (
          <FaEllipsisV className="dark: text-white" onClick={displayCommentOptions}/>
        )}
        
      </div>
      {subCommentCount && (
        <div className="flex items-center gap-2 text-sm mt-4" onClick={toggleReplies}>
          <div className="">{subCommentCount} {subCommentCount > 1 ? 'Replies' : 'Reply' }</div>
          <FaArrowDown/>
        </div>
        )} */}
      </div>
    </div>
  );
}