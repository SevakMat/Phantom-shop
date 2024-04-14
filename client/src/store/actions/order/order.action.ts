import {
  OrderType,
  OrdersServerType,
  SetOrdersActionType,
} from "../../types/order/order";

export const SetOrdersSuccess = (orders: OrderType[]): SetOrdersActionType => ({
  type: OrdersServerType.SET_ORDERS_SUCCESS,
  orders,
});
