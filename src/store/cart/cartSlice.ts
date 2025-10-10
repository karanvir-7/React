import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from '../state';
import { CartItem, CartState } from '../../shared/types/cart';

// Cast initialState to CartState if needed
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState as CartState,
    reducers: {
        ADD_TO_CART: (state, action: PayloadAction<CartItem>) => {
            state.cartItems.push(action.payload); //action.payload contains the product to add
        },
        REMOVE_FROM_CART: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload); //action.payload contains the id of the product to remove
        }
    }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;