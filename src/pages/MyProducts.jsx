import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    // const data = useLoaderData();
    console.log(user.email);
    // const email = user.email;
 
    return (
        <div>

        </div>
    );
};

export default MyProducts;