import { Slide } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData();
    const { item_name, price, photo, rating, customize, delivery_time, quantity, description } = product;
    return (
        <Slide direction="down" duration={800}>
            <div className="container mx-auto shadow-2xl bg-base-100 min-h-[calc(100vh-200px)] mt-5 rounded-2xl p-5">
                <div className="card lg:card-side gap-2 lg:gap-20">
                    <figure className="w-full lg:w-2/5">
                        <img
                            className="p-10"
                            src={photo}
                            alt={item_name} />
                    </figure>
                    <div className="w-full lg:w-1/2 space-y-5 flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold">{item_name}</h2>
                        <p className="text-xl font-medium">Price : ${price}</p>
                        <p className="text-xl">Customization: {customize}</p>
                        <p>Delivery within {delivery_time} Days</p>
                        <p>Available : {quantity} pics</p>
                        <p>Rating: {rating}</p>
                        <div className="divider"></div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default ProductDetails;