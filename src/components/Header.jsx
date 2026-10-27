import React, { useState, useRef } from 'react'
import SearchBar from './ui/SearchBar'
import Avatar from './ui/Avatar'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import AvatarMenu from './ui/AvatarMenu'
import { FaRegBell, FaUpload, FaSearch, FaTimes } from 'react-icons/fa'
import Button from './ui/Button'
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import Modal from './ui/Modal'
import CreateVideoModal from './CreateVideoModal.jsx';

const Header = () => {
    const { user } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClose, setIsClose] = useState(true);
    const [showMobileSearch, setShowMobileSearch] = useState(false); // State for toggling mobile search
    const menuRef = useRef(null);
    useOnClickOutside(menuRef, () => setMenuOpen(false));

    const showAvatarOptions = () => {
        setMenuOpen(!menuOpen)
    }

  return(
    <>
    <header className="relative">
      <nav className="bg-primary text-primary border-gray-200 px-3 lg:px-6 py-2.5 dark:bg-primary-dark">
        {/* Main top row */}
        <div className="flex justify-between items-center mx-auto gap-3">
          
          {/* Logo (Hidden on mobile if search is open, or kept visible) */}
          {!showMobileSearch && (
            <div className="flex items-center">
              <Link to="/Home" className="flex items-center shrink-0">
                <img src="https://res.cloudinary.com/dajxuyxdx/image/upload/v1792783570/vidRepublic-logo_kzb5zp.jpg" className="mr-2 h-6 sm:h-9" alt="VidRepublic Logo" />
                <span className="self-center text-lg sm:text-xl font-semibold whitespace-nowrap dark:text-white">VidRepublic</span>
              </Link>
            </div>
          )}

          {/* Desktop Search Bar (Always visible on md and above) */}
          {user && (
            <div className="hidden md:flex flex-1 max-w-xl justify-center mx-4">
              <div className="w-full">
                <SearchBar />
              </div>
            </div>
          )}

          {/* Mobile Search Overlay / Active View */}
          {user && showMobileSearch && (
            <div className="flex md:hidden flex-1 items-center gap-2 w-full">
              <div className="w-full">
                <SearchBar />
              </div>
              <button 
                onClick={() => setShowMobileSearch(false)}
                className="p-2 text-gray-400 hover:text-white shrink-0"
              >
                <FaTimes size={18} />
              </button>
            </div>
          )}

          {/* Right Action Buttons, Search Icon (Mobile), & Avatar */}
          {!showMobileSearch && (
            <div className="flex items-center gap-3">
              {!user ? (
                <div className="flex items-center gap-2">
                  <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-sm px-3 py-2">Log in</Link>
                  <Link to="/register" className="text-gray-800 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-sm px-3 py-2">Register</Link>
                </div>
              ) : (
                <div className="flex items-center gap-3 sm:gap-6">
                  {/* Mobile Search Trigger Icon */}
                  {user && (
                    <button 
                      onClick={() => setShowMobileSearch(true)} 
                      className="md:hidden p-2 text-white text-lg rounded-full hover:bg-gray-800"
                    >
                      <FaSearch />
                    </button>
                  )}

                  <div className='text-white text-xl'>
                    <Button func={() => {setIsClose(false)}} extra_class='p-2 sm:p-3 rounded-2xl'><FaUpload/></Button>
                  </div>
                  
                  {/* Avatar with shrink-0 to prevent squishing */}
                  <div className="shrink-0 relative">
                    <Avatar onClick={showAvatarOptions} src={user?.avatar}/>
                  </div>
                </div>
              )}
            </div>
          )}     
        </div>

        {/* Avatar Dropdown Menu */}
        {user && menuOpen && (<AvatarMenu ref={menuRef}/>)}
      </nav>
      <CreateVideoModal isClose={isClose} setIsClose={setIsClose}/>
    </header>
    </>
  )
}

export default Header;