import { useEffect } from "react";
import { Card } from "@mui/material";
import RecentOrdersTable from "./ProductsTable";
import { useDispatch } from "react-redux";
import ProductsTable from "./ProductsTable";
import { AppDispatch, RootState, useAppSelector } from "../../../../store";
import { getAllProductsEffect } from "../../../../store/effects/product/product.effect";

function ProductsContainer() {
  const dispatch: AppDispatch = useDispatch();

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
