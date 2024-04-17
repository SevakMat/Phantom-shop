import axios from "../config/axios";
import { ProductType } from "../store/types/product/product";

export const CreateProductService = async (
  createProductData: ProductType
): Promise<any> => {
  return axios.post("task/product/add", { ...createProductData });
};

export const EditProductService = async (
  editProductData: ProductType
): Promise<any> => {
  const { _id: productId } = editProductData;
  return axios.patch(`task/product/update?productId=${productId}`, {
    name: editProductData.name,
    price: editProductData.price,
  });
};

export const GetAllProductsService = async (): Promise<any> => {
  return axios.get("task/product/all");
};

export const SearchProductsService = async (name: string): Promise<any> => {
  return axios.get(`task/product/search?name=${name}`);
};
