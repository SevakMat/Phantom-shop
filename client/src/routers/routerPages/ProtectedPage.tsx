import Products from "../../pages/protected/Products/ProdutsTable";
import CreateProductPage from "../../pages/protected/user/CreateProductPage";
import ProtectedRoute from "../types/ProtectedRoute";

const ProtectedPageRoute: ProtectedRoute = {
  isPrivate: true,
  routerProps: [
    {
      path: "/admin/products",
      element: <Products />,
    },

    {
      path: "/user/product/create",
      element: <CreateProductPage />,
    },
  ],
};

export default ProtectedPageRoute;
