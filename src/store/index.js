import { legacy_createStore } from 'redux';

const initialState = { counter: 0 };
//We always return a new state object in the reducer
//We never mutate the state directly // if mutate we have unpredicable behavior and bugs
//We always return a new state object in the reducer
//It will always override the previous state
//We can use the spread operator to copy the previous state

const counterReducer= (state = initialState,action) => {

    if (action.type === 'increment') {
        return { 
            ...state,
            counter: state.counter + 1
         }; 
    }   

    if (action.type == 'increase') {
        return {
            ...state,
            counter: state.counter + action.amount
        }
    }

    if(action.type === 'decrement') {
        return { 
            ...state,
            counter: state.counter - 1
        };
    }

    return state;
}
const store = legacy_createStore(counterReducer);

export default store;