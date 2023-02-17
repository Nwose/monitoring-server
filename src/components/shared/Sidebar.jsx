import classNames from 'classnames'
import {Link, useLocation} from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'

const linkClasses = 'flex items-center gap-2 px-3 py-3 hover:bg-teal-500 hover:no-underline active:bg-slate-200 rounded-sm text-base'
const Sidebar = ({collapseNav}) => {
  return (
    <div className={`bg-teal-700 ${!collapseNav ? "w-60" : "w-10"} duration-300 flex flex-col`}>
      <div className={`bg-teal-600 ${!collapseNav ? "p-7" : "p-5 -m-2 font-bold italic"} text-white`}>{!collapseNav ? 'MONITORING SERVER' : 'M'}</div>
      <div>
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} collapseNav={collapseNav}  />
          ))}
      </div>
    </div>
  )
}


export default Sidebar

const SidebarLink = ({item, collapseNav}) => {
  const {pathname} = useLocation()
  const pathArr = pathname.split("/")
  console.log(item.path, pathArr[pathArr.length-1] );
  return (
    <Link to={item.path} className={classNames(pathArr[pathArr.length-1] === item.path ? 'bg-teal-500 text-white' : 'text-white', linkClasses)}>
        <span className={`text-white font-semi-bold`}>{item.icon}</span>
        <p className={`text-white font-semi-bold ${!collapseNav ? 'block' : 'hidden'} origin-left duration-200`}> {item.label}</p>
    </Link>
  )
}
