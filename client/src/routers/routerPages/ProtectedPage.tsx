import MePage from "../../pages/protected/Me/MePage";
import Products from "../../pages/protected/Products/ProdutsTable";
import OrdersPage from "../../pages/protected/Products/OrderTable/OrdersPage";
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
      path: "/admin/orders",
      element: <OrdersPage />,
    },
    {
      path: "/me",
      element: <MePage />,
    },

    {
      path: "/user/product/create",
      element: <CreateProductPage />,
    },
  ],
};

export default ProtectedPageRoute;
