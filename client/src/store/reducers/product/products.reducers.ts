import { Reducer } from "redux";
import {
  ProductActionTypes,
  ProductServerType,
  ProductState,
} from "../../types/product/product";

const initialState: ProductState = {
  products: [],
};

type ReducerType = Reducer<ProductState, ProductActionTypes>;

const reducer: ReducerType = (
  state = initialState,
  action: ProductActionTypes
) => {
  switch (action.type) {
    case ProductServerType.SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
      };

    case ProductServerType.SET_PRODUCT_SUCCESS:
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === action.product._id
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex] = action.product;

        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        return {
          ...state,
          products: [...state.products, action.product],
        };
      }

    default:
      return state;
  }
};

export default reducer;
