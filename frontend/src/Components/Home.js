import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar'; 
import '../Components/Home.css';
import ClassList from './ClassList';

function Home() {
    return (
        <>
            <Navbar />
            <ClassList />
            <Routes>
                <Route path="/My Profile" />
                <Route path="/Settings" />
                <Route path="/About Us"/>
                <Route path="/ClassLayout/MainLayout/MainLayout"/>
                {/* Add other routes here as needed */}
            </Routes>
        </>
    );
}

export default Home;
