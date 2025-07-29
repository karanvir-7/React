import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, isAuthenticated: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
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
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;