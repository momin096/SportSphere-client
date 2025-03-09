import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import MyProduct from "../components/MyProduct";
import { Slide } from "react-awesome-reveal";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/my-products?email=${user?.email}`);
                const data = await response.json();
                setProducts(data);

            } catch (error) {
                toast.error(error)
            }
        };

        fetchProducts();
    }, [user?.email]);


    return (
        <div className="container mx-auto">
            <h2 className="text-2xl lg:text-5xl text-center font-semibold my-10"><span className="text-orange-500">{user.displayName}'s</span> Products</h2>
            <Slide>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th className="hidden md:inline-block">Category</th>
                                <th className="hidden md:inline-block">Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, idx) => <MyProduct key={idx} product={product} setProducts={setProducts} products={products} />)
                            }
                        </tbody>

                    </table>
                </div>
            </Slide>

        </div>
    );

};

export default MyProducts;