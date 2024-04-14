import { AppDispatch } from "../..";
import {
  CreateProductService,
  EditProductService,
  GetAllProductsService,
  SearchProductsService,
} from "../../../services/product.service";
import { ProductType } from "../../types/product/product";
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
    }
  };
};

export const SearchProdutEffect = (name: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await SearchProductsService(name);

      const {
        data: { products },
      } = result;

      dispatch(SetProductsSuccess(products));
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};
