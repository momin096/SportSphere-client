import React from 'react';
import ProductCard from '../components/ProductCard';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const Home = () => {
    const products = useLoaderData();
    const newProducts = products.slice(0, 6)

    return (
        <div>
          {/* // Container */}
            <div className='container mx-auto'>
                {/* SLIDER */}
                <div>
                    <Slider />
                </div>

                {/* Featured Products */}
                <section className='p-5'>
                    <h1 className='text-3xl lg:text-5xl font-semibold text-center my-10'>Featured Products</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center'>
                        {
                            newProducts.map((product, idx) => <ProductCard key={idx} product={product} />)
                        }
                    </div>
                    <div className='flex justify-center my-10'>
                        <Link to={'/all-products'} className='px-8 border py-2 font-medium hover:rounded-4xl border-orange-500 '>View All</Link>
                    </div>
                </section>

            </div>
            <footer className='mt-10'>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;