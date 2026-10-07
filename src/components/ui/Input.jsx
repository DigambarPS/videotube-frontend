import React, { useState } from 'react'

const Input = ({type='text', placeholder='Enter', max, className, Value=""}) => {
  const [val, setval] = useState("")
  return (
    <input className={`w-full px-4 py-2 border 
         focus:outline-none 
         dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 ${className}`} 
         type={type} 
         placeholder={placeholder} onChange={(e)=>e.target.val}
         value={Value}
         />
  )
}

export default Input