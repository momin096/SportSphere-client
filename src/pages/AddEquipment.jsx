import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2';

const AddEquipment = () => {
    const { user } = useContext(AuthContext);

    const handleAddProduct = (e) => {
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

        const email = user.email;
        const name = user.displayName;


        // console.log(item_name, price, photo, category, rating, customize, delivery_time, quantity, description);

        const newProduct = { email, name, item_name, price, photo, category, rating, customize, delivery_time, quantity, description };

        // send data to server 
        fetch('http://localhost:5000/all-products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Product Added",
                        icon: "success",
                        draggable: true
                    });
                    form.reset()
                }
            })

    }
    return (
        <div className="container mx-auto bg-base-200 p-5 lg:py-10 lg:px-20 mt-10">
            <h1 className="text-5xl text-center mb-5 font-medium">Add a product</h1>
            <form onSubmit={handleAddProduct}>
                <fieldset className="fieldset grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Item Name</label>
                        <input name="item_name" type="text" className="input w-full text-xl py-6 " required placeholder="Enter Item Name" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Price</label>
                        <input name="price" type="number" className="input w-full text-xl py-6 " required placeholder="Price" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Image</label>
                        <input name="photo" type="text" className="input w-full text-xl py-6 " required placeholder="Image URL" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Category</label>
                        <select name="category" defaultValue="Pick an option" required className="select w-full text-xl select-lg py-2 ">
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
                        <input name="rating" type="number" className="input w-full text-xl py-6 " required placeholder="Rating" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Customization </label>
                        <input name="customize" type="text" className="input w-full text-xl py-6 " required placeholder="Bat with extra grip" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Processing Time</label>
                        <input name="delivery_time" type="number" className="input w-full text-xl py-6 " required placeholder="Delivery time / Days" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Stock Status</label>
                        <input name="quantity" type="number" className="input w-full text-xl py-6 " required placeholder="Available product quantity" />
                    </div>
                    <div className="lg:col-span-2">
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Description</label>
                        <textarea name="description" className="textarea w-full text-xl" placeholder="Description"></textarea>
                    </div>

                </fieldset>
                <div className="mx-auto justify-center flex items-center my-5">
                    <input className="border px-14 py-2 text-xl font-semibold border-blue-500 rounded-sm hover:rounded-3xl text-black bg-orange-100 hover:bg-blue-100" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;