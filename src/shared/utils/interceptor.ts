import axios, { InternalAxiosRequestConfig } from "axios";
import { serverUrl } from "./constant";


const api = axios.create({
  baseURL: serverUrl,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
