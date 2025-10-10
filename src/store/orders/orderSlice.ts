import { createSlice } from '@reduxjs/toolkit';
import initialState from '../state';

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.counter++; //we can mutate the state directly here because Redux Toolkit uses Immer under the hood
        },
        increase(state, action) {
            state.counter += action.payload; //action.payload contains the amount to increase
        },
        decrement(state) {
            state.counter--;
        }
    }
});


export default orderSlice.reducer;
export const orderActions = orderSlice.actions;