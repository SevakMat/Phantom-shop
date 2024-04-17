import axios from "../config/axios";

export const createOrderService = async (
  createdProductIds: string[]
): Promise<any> => {
  return axios.post("task/order/add", { productIds: createdProductIds });
};

export const GetAllOrdersService = async (): Promise<any> => {
  return axios.get("task/order/all");
};
