import {  Slide } from "react-awesome-reveal";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { _id, photo, item_name, price, rating, quantity, category } = product;
    return (
        <Slide direction="left">
            <div className="card bg-base-200 w-96 md:w-auto flex ">
                <figure className="px-5 pt-10 hover:scale-110 transition delay-75 duration-300 w-80 mx-auto h-80">
                    <img
                        src={photo}
                        alt="Shoes"
                        className="rounded-xl  w-full h-full object-cover" />
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
        </Slide>
    );
};

export default ProductCard;