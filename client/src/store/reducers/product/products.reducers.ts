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
      // Check if the product already exists in the array
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === action.product._id
      );

      // If the product exists, update it; otherwise, add it
      if (existingProductIndex !== -1) {
        // Product already exists, update it
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex] = action.product;

        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        // Product doesn't exist, add it
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
