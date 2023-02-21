import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginImg from '../assests/siora-photoo.jpg'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");

    const navigate = useNavigate();

    const onLogin = () => {
        console.log(email, password)
        if(!email || !password){
            alert("Enter Email and Password")
        }else{
            navigate("/layout/exam")
        }
    }


    return (
        <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
            <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl'>
                <div className='sm:w-1/2 px-8'>
                    <h2 className='font-bold text-2xl text-gray-500 py-4'>Monitoring App</h2>
                    <p className='text-sm mt-4'>If your already a member, easily log in</p>
                    <div className='flex flex-col gap-4'>
                        <input type="email" className='p-2 mt-4 rounded-xl border' name="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <div className='relative'>
                            <input type="password" className='p-2 rounded-xl border w-full' name="password" placeholder='Password' value={password} onChange={(e)=> setPassowrd(e.target.value)} />
                            <AiOutlineEyeInvisible className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500' />
                        </div>
                        <button className='bg-emerald-400 p-2 text-white mb-3 rounded-xl hover:bg-teal-600' onClick={onLogin}>Login</button>
                        
                    </div>

                    <div className='mt-10 grid grid-cols-3 items-center text-400-gray'>
                        <hr className='border-gray-400' />
                        <p className='text-center'>OR</p>
                        <hr className='border-gray-400' />
                    </div>

                    <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm mr-3 mb-4'><FcGoogle className='mr-2'/> Login with google</button>
                    
                    {/* <p>Go to Dashboard</p><Link to="/layout" className="underline">Go to products</Link> */}
                </div>

                <div className='w-1/2 p-5 sm:block hidden'>
                    <img className='rounded-2xl' src={loginImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login