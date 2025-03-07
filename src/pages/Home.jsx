import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className='container mx-auto'>

            <div>
                <h1 className='text-5xl font-semibold text-center my-5'>Featured Products</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map((product, idx) => <FeaturedProducts key={idx} product={product} />)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;