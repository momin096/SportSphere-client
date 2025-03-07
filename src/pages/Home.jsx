import React from 'react';
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <FeaturedProducts />
        </div>
    );
};

export default Home;