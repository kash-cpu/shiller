import React from 'react'
import { FaDiscord, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Socials() {
  return (
    <div className='flex items-center justify-between space-x-6'>
         <Link to="https://twitter.com/shill.fun" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300 transition-colors duration-200 cursor-pointer'> 
                <FaTwitter className="text-2xl hover:text-gray-300 transition-colors duration-200 cursor-pointer" /> 
        </Link>
        <Link to="https://telegram.com/shill.fun" target="_blank" rel="noopener noreferrer" className="hover:texr-gray-300 transition-colors duration-200">
            <FaTelegram className="text-2xl hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
        </Link>
        <Link to="https://Discord.com/shill.fun" target="_blank" rel="noopener noreferrer" className="hover:texr-gray-300 transition-colors duration-200">
            <FaDiscord className="text-2xl hover:text-gray-300 transition-colors duration-200 cursor-pointer"/>
        </Link>
        <Link to="https://tiktok.com/shill.fun" target="_blank" rel="noopener noreferrer" className="hover:texr-gray-300 transition-colors duration-200">
            <FaTiktok className="text-2xl hover:text-gray-300 transition-colors duration-200 cursor-pointer"/>
        </Link>
    </div>
  )
}

export default Socials