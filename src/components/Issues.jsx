import React from 'react'
import Showcase from './shared/Showcase'

const Issues = () => {
  return (
    <>
       <Showcase title={'Center Technical Issues'}
       route={'Center technical issues'} />
       <div className='bg-white border h-[26rem] w-full'>
        <p className='p-2 text-gray-400 font-semibold'>Candidates writting exams in <span className='text-emerald-400'>|| 2022-05-07 / Session 1</span></p>
          
    </div>
    </>
  )
}

export default Issues