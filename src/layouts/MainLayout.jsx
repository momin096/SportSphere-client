import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div >
            <header >
                <nav className='container mx-auto'>
                    <Navbar />
                </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default MainLayout;