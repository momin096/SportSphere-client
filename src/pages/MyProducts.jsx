import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    console.log(products);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/my-products?email=${user?.email}`);
                const data = await response.json();
                setProducts(data);
                
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [user?.email]);


    return (
        <div>
            <h2 className="text-xl font-bold">My Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );

};

export default MyProducts;