import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import './Login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [action, setAction] = useState("Sign Up");

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (action === "Login") {
            console.log(email);
            console.log(password);

            try {
                const response = await axios.post('http://localhost:5001/api/login', { email, password });
                console.log(response);
            } catch (err) {
                console.error(err);
            }

            navigate("/Home");

        } else {
            setAction("Login");
        }
    }

    const handleSignUp = async () => {
        if (action === "Sign Up") {
            console.log(name);
            console.log(email);
            console.log(password);

            try {
                const response = await axios.post('http://localhost:5001/api/register', { email, password });
                console.log(response);
            } catch (err) {
                console.error(err);
            }

            navigate("/Quiz");


        } else {
            setAction("Sign Up");
        }
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
                    <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)}/>
                </div> }
                <div className='input'>
                    <MdEmail className='icon' />
                    <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                </div><div className='input'>
                    <FaLock className='icon' />
                    <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : 
            <div className='forgot-password'>Forgot Password? <span>Click here</span></div> }
            <div className='submit-container'>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignUp}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLogin}>Login</div>
            </div>
        </div>
    )
}

export default Login