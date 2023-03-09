import React from 'react'
import Showcase from './shared/Showcase'
import {FaPlus} from 'react-icons/fa'

const Centerupload = () => {
  return (
    <>
      <Showcase title={'Center Upload'} route={'Center Upload'} />
       <div className='bg-white border h-[8rem] w-full'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold'>Daily Center Upload</p>
        <div className='flex justify-between items-center'>
          <p className='ml-5 mt-3 text-gray-400 font-semibold'>Upload csv file containing centers:</p>
          <div className='flex items-center bg-teal-500 text-white mr-10 mt-5 py-1 px-2 rounded-sm shadow-xl cursor-pointer'>
            <FaPlus size={13} />
            <p className='text-xs font-bold ml-2'>Upload Centers</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Centerupload