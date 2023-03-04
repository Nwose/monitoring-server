import React from 'react'
import { useState, useEffect } from 'react'
import Showcase from './shared/Showcase'
import {AiOutlineFile} from 'react-icons/ai'
import axios from 'axios'

const Monitoring = () => {
   const [colum ,setColumn] = useState([]);
   const [records, setRecords] = useState({});

  useEffect(() => {
    axios.get('http://165.227.142.137:5010/api/v1/candidates/session/1/center/001')
  .then(function (response) {
    // handle success
    let object = response.data.data[0].bvmStatus.AttendanceStatus
    console.log(object);
    console.log(records[0]);
    setRecords(object)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    return () => {
      
    };
  }, []);
  return (
    <>
    <Showcase title={'Center Technical Issues'}
       route={'Center Technical Issues'} />
         <div className='bg-white border h-[26rem] w-full mt-4 relative overlow-y-scroll'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold '>Centers Online</p>
        <div className='bg-gray-200 p-2'>
          <div className='flex items-center bg-black text-white w-20 justify-evenly font-semibold text-sm rounded-sm ml-[890px]'>
              <AiOutlineFile/><p>All Data</p>
          </div>  
        </div>
        <table className='w-full border border-gray-400 border-collapse'>
              <thead className='bg-gray-200 text-gray-400'>
                <tr>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>S/N</th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Center Name</th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse w-7'><p>Center Id</p><input className='rounded-sm w-7 outline-none' type="text" /></th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>State</th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Category</th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Time</th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center border border-gray-300 border-collapse'>Issues</th>
                </tr>
              </thead>
              <tbody className='text-gray-600 text-xs font-semibold'>
                  {

                  }
                  <td className='border border-gray-300 border-collapse pl-2'></td>
                  <td className='border border-gray-300 border-collapse pl-2'>COVENANT POLYTECHNIC<br /> CENTER 1, NO 321, ABA- <br /> OWERRI ROAD, ABA, ABIA<br /> STATE</td>
                  <td className='border border-gray-300 border-collapse pl-2'>00501</td> 
                  <td className='border border-gray-300 border-collapse pl-2'>ABIA</td>
                  <td className='border border-gray-300 border-collapse pl-2'>CENTER<br />COMPUTERS</td>
                  <td className='border border-gray-300 border-collapse pl-2 w-0'>10:33</td>
                  <td className='border border-gray-300 border-collapse pl-2'>a. 1 server host dropped affecting 20 computers b. system disruption by candidates(minor<br/> accidents within the hall) c. All issues where resolved within an hour. see log</td>
              </tbody>
             
            </table>   
    </div>
    </>
  )
}

export default Monitoring
