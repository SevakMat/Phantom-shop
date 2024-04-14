import { useEffect } from "react";
import { RootState, useAppSelector } from "../../../store";
import CreateProduct from "./CreateProduct";
import { getAllProductsEffect } from "../../../store/effects/product/product.effect";
import { useDispatch } from "react-redux";

const CreateProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsEffect());
  }, []);

  const { products } = useAppSelector((state: RootState) => {
    return state.product;
  });

  return <CreateProduct products={products} />;
};
export default CreateProductPage;
