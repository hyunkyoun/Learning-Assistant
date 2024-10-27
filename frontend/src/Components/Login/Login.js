import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [action, setAction] = useState('Sign Up');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [role, setRole] = useState('');
    const [emailError, setEmailError] = useState('');
    const [fieldError, setFieldError] = useState('');

    const navigate = useNavigate();

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.com$/;
        return emailPattern.test(email);
    };

    const areFieldsComplete = () => {
        if (action === 'Login') {
            return email && password;
        } else {
            return name && email && password;
        }
    };

    const handleLogin = () => {
        if (!areFieldsComplete()) {
            setFieldError('Please complete all fields.');
            return;
        } else {
            setFieldError('');
        }

        if (!isEmailValid(email)) {
            setEmailError('Please enter a valid email address (e.g., @gmail.com, @hotmail.com, @yahoo.com)');
            return;
        } else {
            setEmailError('');
        }

        // Navigate to Home if the email and password are valid
        navigate('/Home');
    };

    const handleSignUp = () => {
        if (!areFieldsComplete()) {
            setFieldError('Please complete all fields.');
            return;
        } else {
            setFieldError('');
        }

        if (!isEmailValid(email)) {
            setEmailError('Please enter a valid email address (e.g., @gmail.com, @hotmail.com, @yahoo.com)');
            return;
        } else {
            setEmailError('');
        }

        setIsModalOpen(true);
    };

    const toggleAction = () => {
        setAction((prevAction) => (prevAction === 'Login' ? 'Sign Up' : 'Login'));
        setName('');
        setEmail('');
        setPassword('');
        setEmailError('');
        setFieldError('');
        setIsModalOpen(false);
    };

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        setIsModalOpen(false);
    };

    return (
        <div className='login_body'>
        <div className='login_container'> {/* Unique class name */}
            {isModalOpen && <LoginModal onRoleSelect={handleRoleSelection} />}
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === 'Login' ? null : 
                <div className='input'>
                    <FaUser className='icon' />
                    <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
                </div>}
                <div className='input'>
                    <MdEmail className='icon' />
                    <input 
                        type='email' 
                        placeholder='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='input'>
                    <FaLock className='icon' />
                    <input 
                        type='password' 
                        placeholder='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
            </div>
            {emailError && <div className='error-message'>{emailError}</div>}
            {fieldError && <div className='error-message'>{fieldError}</div>}
            <div className='forgot-password'>
                Forgot Password? <span>Click here</span>
            </div>
            <div className='submit-container'>
                <div 
                    className={action === 'Login' ? "submit gray" : "submit"} 
                    onClick={toggleAction}
                >
                    {action === 'Login' ? 'Switch to Sign Up' : 'Switch to Login'}
                </div>
                <div 
                    className={action === 'Sign Up' ? "submit gray" : "submit"} 
                    onClick={action === 'Login' ? handleLogin : handleSignUp} 
                    disabled={!areFieldsComplete()}
                >
                    {action}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
