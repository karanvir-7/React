import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './reducers/order';
const store = configureStore({
    reducer:  orderSlice
});

 //this line is not necessary but can be used to export actions if needed
export default store;