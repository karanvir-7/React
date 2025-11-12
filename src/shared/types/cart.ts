import { Product } from "./product";

export interface CartState {
  counter: number;
  cartItems: Product[];
}