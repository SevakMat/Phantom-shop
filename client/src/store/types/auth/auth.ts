export enum AuthTypes {
  REGISTER_REQUEST_SUCCESS = "REGISTER_REQUEST_SUCCESS",
  LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS",
  LOGOUT_REQUEST_SUCCESS = "LOGOUT_REQUEST_SUCCESS",
  SET_SLIDER_STATE = "SET_SLIDER_STATE",
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface RegisterRequestSuccess {
  type: AuthTypes.REGISTER_REQUEST_SUCCESS;
  user: User;
}

export interface LoginRequestSuccess {
  type: AuthTypes.LOGIN_REQUEST_SUCCESS;
  user: User;
}

export interface LogOutRequestSuccess {
  type: AuthTypes.LOGOUT_REQUEST_SUCCESS;
}

export interface SetSliderState {
  type: AuthTypes.SET_SLIDER_STATE;
}

export type AuthActionTypes =
  | LoginRequestSuccess
  | LogOutRequestSuccess
  | RegisterRequestSuccess
  | SetSliderState;
