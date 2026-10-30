import React from 'react'

const Button = ({val, func, extra_class='', children, disabled}) => {
  return (
    <button className={`font-semibold 
              bg-primary text-white 
              hover:bg-grey-700 
              dark:bg-primary-dark dark:text-gray-200 
              dark:hover:bg-gray-600 
              ${extra_class ? extra_class : "rounded-lg py-4"}`} 
              onClick={func}
              disabled={disabled}>{val}{children}</button>
  )
}

export default Button