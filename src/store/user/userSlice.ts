import { createSlice } from '@reduxjs/toolkit';
import User from '../../pages/User/User';

const userSlice = createSlice({
    name: 'user',
    initialState: { user : User } ,
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload;
        },
    }
});


export default userSlice.reducer;
export const userActions = userSlice.actions;