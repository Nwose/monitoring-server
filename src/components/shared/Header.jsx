import { useNavigate } from 'react-router-dom'
import {MdLogout} from 'react-icons/md'



const Header = ({setCollapseNav}) => {

  const navigate = useNavigate();

  const logout = ()=>{
    navigate("/")
  }
  return (
    <div className='bg-neutral-200 h-16 px-4 flex items-center justify-between'>
         <div
            className="HAMBURGER-ICON space-y-2 bg-teal-500 p-2 rounded-md cursor-pointer"
            onClick={() => setCollapseNav((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-6 animate-pulse bg-white font-bold"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white font-bold"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white font-bold"></span>
          </div>
          <div className='flex items-center mr-4 gap-2 text-gray-400 font-semibold cursor-pointer' onClick={logout}>
            <MdLogout className='font-bold' />
            Log out
          </div>
    </div>
  )
}

export default Header