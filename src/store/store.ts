import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: { userSlice, cartSlice },
});

//this line is not necessary but can be used to export actions if needed
export default store;
