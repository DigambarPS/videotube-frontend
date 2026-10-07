import React, { Children } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({heading="", children, isClose, setIsClose}) => {
  return createPortal(
    <div className={`fixed inset-0 flex flex-col bg-white text-black h-90 w-200 ${isClose ? 'hidden' : ''}`}>
        <div className='text-xl '>{heading}</div>
        <div>{children}</div>
        <button onClick={()=>setIsClose(true)}>Close</button>
    </div>,  document.getElementById('portal')
  )
}

export default Modal