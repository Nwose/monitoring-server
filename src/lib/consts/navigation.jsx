import {HiDatabase} from 'react-icons/hi'
import {WiTime9} from 'react-icons/wi'
import {BiMobile} from 'react-icons/bi'
import {FaBinoculars,FaBug,FaKeyboard,FaHandRock,FaUpload} from 'react-icons/fa'
import {GiNetworkBars} from 'react-icons/gi'
import {MdPermContactCalendar} from 'react-icons/md'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'exam',
		label: 'Exam',
		path: 'exam',
		icon: <HiDatabase />
	},
	{
		key: 'activation time',
		label: 'Activation Time',
		path: 'activation',
		icon: <WiTime9 />
	},
	{
		key: 'start time',
		label: 'Start Time',
		path: 'settime',
		icon: <WiTime9 />
	},
	{
		key: 'attendance',
		label: 'Attendance',
		path: 'attendance',
		icon: <BiMobile />
	},
	{
		key: 'center monitoring',
		label: 'Center Monitoring',
		path: 'monitoring',
		icon: <FaBinoculars />
	},
	{
		key: 'center technical issues',
		label: 'Center Technical Issues',
		path: 'issues',
		icon: <FaBug />
	},
    {
		key: 'live centers',
		label: 'Live Centers',
		path: 'centers',
		icon: <GiNetworkBars />
	},
    {
		key: 'malpractice',
		label: 'Malpractice',
		path: 'malpractice',
		icon: <FaKeyboard />
	},
    {
		key: 'fastfinger',
		label: 'Fastfinger',
		path: 'fastfinger',
		icon: <FaHandRock />
	},
     {
		key: 'identity management',
		label: 'Identity Management',
		path: 'identity management',
		icon: <MdPermContactCalendar />
	},
     {
		key: 'center upload',
		label: 'Center Upoad',
		path: 'center upload',
		icon: <FaUpload />
	}
]