import React from 'react'
import CommentItem from '../components/CommentItem.jsx'

const CommentList = ({commentList=[]}) => {
  return (
    <>
    <div className='w-full dark:bg-black flex flex-col gap-2'>
    { 
        commentList.map((c)=>(
            <CommentItem 
                key={c._id}
                comment={c}
            />
        ))
    }
    </div>
    </>
  )
}

export default CommentList