import React from 'react'

const Card = () => {
  return (
    <div className='flex justify-evenly flex-row pt-7'>
       <div className='border bg-white h-[250px] w-[320px]'>
            <p className='border-b-2 p-3 text-gray-400 font-semibold'>Downloads</p>
            <div className='flex justify-between items-center p-2'>
                <div className='bg-emerald-300 w-6 h-2'></div>
                <p>Downloaded</p>
                <div className='bg-red-400 w-6 h-2'></div>
                <p>Pending Download</p>
            </div>
       </div>
       <div className='border bg-white h-[250px] w-[320px]'>
            <p className='border-b-2 p-3 text-gray-400 font-semibold'>Uploads</p>
            <div className='flex justify-between items-center p-2'>
                <div className='bg-emerald-300 w-6 h-2'></div>
                <p>Downloaded</p>
                <div></div>
                <p>Pending Download</p>
            </div>
             <div className='flex justify-evenly mt-24 text-white'>
                    <button className='bg-emerald-400 rounded-md p-2'>Downloaded 0</button>
                    <button className='bg-red-400 rounded-md p-2'>Pending Download 0</button>
            </div>
       </div>
       <div className='border bg-white h-[250px] w-[320px]'>
            <p className='border-b-2 p-3 text-gray-400 font-semibold'>Exams Duration</p>
            <div className='flex justify-between items-center p-2'>
                <div className='bg-emerald-300 w-6 h-2'></div>
                <p>Downloaded</p>
                <div></div>
                <p>Pending Download</p>
            </div>
       </div>
    </div>
  )
}

export default Card