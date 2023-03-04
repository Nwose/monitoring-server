import React from 'react'
import Showcase from './shared/Showcase'
import {AiOutlineFile} from 'react-icons/ai'

const Identity = () => {
  return (
    <>
       <Showcase title={'Identity Management'} route={'Identity Management'} />
       <div className='bg-white border h-[26rem] w-full'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold'>Staff Identity</p>
         <div className='bg-gray-200 p-2'>
          <div className='flex items-center bg-black text-white w-24 justify-evenly font-semibold text-sm p-1 rounded-sm ml-[860px]'>
              <AiOutlineFile/><p>All Data</p>
          </div>  
        </div>
        <table className='w-full border border-gray-400 border-collapse'>
              <thead className='bg-gray-200 text-gray-400'>
                <tr>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>S/N</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Staff Name</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Center Name</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'><p>Center Id</p><input className='w-full rounded-sm' type="text" /></th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>State</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Type</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Exam Start Time</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Activation Time</th>
                </tr>
              </thead>
              <tbody className='text-gray-600'>
                  <td className='border border-gray-300 border-collapse pl-2'>1</td>
                  <td className='border border-gray-300 border-collapse pl-2'>blank</td>
                  <td className='border border-gray-300 border-collapse pl-2'>blank</td>
                  <td className='border border-gray-300 border-collapse pl-2'>603</td>
                  <td className='border border-gray-300 border-collapse pl-2'>blank</td> 
                  <td className='border border-gray-300 border-collapse pl-2'>Technical Staff</td>
                  <td className='border border-gray-300 border-collapse pl-2'>6:5:2023</td>
                   <td className='border border-gray-300 border-collapse pl-2'>4:45</td>
              </tbody>
            </table>   
    </div>
    </>
  )
}

export default Identity