import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "../..";
import { loginRequest, SignUpRequest } from "../../../services/auth.service";
import { LoginDataType, SignUpDataType } from "../../../services/types";
import {
  loginRequestSuccess,
  logOutRequestSuccess,
} from "../../actions/auth/auth.actions";

export const loginEffect = (
  loginData: LoginDataType,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await loginRequest(loginData);

      const {
        data: { token, user },
      } = result;

      await localStorage.setItem("accessToken", token);

      dispatch(loginRequestSuccess(user));
      if (user.role === "USER") {
        navigate("");
        return;
      }

      navigate("/admin/products");
    } catch (error: any) {
    } finally {
    }
  };
};

export const logOutEffect = (): any => {
  return async (dispatch: AppDispatch, navigate: NavigateFunction) => {
    try {
      await localStorage.clear();

      dispatch(logOutRequestSuccess());
    } catch (error: any) {
    } finally {
    }
  };
};
export const signUpEffect = (
  signUpData: SignUpDataType,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      await SignUpRequest(signUpData);

      navigate("/login");
    } catch (error: any) {
    } finally {
    }
  };
};
