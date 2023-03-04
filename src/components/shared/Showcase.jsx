import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';



const Showcase = ({title, route, submitRequest}) => {
  const [date, setDate] = useState('');
  const [session, setSession] = useState('');

  const onSubmit = () => {
    console.log(date, session);
    if (date === '' || session === '') {
      alert('Please select a date and session')
      toast('Please select a date and session', {type: toast.TYPE.DANGER, className: 'bg-danger text-white'});
      return;
    }

    submitRequest(session, date);
  }
  
  return (
    <div className='bg-white p-2 flex justify-between'>
        <div className='ml-7'>
            <h1 className='text-2xl text-gray-400 font-normal'>{title}</h1>
            <p>Home / <span className='font-bold'>{route}</span></p>
        </div>
        <div className='flex justify-between items-center mr-16 px-10'>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className='border mr-2 h-6 p-4 rounded-sm outline-none shadow-md'/>
              <select onChange={(e) => setSession(e.target.value)} value={session} className='w-20 border mr-2 p-1 rounded-sm outline-none shadow-md'>
                <option></option>
                <option value="1">Session 1</option>
                <option value="2">Session 2</option>
                <option value="3">Session 3</option>
                <option value="4">Session 4</option>
                <option value="5">Session 5</option>
            </select>
            <button onClick={ onSubmit } className='bg-teal-400 text-white px-2 py-2 rounded-sm text-xs font-semibold hover:bg-white border border-teal-400 hover:text-teal-400 shadow-md'>Select</button>
        </div>
    </div>
  )
}

export default Showcase