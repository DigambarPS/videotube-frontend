import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({ isClose, heading, setIsClose, closeBtnVisible, position, children }) => {
  if (isClose) return null

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray/30 backdrop-blur-sm p-4">
      
      
      <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] w-full ${position || 'max-w-md'}`}>
        
        
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{heading}</h2>
          {closeBtnVisible && (
            <button 
              onClick={() => setIsClose(true)}
              className="text-gray-400 hover:text-gray-700 font-bold text-lg transition"
            >
              <FaTimes />
            </button>
          )}
        </div>

        
        <div className="p-6 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  )
}

export default Modal