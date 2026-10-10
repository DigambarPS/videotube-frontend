import React, { useState, useRef } from 'react'
import SearchBar from './ui/SearchBar'
import Avatar from './ui/Avatar'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import AvatarMenu from './ui/AvatarMenu'
import { FaRegBell, FaUpload } from 'react-icons/fa'
import Button from './ui/Button'
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import Modal from './ui/Modal'

const Header = () => {
    const { user } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClose, setIsClose] = useState(true);
    const menuRef = useRef(null);
    useOnClickOutside(menuRef, () => setMenuOpen(false));

    const showAvatarOptions = () => {
        setMenuOpen(!menuOpen)
    }

    const showCreateModal = () => {
        console.log('video upload modal')
    }

    const showNotification = () => {
        
    }

  return(
    <>
    <header>
    <nav className="bg-primary text-primary border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-primary-dark">
        <div className="flex flex-row justify-between items-center mx-auto">
            <div>
                <Link to="/Home" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="VidRepublic Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">VidRepublic</span>
                </Link>
            </div>
            {user && (
            <div>
                <SearchBar />
            </div>
            )}
            <div>
            <div className="flex flex-row items-center mx-auto">
                {!user ? (
                    <>
                <div className="flex items-center lg:order-2">
                    <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
                </div>
                <div className="flex items-center lg:order-2">
                    <Link to="/register" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Register</Link>
                </div>
                </>
                ) : (
                <div className="flex items-center lg:order-2 gap-8">
                    <div className='text-white text-xl'>
                    {/* {user && <Button val="Create" func={showCreateModal}/>} */}
                    {user && <Button func={showCreateModal} extra_class='p-3 rounded-2xl'><FaUpload/></Button>}
                    </div>
                    {/* <div className='text-white text-xl'>
                    {user && <Button func={showNotification} extra_class='p-3 rounded-2xl'><FaRegBell/></Button>}
                    </div> */}
                    <div>
                    <Avatar onClick={showAvatarOptions} src={user?.avatar}/>
                    </div>
                </div>
                )}
            </div>
        </div>     
        </div>
        {user && menuOpen && (<AvatarMenu ref={menuRef}/>)}
    </nav>
    <Modal isClose={isClose} setIsClose={setIsClose} children={<div>Hello</div>} heading='Hello'/>
</header>
    </>
  )
}

export default Header