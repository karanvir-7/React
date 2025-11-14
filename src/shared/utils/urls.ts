import { endpoints } from "./endpoints";

export const url = {
  getProducts: (limit: number, index: number) =>
    endpoints.getProducts(limit, index),
};
