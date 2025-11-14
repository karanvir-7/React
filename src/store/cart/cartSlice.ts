import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "../state";
import { Product } from "../../shared/interface/product";
import { CartState } from "../../shared/interface/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState as CartState,
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<Product>) => {
      state.cartItems.push(action.payload as any); //action.payload contains the product to add
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item?.id !== +action.payload
      ); //action.payload contains the id of the product to remove
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
