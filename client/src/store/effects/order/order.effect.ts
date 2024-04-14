import { AppDispatch } from "../..";
import {
  GetAllOrdersService,
  createOrderService,
} from "../../../services/orders.service";
import { ProductType } from "../../types/product/product";
import { SetOrdersSuccess } from "../../actions/order/order.action";

export const createOrderEffect = (cartItems: ProductType[]): any => {
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

      await createOrderService(createdProductIds);
    } catch (error: any) {
      console.log(error);
    } finally {
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
    }
  };
};
