import { serverUrl } from "./constant";

export const endpoints = {
  getProducts: (limit: number, numnber: number) => `${serverUrl}/products?limit=${limit}&skip=${numnber}`,
  getProductDetails: (id: string) => `${serverUrl}/products/${id}`,
};
