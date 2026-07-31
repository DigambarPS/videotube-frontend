import React from 'react'
import Input from './Input'
import Button from './Button'

const SearchBar = () => {
  return (
    <div className='flex flex-row gap-1'>
        <Input type='text' className='' placeholder="Search..."/>
        <Button val="Search"/>
    </div>
  )
}

export default SearchBar