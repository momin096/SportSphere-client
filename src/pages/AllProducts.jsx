import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-5">
                {
                    products.map((product,idx) => <ProductCard key={idx} product={product} />)
                }
            </div>

        </div>
    );
};

export default AllProducts;