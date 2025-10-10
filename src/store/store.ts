import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orders/orderSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: { orderSlice, cartSlice },
});

//this line is not necessary but can be used to export actions if needed
export default store;
