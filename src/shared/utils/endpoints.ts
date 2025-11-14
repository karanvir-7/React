export const endpoints = {
  getProducts: (limit: number, numnber: number) => `https://dummyjson.com/products?limit=${limit}&skip=${numnber}`,
};
