import {
  AuthTypes,
  LoginRequestSuccess,
  LogOutRequestSuccess,
  RegisterRequestSuccess,
  User,
} from "../../types/auth/auth";

export const loginRequestSuccess = (user: User): LoginRequestSuccess => ({
  type: AuthTypes.LOGIN_REQUEST_SUCCESS,
  user,
});

export const registerRequestSuccess = (user: User): RegisterRequestSuccess => ({
  type: AuthTypes.REGISTER_REQUEST_SUCCESS,
  user,
});

export const logOutRequestSuccess = (): LogOutRequestSuccess => ({
  type: AuthTypes.LOGOUT_REQUEST_SUCCESS,
});
