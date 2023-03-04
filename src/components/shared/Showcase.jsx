import React from 'react'



const Showcase = (props) => {
  const {title,route} = props
  return (
    <div className='bg-white p-2 flex justify-between'>
        <div className='ml-7'>
            <h1 className='text-2xl text-gray-400 font-normal'>{title}</h1>
            <p>Home  / <span className='font-bold'>{route}</span></p>
        </div>
        <div className='flex justify-between items-center mr-16 px-10'>
              <input type="date" className='border mr-2 h-6 p-4 rounded-sm outline-none shadow-md'/>
              <select className='w-20 border mr-2 p-1 rounded-sm outline-none shadow-md' id="">
              <option value="1">Session 1</option>
              <option value="2">Session 2</option>
              <option value="3">Session 3</option>
              <option value="4">Session 4</option>
              <option value="5">Session 5</option>
            </select>
            <button className='bg-teal-400 text-white px-2 py-2 rounded-sm text-xs font-semibold hover:bg-white border border-teal-400 hover:text-teal-400 shadow-md'>Select</button>
        </div>
    </div>
  )
}

export default Showcase