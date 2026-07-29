import React from 'react'

const sidebarButton = ({ label, icon}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col'>
            {icon}
            <div>{label}</div>
        </div>
    </div>
  )
}

export default sidebarButton