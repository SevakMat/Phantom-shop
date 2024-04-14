import axios from "axios";
import { apiBaseUrl } from ".//index";

const instance = axios.create({
  baseURL: apiBaseUrl,
});

instance.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
