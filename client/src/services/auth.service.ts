import axios from "../config/axios";

import { LoginDataType, SignUpDataType } from "./types";

export const loginRequest = async (loginData: LoginDataType): Promise<any> => {
  return axios.post("api/login", { ...loginData });
};

export const SignUpRequest = async (
  signUpData: SignUpDataType
): Promise<any> => {
  return axios.post("api/register", { ...signUpData });
};

export const logOutRequest = async (): Promise<any> => {
  return axios.post("api/logout", {});
};
