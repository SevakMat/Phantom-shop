import axios from "../config/axios";

import { LoginDataType, SignUpDataType } from "./types";

export const loginRequest = async (loginData: LoginDataType): Promise<any> => {
  return axios.post("task/login", { ...loginData });
};

export const SignUpRequest = async (
  signUpData: SignUpDataType
): Promise<any> => {
  return axios.post("task/register", { ...signUpData });
};
