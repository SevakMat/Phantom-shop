import React from "react";

import Products from "../../pages/protected/Products/ProdutsTable";
import OrdersPage from "../../pages/protected/Products/OrderTable/OrdersPage";
import CreateProductPage from "../../pages/protected/user/CreateProductPage";
import ProtectedRoute from "../types/ProtectedRoute";
import SidebarLayout from "../../layouts/SidebarLayout";

const RouteWithHeader = ({ Component }: { Component: React.ReactNode }) => (
  <SidebarLayout>{Component}</SidebarLayout>
);

const ProtectedPageRoute: ProtectedRoute = {
  isPrivate: true,
  routerProps: [
    {
      path: "/admin/products",
      element: <RouteWithHeader Component={<Products />} />,
    },
    {
      path: "/admin/orders",
      element: <RouteWithHeader Component={<OrdersPage />} />,
    },

    {
      path: "/user/product/create",
      element: <RouteWithHeader Component={<CreateProductPage />} />,
    },
  ],
};

export default ProtectedPageRoute;
