import React from 'react'


const Showcase = (props) => {
  const {title,route} = props
  return (
    <div className='bg-white p-2 flex justify-between'>
        <div className='ml-7'>
            <h1 className='text-2xl text-gray-400 font-normal'>{title}</h1>
            <p>Home / <span className='font-bold'>{route}</span></p>  
        </div>
        <div className='flex justify-between items-center mr-32 px-10'>
            <input type="date" className='border mr-2 h-6'/>
            <input className='border h-6 mr-2' type="text" />
            <select className='w-20 border mr-2' id="">
              <option value="Selected">Select 1</option>
              <option value="Selected2">Select 2</option>
            </select>
            <button className='bg-teal-400 text-white p-1 rounded-sm text-xs font-semibold'>Select</button>
        </div>
    </div>
  )
}

export default Showcase