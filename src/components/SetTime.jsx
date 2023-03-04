import React from 'react'
import { useState, useEffect } from 'react'
import {AiOutlineFile} from 'react-icons/ai'
import Showcase from './shared/Showcase'
import axios from 'axios'

const SetTime = () => {
   const [colum ,setColumn] = useState([]);
   const [records, setRecords] = useState({});
   const [startTimes, setStartTimes] = useState([]);

   const getCenterStartTimes = async () =>  {
      try {
        const {data} = await axios.get('http://165.227.142.137:5010/api/v1/sessions/1/02-28-2023')
        console.log('API', data);
         setStartTimes([...startTimes, ...data.data])
;      } catch (err) {
        console.log(err.response.data);
      }

   }

   const renderCenters = () => {
    startTimes.length > 0 &&
    startTimes.map((index, session) => (
       <tr key={session.id}>
          <td className='border border-gray-300 border-collapse pl-2'>{index+1}</td>
          <td className='border border-gray-300 border-collapse pl-2'>{session.sessioncenter?.address}</td>
          <td className='border border-gray-300 border-collapse pl-2'>{session.sessionRef}</td> 
          <td className='border border-gray-300 border-collapse'>{session.sessioncenter.state}</td>
          <td className='border border-gray-300 border-collapse pl-2'>{session.startAt}</td>
        </tr>
    ))
   }

  useEffect(() => {
    getCenterStartTimes()
    axios.get('http://165.227.142.137:5010/api/v1/sessions/1/02-26-2023')
  .then(function (response) {
    // handle success
    console.log(response.data.data);
    let object = response.data.data[0];
    console.log(object);
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
               {startTimes.length > 0 && renderCenters()}
              </tbody>
            </table>    
    </div>
  </>
   
  )
}

export default SetTime