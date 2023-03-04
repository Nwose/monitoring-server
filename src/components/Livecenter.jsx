import React from 'react'
import Showcase from './shared/Showcase'
import {FiFileText, FiMonitor} from 'react-icons/fi'
import {HiOutlineClock } from 'react-icons/hi'
import {AiOutlineStar} from 'react-icons/ai'
import {FaExclamation} from 'react-icons/fa'


const Livecenter = () => {
  return (
    <>
      <Showcase title={'Center Details'}
    route={'Center Monitoring / Center Details'} />
     <div className='bg-white border h-[26rem] w-full'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold mb-4'>Center Update || <span className='text-emerald-300'>02-26-2023/ Session 1</span></p>
        <div className='grid grid-cols-3 gap-4 place-items-center '>
          <div className='flex justify-evenly w-72 h-24 rounded-md items-center p-4 ml-9 bg-sky-500 text-white cursor-pointer hover:animate-bounce'><FiFileText size={70} /> <div className='flex flex-col'> <p>Exam Name</p><p className='text-xs'>UTME2023DAY01SESSIONNo</p></div> </div>
          <div className='flex justify-evenly w-72 h-24 rounded-md items-center bg-amber-400 text-white cursor-pointer hover:animate-bounce'><HiOutlineClock size={70} /><div className='flex flex-col'> <p>Upload Time</p><strong className='text-xl'>10:21</strong></div>  </div>
          <div className='flex justify-evenly w-72 h-24 rounded-md items-center bg-sky-500 text-white cursor-pointer hover:animate-bounce mr-8'><AiOutlineStar size={70}/><div className='flex flex-col'><p>Total Started</p><strong className='text-xl'>241</strong></div> </div>
          <div className='flex justify-evenly w-72 h-24 rounded-md items-center bg-amber-400 ml-10 text-white cursor-pointer hover:animate-bounce'><FiMonitor size={70} /><div className='flex flex-col'><p>Total Submitted</p><strong className='text-xl'>241</strong></div></div>
          <div className='flex justify-evenly w-72 h-24 rounded-md items-center bg-teal-400 text-white cursor-pointer hover:animate-bounce'><HiOutlineClock size={70} /><div className='flex flex-col'> <p>Duration (mins)</p><strong className='text-xl'>123</strong></div> </div>
          <div className='flex justify-evenly w-72 h-24 rounded-md items-center bg-emerald-400 text-white cursor-pointer hover:animate-bounce mr-8'><FaExclamation size={70}/><div className='flex flex-col'> <p className='text-2xl font-light'>View Details</p></div> </div>
        </div>
     </div>
     
    </>
  )
}

export default Livecenter