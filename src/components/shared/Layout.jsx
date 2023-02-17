import { useState } from 'react'
import {Outlet} from 'react-router-dom' 
import Header from './Header'
import Sidebar from './Sidebar'


const Layout = () => {
  const [collapseNav, setCollapseNav] = useState(false);
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar collapseNav={collapseNav}/>
        <div className='flex-1'>
          <Header setCollapseNav={setCollapseNav} />
          
        <div className='p-4'>{<Outlet/>} </div>
        </div>     
    </div>
  )
}

export default Layout