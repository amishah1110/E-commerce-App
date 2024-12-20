import React, { useState } from "react";
import loginIcon from '../assets-mern/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Login = () => {
    const[showPassword, setShowPassword] = useState(false); 

    return (
        <section id='login'>
            <div className="mx-auto container p-4">
                <div className='p-4 py-5 bg-white w-full max-w-sm mx-auto'> {/*This is the login creds section*/}
                    <div className="w-20 h-20 mx-auto">
                        <img src={loginIcon} alt="login-icon"></img>
                    </div>

                    <form className='pt-6 '>
                        <div className="grid">
                            <label>Email: </label>
                            <div className="bg-slate-200 p-2">
                                <input type='email' placeholder="Enter email address" className="w-full h-full bg-transparent" />
                            </div>
                            
                        </div>
                        <div>
                            <label>Password: </label>
                            <div className="bg-slate-200 p-2 flex">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter password" className="w-full h-full bg-transparent" />
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((prev)=>!prev)}>
                                    <span>
                                        {
                                            showPassword ? (<FaEyeSlash />) : (<FaEye />)
                                        }                                        
                                    </span>
                                </div>
                            </div>
                            <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-600'>Forgot Password</Link> 
                
                        </div>
                        <button className="bg-green-800 text-white px-6 py-2 rounded-full w-full max-w-[150px] hover:scale-110 hover:bg-green-900 transition-all mx-auto block mt-6">Login</button>
                    </form>
                    <p className="my-5">Don't have an account? <Link to={"/sign-up"} className="hover:underline hover:text-red-700">Click here to Sign Up</Link></p>

                </div>

            </div>
        </section>
    )
}
export default Login;