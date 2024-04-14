import axios from "axios";
// import { SignInByRefreshTocenRequest } from "../services/auth.service";
import { apiBaseUrl } from ".//index";
// import {store} from "../store"

const instance = axios.create({
  baseURL: apiBaseUrl,
});

instance.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Also add/ configure interceptors && all the other cool stuff
// instance.interceptors.response.use(
//     response => response,
//     async err => {
//         if (err.response?.status === 401 && !err.config.alreadyRetried && err.config.url !== 'api/v1/auth/login') {
//             try {
//                 const userRefreshToken = localStorage.getItem("refreshToken")
//                 const res = await SignInByRefreshTocenRequest({ refreshToken: userRefreshToken })
//                 const { accessToken, refreshToken } = res.data
//                 if (refreshToken) {
//                     await localStorage.setItem("accessToken", accessToken)
//                     await localStorage.setItem("refreshToken", refreshToken)
//                     err.config.alreadyRetried = true
//                     err.config.headers.Authorization = `Bearer ${accessToken}`
//                     return await instance.request(err.config)
//                 }

//             } catch (err: any) {
//                 console.log(err);

//                 // store.dispatch(logoutWithAxiosInterceptorEffect() as any)
//             }
//         }
//         return Promise.reject(err);
//     }
// )

export default instance;
