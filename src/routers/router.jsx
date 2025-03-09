import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddEquipment from "../pages/AddEquipment";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import MyProducts from "../pages/MyProducts";
import UpdateProduct from "../pages/UpdateProduct";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/all-products')
      },
      {
        path: '/product/:id',
        element: <PrivateRoute>
          <ProductDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/all-products/${params.id}`)
      },
      {
        path: '/add-equipment',
        element: <PrivateRoute>
          <AddEquipment />
        </PrivateRoute>,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '/all-products',
        element: <AllProducts />,
        loader: () => fetch('http://localhost:5000/all-products')
      },
      {
        path: '/my-products',
        element: <PrivateRoute>
          <MyProducts />
        </PrivateRoute>,
      },
      {
        path: '/update-product/:id',
        element: <PrivateRoute>
          <UpdateProduct />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/my-products/${params.id}`)
      }
    ]
  },
]);


export default router;