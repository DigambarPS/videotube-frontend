import React from 'react'

const Avatar = ({ src, alt = "User Avatar", size = "w-12 h-12" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${size} rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover`}
    />
  )
}

export default Avatar