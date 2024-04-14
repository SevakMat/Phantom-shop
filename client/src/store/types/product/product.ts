export enum ProductServerType {
  SET_PRODUCTS_SUCCESS = "SET_PRODUCTS_SUCCESS",
  SET_PRODUCT_SUCCESS = "SET_PRODUCT_SUCCESS",
}

export interface ProductState {
  products: ProductType[];
}

export interface ProductType {
  _id?: string;
  name: string;
  price: number;
}

export interface SetProductsActionType {
  type: ProductServerType.SET_PRODUCTS_SUCCESS;
  products: ProductType[];
}

export interface SetProductActionType {
  type: ProductServerType.SET_PRODUCT_SUCCESS;
  product: ProductType;
}

export type ProductActionTypes = SetProductsActionType | SetProductActionType;
