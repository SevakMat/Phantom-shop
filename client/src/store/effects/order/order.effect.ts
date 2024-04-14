import { NavigateFunction } from "react-router-dom";

import { AppDispatch } from "../..";
import {
  GetAllOrdersService,
  createOrderService,
} from "../../../services/orders.service";
import { ProductType } from "../../types/product/product";
import { SetOrdersSuccess } from "../../actions/order/order.action";

export const createOrderEffect = (
  cartItems: ProductType[],
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const getAllIds = (products: ProductType[]): string[] => {
        return products.reduce(
          (accumulator: string[], currentValue: ProductType) => {
            accumulator.push(currentValue._id as string);
            return accumulator;
          },
          []
        );
      };
      const createdProductIds = getAllIds(cartItems);
      console.log(333, createdProductIds);

      await createOrderService(createdProductIds);
      navigate("/home");
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

export const getAllOrdersEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await GetAllOrdersService();

      const { data } = result;
      console.log(data);

      dispatch(SetOrdersSuccess(data));
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};
