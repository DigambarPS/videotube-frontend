import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import { FaSearch } from 'react-icons/fa';
import {useVideo} from '../../hooks/useVideo.js';
import {useSearchParams} from 'react-router-dom'

const SearchBar = () => {
  const [searchQuery,setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
      if(searchQuery)
        setSearchParams({search:searchQuery})
      else
        setSearchParams({})
  }

  return (
    <div className='flex flex-row w-full'>
        <Input type='text' className='rounded-l-2xl' placeholder="Search..." Value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
        <Button extra_class='rounded-r-2xl p-2' func={handleSearch}><FaSearch/></Button>
    </div>
  )
}

export default SearchBar