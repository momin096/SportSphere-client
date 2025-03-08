import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const MainLayout = () => {
    const { loading } = useContext(AuthContext);
    return (
        <div >
            <header >
                <nav className='container mx-auto'>
                    <Navbar />
                </nav>
            </header>
            {
                loading ? <Loading /> : <Outlet />
            }
        </div>
    );
};

export default MainLayout;