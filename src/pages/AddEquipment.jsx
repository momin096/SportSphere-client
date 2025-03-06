
const AddEquipment = () => {
    return (
        <div className="container mx-auto bg-base-200 p-5 lg:py-10 lg:px-20 mt-10">
            <h1 className="text-5xl text-center mb-5 font-medium">Add a product</h1>
            <form >
                <fieldset className="fieldset grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Item Name</label>
                        <input type="text" className="input w-full text-xl py-6 " placeholder="Enter Item Name" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Price</label>
                        <input type="number" className="input w-full text-xl py-6 " placeholder="Price" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Image</label>
                        <input type="text" className="input w-full text-xl py-6 " placeholder="Image URL" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Category</label>
                        {/* <input type="text" className="input w-full text-xl py-6 " placeholder="Category Name" /> */}
                        <select defaultValue="Pick an option" className="select w-full text-xl select-lg py-2 ">
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
                        <input type="number" className="input w-full text-xl py-6 " placeholder="Rating" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Customization </label>
                        <input type="text" className="input w-full text-xl py-6 " placeholder="Bat with extra grip" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Processing Time</label>
                        <input type="number" className="input w-full text-xl py-6 " placeholder="Delivery time / Days" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Stock Status</label>
                        <input type="number" className="input w-full text-xl py-6 " placeholder="Available product quantity" />
                    </div>
                    <div className="lg:col-span-2">
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Description</label>
                        {/* <input type="text" className="input w-full text-xl py-6 " placeholder="Email" /> */}
                        <textarea className="textarea w-full text-xl" placeholder="Description"></textarea>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default AddEquipment;