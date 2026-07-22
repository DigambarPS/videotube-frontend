import React, { useState } from 'react'

const Input = ({type='text', placeholder='Enter', max}) => {
  const [val, setval] = useState("")
  return (
    <input className="w-full px-4 py-2 border rounded-lg 
         focus:outline-none focus:ring-2 focus:ring-blue-500 
         dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600" type={type} placeholder={placeholder} onChange={(e)=>e.target.val}/>
  )
}

export default Input