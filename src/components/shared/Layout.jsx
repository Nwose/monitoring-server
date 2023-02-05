import React from 'react'
import {Outlet} from 'react-router-dom' 
import Card from '../Card'
import Header from './Header'
import Showcase from './Showcase'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='flex-1'>
             <Header />
             <Showcase />
             <Card />
          <div className='p-4'>
            {<Outlet/>}
         </div>
        </div>   
    </div>
  )
}

export default Layout