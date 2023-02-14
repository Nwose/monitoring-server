import React from 'react'
import {AiOutlineFile} from 'react-icons/ai'
import Showcase from './shared/Showcase'

const SetTime = () => {
  return (
  <>
    <Showcase title={'Exam Start Time'}
    route={'Exams/Exam Start Time'} />
     <div className='bg-white border h-[26rem] w-full'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold mb-4'>List of centers and Start Time || <span className='text-emerald-300'>2022-05-06/ Session 1</span></p>
        <div>
          
        </div>
        <div className='bg-gray-200 p-2'>
          <div className='flex items-center bg-black text-white w-32 justify-evenly font-semibold text-sm p-1 rounded-sm ml-[860px]'>
              <AiOutlineFile/><p>Download List</p>
          </div>  
        </div>
        <table className='w-full border border-gray-400 border-collapse'>
              <thead className='bg-gray-200 text-gray-400'>
                <tr>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>S/N</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Center Name</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse bg-cyan-700'><p className='text-white'>Center Id</p><input className='w-full rounded-sm' type="text" /></th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>State</th>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Exam Start Time</th>
                </tr>
              </thead>
              <tbody className='text-gray-600'>
                  <td className='border border-gray-300 border-collapse pl-2'>1</td>
                  <td className='border border-gray-300 border-collapse pl-2'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>00501</td> 
                  <td className='border border-gray-300 border-collapse'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>8:12</td>
              </tbody>
              <tbody className='text-gray-600 bg-gray-100'>
                  <td className='border border-gray-300 border-collapse pl-2'>2</td>
                  <td className='border border-gray-300 border-collapse pl-2'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>00502</td>
                  <td className='border border-gray-300 border-collapse'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>8:00</td>
              </tbody>
                  <tbody className='text-gray-600'>
                  <td className='border border-gray-300 border-collapse pl-2'>3</td>
                  <td className='border border-gray-300 border-collapse pl-2'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>00503</td>
                  <td className='border border-gray-300 border-collapse'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>8:31</td>
              </tbody>
              <tbody className='text-gray-600 bg-gray-100'>
                  <td className='border border-gray-300 border-collapse pl-2'>4</td>
                  <td className='border border-gray-300 border-collapse pl-2'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>00504</td>
                  <td className='border border-gray-300 border-collapse'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>8:34</td>
              </tbody>
               <tbody className='text-gray-600'>
                  <td className='border border-gray-300 border-collapse pl-2'>5</td>
                  <td className='border border-gray-300 border-collapse pl-2'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>00505</td>
                  <td className='border border-gray-300 border-collapse'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>8:15</td>
              </tbody>
               <tbody className='text-gray-600 bg-gray-100'>
                  <td className='border border-gray-300 border-collapse pl-2'>6</td>
                  <td className='border border-gray-300 border-collapse pl-2'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>00506</td>
                  <td className='border border-gray-300 border-collapse'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>8:27</td>
              </tbody>
               <tbody className='text-gray-600'>
                  <td className='border border-gray-300 border-collapse pl-2'>7</td>
                  <td className='border border-gray-300 border-collapse pl-2'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>00507</td>
                  <td className='border border-gray-300 border-collapse'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>8:44</td>
              </tbody>
            </table>   
    </div>
  </>
   
  )
}

export default SetTime