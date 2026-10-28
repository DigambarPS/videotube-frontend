import React from 'react'

const Input = ({type='text', placeholder='Enter', max, className, Value="", onChange, ...props}) => {
  return (
    <input className={`w-full px-4 py-2 border 
         focus:outline-none 
         dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 ${className}`} 
         type={type} 
         placeholder={placeholder}
         max={max}
         value={Value}
         onChange={onChange}
         {...props}
         />
  )
}

export default Input