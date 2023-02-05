import React from 'react'


const Showcase = () => {

  return (
    <div className='bg-white p-2 flex space-evenly'>
        <div>
            <h1 className='text-2xl text-gray-400 font-normal'>Exams</h1>
            <p>Home / <sapn className='font-bold'>Exams</sapn></p>
        </div>
        <div className='flex justify-evenly items-center mr-10'>
            <input type="date" className='border '/>
            <input className='border h-8' type="text" />
            <button className='bg-emerald-400 text-white p-1 rounded-sm'>Select</button>
        </div>
    </div>
  )
}

export default Showcase