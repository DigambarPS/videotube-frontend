import React, { Children } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({heading="", children, isClose, setIsClose, closeBtnVisible}) => {
  return createPortal(
    <div className={`absolute top-16 right-4 z-50 flex flex-col bg-zinc-900 text-white border border-zinc-700 rounded-lg shadow-xl p-3 min-w-[200px] ${isClose ? 'hidden' : ''}`}>
        <div className='text-xl'>{heading}</div>
        <div>{children}</div>
        <button className={closeBtnVisible ? '' : 'hidden'} onClick={()=>setIsClose(true)}>Close</button>
    </div>,  document.getElementById('portal')
  )
}

export default Modal