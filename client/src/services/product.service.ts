import axios from "../config/axios";
import { ProductType } from "../store/types/product/product";

export const CreateProductService = async (
  createProductData: ProductType
): Promise<any> => {
  return axios.post("api/product/add", { ...createProductData });
};

export const EditProductService = async (
  editProductData: ProductType
): Promise<any> => {
  const { _id: productId } = editProductData;
  return axios.patch(`api/product/update?productId=${productId}`, {
    name: editProductData.name,
    price: editProductData.price,
  });
};

export const GetProductService = async (id: string): Promise<any> => {
  return axios.get(`api/product/:${id}`);
};

export const GetAllProductsService = async (): Promise<any> => {
  return axios.get("api/product/all");
};

export const SearchProductsService = async (name: string): Promise<any> => {
  return axios.get(`api/product/search?name=${name}`);
};
