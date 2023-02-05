import React from 'react'
import {MdLogout} from 'react-icons/md'



const Header = () => {
  return (
    <div className='bg-neutral-200 h-16 px-4 flex items-center justify-between'>
         <div
            className="HAMBURGER-ICON space-y-2 bg-emerald-400 p-2 rounded-md cursor-pointer"
           // onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-6 animate-pulse bg-white font-bold"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white font-bold"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white font-bold"></span>
          </div>
          <div className='flex items-center mr-4 gap-2 text-gray-400 font-semibold cursor-pointer'>
            <MdLogout className='font-bold' />
            Log out
          </div>
    </div>
  )
}

export default Header