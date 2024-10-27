import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginModal from './LoginModal';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [action, setAction] = useState("Sign Up");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (action === "Login") {
            try {
                const response = await axios.post('http://localhost:5001/api/login', { email, password });
                console.log(response);
                navigate("/Home");
            } catch (err) {
                console.error(err);
            }
        } else {
            setAction("Login");
        }
    };

    const handleSignUp = () => {
        if (action === "Sign Up") {
            setIsModalOpen(true);
        } else {
            setAction("Sign Up");
        }
    };

    const handleRoleSelection = async (selectedRole) => {
        setRole(selectedRole);
        setIsModalOpen(false);

        try {
            const response = await axios.post('http://localhost:5001/api/register', { name, email, password, role });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="wrapper">
            {isModalOpen && <LoginModal onRoleSelect={handleRoleSelection} />}

            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === "Login" ? null : (
                        <div className='input'>
                            <FaUser className='icon' />
                            <input 
                                type='text' 
                                placeholder='Name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                    )}
                    <div className='input'>
                        <MdEmail className='icon' />
                        <input 
                            type='email' 
                            placeholder='Email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className='input'>
                        <FaLock className='icon' />
                        <input 
                            type='password' 
                            placeholder='Password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                </div>
                {action === "Sign Up" ? null : (
                    <div className='forgot-password'>
                        Forgot Password? <span>Click here</span>
                    </div>
                )}
                <div className='submit-container'>
                    <div 
                        className={`submit ${action === "Login" ? "gray" : ""}`} 
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </div>
                    <div 
                        className={`submit ${action === "Sign Up" ? "gray" : ""}`} 
                        onClick={handleLogin}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
