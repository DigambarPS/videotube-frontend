import React from 'react'

const Button = ({val, func}) => {
  return (
    <button className="px-4 py-2 rounded-lg font-semibold 
               bg-blue-600 text-white 
               hover:bg-blue-700 
               dark:bg-gray-800 dark:text-gray-200 
               dark:hover:bg-gray-700" 
               onClick={func}>{val}</button>
  )
}

export default Button