import classNames from 'classnames'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'

const linkClasses = 'flex items-center gap-2 px-3 py-3 hover:bg-slate-500 hover:no-underline active:bg-neutral-600 text-base'
const Sidebar = () => {
  return (
    <div className='bg-slate-800 w-60 flex flex-col'>
      <div className='bg-slate-700 p-7 text-slate-400'>MONITORING SERVER</div>
      <div className='flex-1'>
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item}  />
          ))}
      </div>
    </div>
  )
}


export default Sidebar

const SidebarLink = ({item}) => {
  const {pathname} = useLocation()
  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-slate-700 text-red-400' : 'text-slate-400', linkClasses)}>
        <span className='text-slate-400 font-semi-bold'>{item.icon}</span>
        <p className='text-slate-400 font-semi-bold'> {item.label}</p>
    </Link>
  )
}
