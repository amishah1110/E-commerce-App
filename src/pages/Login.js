import React from "react";
import loginIcon from '../assets-mern/signin.gif'

const Login = () => {
    return (
        <section id='login'>
            <div className="mx-auto container p-4">
                <div className='p-2 py-5 bg-white w-full max-w-md mx-auto'> {/*This is the login creds section*/}
                    <div className="w-20 h-20 mx-auto">
                        <img src={loginIcon} alt="login-icon"></img>
                    </div>

                    <form>
                        <div>
                            <label>Email: </label>
                            <input type='email' placeholder="Enter email address" />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type='password' placeholder="Enter password" />
                        </div>
                        <button className="bg-green-800 text-white p-2 rounded-full">Login</button>
                    </form>

                </div>

            </div>
        </section>
    )
}
export default Login;