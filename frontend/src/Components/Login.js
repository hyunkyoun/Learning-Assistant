import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [action, setAction] = useState("Sign Up");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: " , password);
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> : 
                <div className='input'>
                    <FaUser className='icon' />
                    <input type='text' placeholder='name' />
                </div> }
                <div className='input'>
                    <MdEmail className='icon' />
                    <input type='email' placeholder='email' />
                </div><div className='input'>
                    <FaLock className='icon' />
                    <input type='password' placeholder='password' />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : 
            <div className='forgot-password'>Forgot Password? <span>Click here</span></div> }
            <div className='submit-container'>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default Login