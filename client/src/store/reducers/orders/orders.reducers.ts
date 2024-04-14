import { Reducer } from "redux";
import {
  OrderActionTypes,
  OrderState,
  OrdersServerType,
} from "../../types/order/order";

const initialState: OrderState = {
  orders: [],
};

type ReducerType = Reducer<OrderState, OrderActionTypes>;

const reducer: ReducerType = (
  state = initialState,
  action: OrderActionTypes
) => {
  switch (action.type) {
    case OrdersServerType.SET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
      };

    default:
      return state;
  }
};

export default reducer;
