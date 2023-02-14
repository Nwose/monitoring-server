import React from 'react'
import Showcase from './shared/Showcase'

const Activation = () => {
  return (
   <>
      <Showcase title={'Activation Time'}
       route={'Activation Time'} />
      <div className='bg-white border h-[26rem] w-full'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold'>Activation Time</p>
        <div className='flex items-center justify-center mt-7 gap-8'>
          <div className='flex bg-gray-100 p-2 justify-between w-96 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white px-2 rounded-sm'>85</div>
         </div>
         <div className='flex p-2 justify-between w-96 bg-gray-100 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white rounded-sm px-2'>185</div>
         </div> 
      </div>
      <div className='flex items-center justify-center mt-1 gap-8'>
          <div className='flex bg-gray-100 p-2 justify-between w-96 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white px-2 rounded-sm'>85</div>
         </div>
         <div className='flex p-2 justify-between w-96 bg-gray-100 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white rounded-sm px-2'>85</div>
         </div> 
      </div>
         <div className='flex items-center justify-center mt-7 gap-8'>
          <div className='flex bg-gray-100 p-2 justify-between w-96 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white px-2 rounded-sm'>85</div>
         </div>
         <div className='flex p-2 justify-between w-96 bg-gray-100 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white rounded-sm px-2'>85</div>
         </div> 
      </div>
      <div className='flex items-center justify-center mt-1 gap-8'>
          <div className='flex bg-gray-100 p-2 justify-between w-96 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white px-2 rounded-sm'>85</div>
         </div>
         <div className='flex p-2 justify-between w-96 bg-gray-100 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white rounded-sm px-2'>85</div>
         </div> 
      </div>

      <button className='p-2 border bg-emerald-500 text-white rounded-lg mt-20 px-24 ml-80'>Activation Time</button>
       
    </div>
   </>
    
  )
}

export default Activation