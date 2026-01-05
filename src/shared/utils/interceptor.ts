import axios, { InternalAxiosRequestConfig } from "axios";


const api = axios.create({
  baseURL: "https://dummyjson.com",
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
