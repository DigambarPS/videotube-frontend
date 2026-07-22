import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <>
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Protube Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Protube</span>
            </Link>
            
            <div className="flex flex-wrap items-center mx-auto">
                <div className="flex items-center lg:order-2">
                    <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
                </div>
                <div className="flex items-center lg:order-2">
                    <Link to="/register" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Register</Link>
                </div>
            </div>
        </div>
    </nav>
</header>
    </>
  )
}

export default Header