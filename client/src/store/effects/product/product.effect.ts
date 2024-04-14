import { AppDispatch } from "../..";
import { NavigateFunction } from "react-router";
import {
  CreateProductService,
  EditProductService,
  GetAllProductsService,
  GetProductService,
  SearchProductsService,
} from "../../../services/product.service";
import { ProductType } from "../../types/product/product";
import { loginRequestSuccess } from "../../actions/auth/auth.actions";
import {
  SetProductSuccess,
  SetProductsSuccess,
} from "../../actions/product/product.action";

export const getAllProductsEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await GetAllProductsService();

      const { data } = result;

      dispatch(SetProductsSuccess(data));
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

export const createProdutEffect = (productData: ProductType): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await CreateProductService(productData);
      console.log(result);
      const { data } = result;
      console.log(data);

      dispatch(SetProductSuccess(data));
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

export const updateProdutEffect = (productData: ProductType): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await EditProductService(productData);
      const { data } = result;

      dispatch(SetProductSuccess(data));
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

export const SearchProdutEffect = (name: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // You can dispatch actions before making the API call if needed
      const result = await SearchProductsService(name);

      const {
        data: { products },
      } = result;
      console.log(products);

      dispatch(SetProductsSuccess(products));

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};
