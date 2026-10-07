import React from 'react'
import Input from './Input'
import Button from './Button'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='flex flex-row w-full'>
        <Input type='text' className='rounded-l-2xl' placeholder="Search..."/>
        <Button extra_class='rounded-r-2xl p-2'><FaSearch/></Button>
    </div>
  )
}

export default SearchBar