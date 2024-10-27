import React from 'react';
import './LoginModal.css';
import student from '../../assets/img/student.png';
import teacher from '../../assets/img/teacher.png';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onRoleSelect }) => {

    const navigate = useNavigate();

    const handleTeacherClick = (role) => {
        onRoleSelect(role);
        navigate('/Home');
    }

    const handleStudentClick = (role) => {
        onRoleSelect(role);
        navigate('/Quiz');
    }

    return (
        <div className='modal_overlay'>
            <div className='modal_content'>
                <h2>Pick your role</h2>

                <div className='modal_buttons'>
                    <div className='modal_teacher' onClick={() => handleTeacherClick("teacher")}>
                        <img className='modal_image' src={teacher} alt="Teacher"></img>
                        <h3 className='modal_text'>I'm a teacher</h3>
                    </div>
                    <div className='modal_student' onClick={() => handleStudentClick("student")}>
                        <img className='modal_image' src={student} alt="Student"></img>
                        <h3 className='modal_text'>I'm a student</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LoginModal