import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { _id, photo, item_name, price, rating, quantity, category } = product;
    return (
        <div>
            <div className="card bg-base-200 w-96 flex ">
                <figure className="px-10 pt-10 hover:scale-120 transition delay-75 duration-300 ">
                    <img
                        src={photo}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{item_name}</h2>
                    <p className="font-semibold">Price: $ {price}</p>
                    <p>Available: {quantity}</p>
                    <p>Category: {category}</p>
                    <p className="flex gap-1"><IoMdStar className="text-xl text-amber-500" />{rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${_id}`} className="border px-5 py-2 border-blue-500 hover:rounded-3xl font-medium">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;