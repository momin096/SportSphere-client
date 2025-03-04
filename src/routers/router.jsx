import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddEquipment from "../pages/AddEquipment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/add-equipment',
          element: <AddEquipment />,
        }
      ]
    },
  ]);


  export default router;