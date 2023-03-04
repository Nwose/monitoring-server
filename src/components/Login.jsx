import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginImg from '../assests/siora-photoo.jpg'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Login = () => {
  
     const [email, setEmail] = useState("");
     const [password, setPassowrd] = useState("");
     const navigate = useNavigate();
     const onLogin = async (e) => {
        //  navigate("/layout/exam")
               e.preventDefault()
               axios.post('http://165.227.142.137:5010/api/v1/auth/login', {
               email: email,
                password: password
         })
         .then(function (response) {
             console.log(response);
             if(response.data.success){
                 navigate("/layout/exam")
             }
         })
         .catch(function (error) {
             console.log(error);
             console.log(error.response.data.errors)
             for(let i = 0; i <= error.response.data.errors.length; i++ ) {
                 toast.error(error.response.data.errors[i].message, {
                     position: "top-center",
                     autoClose: 1000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "light",
                     });
             }
         });
       
    }

    return (
        <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
            <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl'>
                <div className='sm:w-1/2 px-8'>
                   
                    <h2 className='font-bold text-2xl text-gray-500 py-4'>Monitoring App</h2>
                    <p className='text-sm mt-4'>If your already a member, easily log in</p>
                    <div className='flex flex-col gap-4'>
                        <input type="email" className='p-2 mt-4 rounded-xl border' name="email"  placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <div className='relative'>
                            <input type="password" className='p-2 rounded-xl border w-full' name="password" placeholder='Password' value={password} onChange={(e)=> setPassowrd(e.target.value)} />
                            <AiOutlineEyeInvisible className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500' />
                        </div>
                        <button className='bg-emerald-400 p-2 text-white mb-3 rounded-xl hover:bg-teal-600' onClick={(e) => onLogin(e)}>Login</button>
                        <ToastContainer/>
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