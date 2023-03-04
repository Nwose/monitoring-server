import React from 'react'
import { useState, useEffect } from 'react'
import {AiOutlineFile} from 'react-icons/ai'
import Showcase from './shared/Showcase'
import axios from 'axios'

const SetTime = () => {
  const [startTimes, setStartTimes] = useState([]);
  const [session, setSession] = useState();
  const [date, setDate] = useState('');
  
   const getCenterStartTimes = async (session, date) =>  {
    setSession(session);
    setDate(date);

    const oldDate = date.split('-');
    const newDate = `${oldDate[1]}-${oldDate[2]}-${oldDate[0]}`;
    try {
      setStartTimes([])
      const {data} = await axios.get(`http://165.227.142.137:5010/api/v1/sessions/${session}/${newDate}`)
       setStartTimes(data.data);
      } catch (err) {
      console.log(err.response.data);
    }

 }

  useEffect(() => {
    // getCenterStartTimes()
    return () => {
      
    };
  }, []);

  return (
  <>
    <Showcase submitRequest={getCenterStartTimes} title='Exam Start Time' route={'Exams/Exam Start Time'} />
     <div className='bg-white border h-[26rem] w-full'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold mb-4'>List of centers and Start Time || <span className='text-emerald-300'>{`${date}/ Session ${session}`}</span></p>
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
               {startTimes.length > 0 && startTimes.map((session, index) => {
                return <tr key={session.id}>
                    <td className='border border-gray-300 border-collapse pl-2'>{index+1}</td>
                    <td className='border border-gray-300 border-collapse pl-2'>{session.sessioncenter?.address}</td>
                    <td className='border border-gray-300 border-collapse pl-2'>{session.sessionRef}</td> 
                    <td className='border border-gray-300 border-collapse'>{session.sessioncenter.state}</td>
                    <td className='border border-gray-300 border-collapse pl-2'>{new Date(session.startAt).toLocaleTimeString()}</td>
                </tr>
               })}
              </tbody>
            </table>    
    </div>
  </>
   
  )
}

export default SetTime