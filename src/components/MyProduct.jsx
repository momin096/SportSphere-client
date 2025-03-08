import { TbShoppingBagEdit } from "react-icons/tb";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";

const MyProduct = ({ product, setProducts ,products }) => {
    const { _id, item_name, price, photo, category, rating, quantity } = product;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                // delete from the database
                fetch(`http://localhost:5000/my-products/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingProducts = products.filter(product => product._id !== _id);
                            setProducts(remainingProducts)
                        }
                    })
            }
        });
    }
    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24">
                            <img
                                src={photo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{item_name}</div>
                        <div className="text-sm font-semibold opacity-50">Price: {price}</div>
                    </div>
                </div>
            </td>
            <td>
                <span>{category}</span> <br />
                <span>Rating: {rating}</span>
            </td>
            <td>{quantity} Pcs</td>
            <th className="space-x-1">
                <button title="Edit" className="text-2xl text-blue-500 hover:bg-blue-300 p-2 rounded-lg hover:text-black ">
                    <TbShoppingBagEdit />
                </button>
                <button onClick={handleDelete} title="Delete" className="text-2xl text-red-500 hover:bg-red-500 p-2 rounded-lg hover:text-white ">
                    <MdDeleteSweep />
                </button>
            </th>
        </tr>
    );
};

export default MyProduct;