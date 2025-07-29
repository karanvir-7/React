
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'; // Importing the counter slice
import authReducer from './auth'; // Importing the auth slice

const store = configureStore({
    reducer:  { 
        counter: counterReducer, 
        auth: authReducer
    } 
});


export default store;