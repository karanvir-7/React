import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../shared/interface/user';
import { getInitialUser } from './initialUser';
const userSlice = createSlice({
    name: 'user',
    initialState: { user: getInitialUser() },
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload as User;
        },
    },
});


export default userSlice.reducer;
export const userActions = userSlice.actions;