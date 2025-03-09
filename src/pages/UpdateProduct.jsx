import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();

    const navigate = useNavigate();

    const { _id, item_name, price, photo, category, rating, customize, delivery_time, quantity, description } = product;
    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const item_name = form.item_name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const customize = form.customize.value;
        const delivery_time = form.delivery_time.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedProduct = {
            item_name,
            photo,
            price,
            category,
            rating,
            customize,
            delivery_time,
            quantity,
            description,
        };

        fetch(`http://localhost:5000/my-products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Product Updated Successfully",
                        icon: "success",
                        draggable: true
                    });
                    
                    navigate('/my-products')
                }
            })

    }
    return (
        <div>
            <div className="container mx-auto bg-base-200 p-5 lg:py-10 lg:px-20 mt-10">
                <h1 className="text-5xl text-center mb-5 font-medium">Update {item_name}</h1>
                <form onSubmit={handleUpdate}>
                    <fieldset className="fieldset grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
                        <div>
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Item Name</label>
                            <input defaultValue={item_name} name="item_name" type="text" className="input w-full text-xl py-6 " required placeholder="Enter Item Name" />
                        </div>
                        <div>
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Price</label>
                            <input defaultValue={price} name="price" type="number" className="input w-full text-xl py-6 " required placeholder="Price" />
                        </div>
                        <div>
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Image</label>
                            <input defaultValue={photo} name="photo" type="text" className="input w-full text-xl py-6 " required placeholder="Image URL" />
                        </div>
                        <div>
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Category</label>
                            <select name="category" defaultValue={category} required className="select w-full text-xl select-lg py-2 ">
                                <option disabled={true} >Pick an option</option>
                                <option>Football</option>
                                <option>Basketball</option>
                                <option>Cricket</option>
                                <option>Baseball</option>
                                <option>Tennis</option>
                                <option>Badminton</option>
                                <option>Swimming</option>
                            </select>
                        </div>
                        <div>
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Rating</label>
                            <input defaultValue={rating} name="rating" type="text" className="input w-full text-xl py-6 " placeholder="Rating" />
                        </div>
                        <div>
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Customization </label>
                            <input defaultValue={customize} name="customize" type="text" className="input w-full text-xl py-6 " required placeholder="Bat with extra grip" />
                        </div>
                        <div>
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Processing Time</label>
                            <input defaultValue={delivery_time} name="delivery_time" type="number" className="input w-full text-xl py-6 " required placeholder="Delivery time / Days" />
                        </div>
                        <div>
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Stock Status</label>
                            <input defaultValue={quantity} name="quantity" type="number" className="input w-full text-xl py-6 " required placeholder="Available product quantity" />
                        </div>
                        <div className="lg:col-span-2">
                            <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Description</label>
                            <textarea defaultValue={description} name="description" className="textarea w-full text-xl" placeholder="Description"></textarea>
                        </div>

                    </fieldset>
                    <div className="mx-auto justify-center flex items-center my-5">
                        <input className="border px-14 py-2 text-xl font-semibold border-blue-500 rounded-sm hover:rounded-3xl text-black bg-orange-100 hover:bg-blue-100" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;