import React from 'react'
import { useState, useEffect } from 'react';
import Showcase from './shared/Showcase'
import axios from 'axios';

const Activation = () => {
   const [activationTimes, setActivationTimes] = useState({
      lateBy10: 0, lateBy20: 0, lateBy30: 0, lateBy40: 0, 
      lateBy50: 0, lateBy60: 0, lateBy70: 0, lateBy80: 0
   })
    const [lateBy10,setLateBy10] = useState(0);
    const [lateBy20,setLateBy20] = useState(0);
    const [lateBy30,setLateBy30] = useState(0);
    const [lateBy40,setLateBy40] = useState(0);
    const [lateBy50,setLateBy50] = useState(0);
    const [lateBy60,setLateBy60] = useState(0);
    const [lateBy70,setLateBy70] = useState(0);
    const [lateBy80,setLateBy80] = useState(0);
   
   const getActivationTimeStatistics = async () =>  {
      try {
        const {data} = await axios.get('http://165.227.142.137:5010/api/v1/sessions/1/02-28-2023/activation')
        console.log('API', data);
         setActivationTimes({...activationTimes, ...data.data})
;      } catch (err) {
        console.log(err.response.data);
      }

   }
  useEffect(() => {
   getActivationTimeStatistics()
    axios.get('http://165.227.142.137:5010/api/v1/sessions/1/02-26-2023/activation')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data.data.lateBy10)
    console.log(response.data.data.notdownloaded)
     setLateBy10(response.data.data.lateBy10)
     setLateBy20(response.data.data.lateBy20)
     setLateBy30(response.data.data.lateBy30)
     setLateBy40(response.data.data.lateBy40)
     setLateBy50(response.data.data.lateBy50)
     setLateBy60(response.data.data.lateBy60)
     setLateBy70(response.data.data.lateBy70)
     setLateBy80(response.data.data.lateBy80)
   
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
      <Showcase title={'Activation Time'}
       route={'Activation Time'} />
      <div className='bg-white border h-[26rem] w-full'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold'>Activation Time</p>
        <div className='flex items-center justify-center mt-7 gap-8'>
          <div className='flex bg-gray-100 p-2 justify-between w-96 px-8 rounded-lg border-l-8 border-r-8'>
            <p>0-10 mins</p>
            <div className='bg-emerald-400 text-white px-2 rounded-sm'>{lateBy10}</div>
         </div>
         <div className='flex p-2 justify-between w-96 bg-gray-100 px-8 rounded-lg border-l-8 border-r-8'>
            <p>10-20 mins</p>
            <div className='bg-emerald-400 text-white rounded-sm px-2'>{lateBy20}</div>
         </div> 
      </div>
      <div className='flex items-center justify-center mt-1 gap-8'>
          <div className='flex bg-gray-100 p-2 justify-between w-96 px-8 rounded-lg border-l-8 border-r-8'>
            <p>40-50 mins</p>
            <div className='bg-emerald-400 text-white px-2 rounded-sm'>{lateBy30}</div>
         </div>
         <div className='flex p-2 justify-between w-96 bg-gray-100 px-8 rounded-lg border-l-8 border-r-8'>
            <p>50-60 mins</p>
            <div className='bg-emerald-400 text-white rounded-sm px-2'>{lateBy40}</div>
         </div> 
      </div>
         <div className='flex items-center justify-center mt-7 gap-8'>
          <div className='flex bg-gray-100 p-2 justify-between w-96 px-8 rounded-lg border-l-8 border-r-8'>
            <p>20-30 mins</p>
            <div className='bg-emerald-400 text-white px-2 rounded-sm'>{lateBy50}</div>
         </div>
         <div className='flex p-2 justify-between w-96 bg-gray-100 px-8 rounded-lg border-l-8 border-r-8'>
            <p>30-40 mins</p>
            <div className='bg-emerald-400 text-white rounded-sm px-2'>{lateBy60}</div>
         </div> 
      </div>
      <div className='flex items-center justify-center mt-1 gap-8'>
          <div className='flex bg-gray-100 p-2 justify-between w-96 px-8 rounded-lg border-l-8 border-r-8'>
            <p>60-70 mins</p>
            <div className='bg-emerald-400 text-white px-2 rounded-sm'>{lateBy70}</div>
         </div>
         <div className='flex p-2 justify-between w-96 bg-gray-100 px-8 rounded-lg border-l-8 border-r-8'>
            <p>70-80 mins</p>
            <div className='bg-emerald-400 text-white rounded-sm px-2'>{lateBy80}</div>
         </div> 
      </div>

      <button className='p-2 border bg-emerald-500 text-white rounded-lg mt-20 px-24 ml-80'>Activation Time</button>
       
    </div>
   </>
    
  )
}

export default Activation