import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'




const Card = () => {
  const [downloaded,setDownloaded] = useState(0);
  const [uploaded,setUploaded] = useState(0);
  const [notUploaded,setNotUploaded] = useState(0);
  useEffect(() => {
    axios.get('http://165.227.142.137:5010/api/v1/sessions/1/02-26-2023/download-upload')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data.data.downloaded)
    console.log(response.data.data.notdownloaded)
     setDownloaded(response.data.data.downloaded)
     setUploaded(response.data.data.uploaded)
     setNotUploaded(response.data.data.notUploaded)
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
    <div className='flex justify-evenly flex-row pt-7'>
       <div className='border bg-white h-[300px] w-[320px] shadow-md'>
            <p className='border-b-2 p-3 text-gray-400 font-semibold'>Downloads</p>
            <div className='flex justify-between items-center p-2'>
                <div className='bg-teal-500 w-6 h-2 ml-6'></div>
                <p className='text-sm -ml-7'>Downloaded</p>
                <div className='bg-red-400 w-6 h-2 -ml-5'></div>
                <p className='text-sm -ml-7'>Pending Download</p>
            </div>
            <div className='flex justify-evenly mt-36 text-white'>
                  <button className='bg-teal-500 rounded-md p-2'>Downloaded {downloaded}</button>
                  <button className='bg-red-400 rounded-md p-2'>Pending Download 0</button>
            </div>
       </div>
       <div className='border bg-white h-[300px] w-[320px] shadow-md'>
            <p className='border-b-2 p-3 text-gray-400 font-semibold'>Uploads</p>
            <div className='flex justify-between items-center p-2'>
                <div className='bg-teal-500 w-6 h-2 ml-9'></div>
                <p className='text-sm'>Uploaded</p>
                <div className='bg-red-400 w-6 h-2'></div>
                <p className='text-sm mr-8'>Pending Uploaded</p>
            </div>
             <div className='flex justify-evenly mt-36 text-white'>
                    <button className='bg-teal-500 rounded-md p-2'>Uploaded {uploaded}</button>
                    <button className='bg-red-400 rounded-md p-2'>Pending Uploaded {notUploaded}</button>
            </div>
       </div>
       <div className='border bg-white h-[300px] w-[320px] shadow-md'>
            <p className='border-b-2 p-3 text-gray-400 font-semibold'>Exams Duration</p>
            <div className='flex justify-between items-center p-2 flex-wrap'>
                <div className='bg-teal-500 w-6 h-2 ml-4'></div>
                <p>0-2.5hrs</p>
                <div className='bg-red-400 w-6 h-2'></div>
                <p>2.5-3hrs</p>
                <div className='bg-yellow-400 w-6 h-2'></div>
                <p>3-4hrs</p>
            </div>
            <div className='flex items-center justify-center -mt-3 mr-4'>
                <div className='bg-gray-300 w-6 h-2 mr-5 mt-1'></div>
                <p className='-ml-4'>&gt;4hrs</p>
            </div>
            <div className='flex items-center justify-evenly mt-32'>
                <div className='bg-teal-500 text-white w-20 text-xs pl-4 rounded-sm'>
                  <p>0-2.5hrs|0</p>
                </div>
                 <div className='bg-red-400 text-white w-20 text-xs pl-4 rounded-sm'>
                  <p>2.5-3hrs|0</p>
                </div>
                 <div className='bg-yellow-400 w-20 text-xs pl-4 rounded-sm'>
                  <p>3-4hrs|0</p>
                </div>
            </div>
            <div className='bg-gray-300 w-20 rounded-sm pl-4 text-xs mt-2 ml-5'>
                <p>&gt;4hrs|0</p>
            </div>
       </div>
    </div>
  )
}

export default Card