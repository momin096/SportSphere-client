import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const AllProducts = () => {
    const products = useLoaderData();
    const [sortedProducts, setSortedProducts] = useState(products);

    const handleSort = () =>{
        const sorted = [...sortedProducts].sort((a,b)=> b.price - a.price);
        setSortedProducts(sorted);
    }
    return (
        <div className="container mx-auto p-5">
            <div className="flex justify-between items-center">
                <div>

                </div>
                <div>
                    <h2 className="text-3xl xl:text-5xl font-medium">All Products</h2>
                </div>
                <button onClick={handleSort} className=" my-10 border border-orange-500 px-8 py-2 rounded-lg btn text-xl">Sort</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    sortedProducts.map((product, idx) => <ProductCard key={idx} product={product} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;