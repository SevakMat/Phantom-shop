export enum OrdersServerType {
  SET_ORDERS_SUCCESS = "SET_ORDERS_SUCCESS",
}

export interface OrderState {
  orders: OrderType[];
}

export interface OrderType {
  _id?: string;
  user: string;
  totalAmount: number;
  date: Date;
  products: string[];
}

export interface SetOrdersActionType {
  type: OrdersServerType.SET_ORDERS_SUCCESS;
  orders: OrderType[];
}

export type OrderActionTypes = SetOrdersActionType;
