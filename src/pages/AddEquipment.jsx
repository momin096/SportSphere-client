
const AddEquipment = () => {
    return (
        <div className="container mx-auto bg-base-200 p-10 px-20">
            <h1 className="text-5xl text-center mb-5">Add a product</h1>
            <form >
                <fieldset className="fieldset grid grid-cols-2 gap-5 justify-between">
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1">Item Name</label>
                        <input type="text" className="input w-full text-xl py-6 " placeholder="Enter Item Name" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1">Price</label>
                        <input type="number" className="input w-full text-xl py-6 " placeholder="Price" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1">Image</label>
                        <input type="text" className="input w-full text-xl py-6 " placeholder="Image URL" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1">Category</label>
                        <input type="text" className="input w-full text-xl py-6 " placeholder="Category Name" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1">Rating</label>
                        <input type="number" className="input w-full text-xl py-6 " placeholder="Rating" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1">Customization </label>
                        <input type="text" className="input w-full text-xl py-6 " placeholder="Bat with extra grip" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1">Processing Time</label>
                        <input type="number" className="input w-full text-xl py-6 " placeholder="Delivery time" />
                    </div>
                    <div>
                        <label className="fieldset-label text-xl text-base-content  mb-1">Stock Status</label>
                        <input type="number" className="input w-full text-xl py-6 " placeholder="Available product quantity" />
                    </div>
                    <div className="col-span-2">
                        <label className="fieldset-label text-xl text-base-content  mb-1">Description</label>
                        {/* <input type="text" className="input w-full text-xl py-6 " placeholder="Email" /> */}
                        <textarea className="textarea w-full text-xl"  placeholder="Description"></textarea>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default AddEquipment;