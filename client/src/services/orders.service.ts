import axios from "../config/axios";

export const createOrderService = async (
  createdProductIds: string[]
): Promise<any> => {
  return axios.post("api/order/add", { productIds: createdProductIds });
};

export const GetAllOrdersService = async (): Promise<any> => {
  return axios.get("api/order/all");
};
