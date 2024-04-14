import {
  ProductServerType,
  ProductType,
  SetProductActionType,
  SetProductsActionType,
} from "../../types/product/product";

export const SetProductsSuccess = (
  products: ProductType[]
): SetProductsActionType => ({
  type: ProductServerType.SET_PRODUCTS_SUCCESS,
  products,
});

export const SetProductSuccess = (
  product: ProductType
): SetProductActionType => ({
  type: ProductServerType.SET_PRODUCT_SUCCESS,
  product,
});
