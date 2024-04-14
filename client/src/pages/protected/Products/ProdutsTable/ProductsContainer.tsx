import { useEffect } from "react";
import { Card } from "@mui/material";
import RecentOrdersTable from "./ProductsTable";
import { useDispatch } from "react-redux";
import ProductsTable from "./ProductsTable";
import { AppDispatch, RootState, useAppSelector } from "../../../../store";
import { getAllProductsEffect } from "../../../../store/effects/product/product.effect";

function ProductsContainer() {
  const dispatch: AppDispatch = useDispatch();

  const testProducts: any[] = [
    {
      id: "1",
      name: "asdasd",
      price: "asd",
    },
    {
      id: "2",
      name: "asdasd",
      price: "asd",
    },
    {
      id: "3",
      name: "asdasd",
      price: "asd",
    },
  ];

  useEffect(() => {
    dispatch(getAllProductsEffect());
  }, []);

  const { products } = useAppSelector((state: RootState) => state.product);

  return (
    <Card>
      <ProductsTable products={products} />
    </Card>
  );
}

export default ProductsContainer;
