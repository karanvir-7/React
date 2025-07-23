const redux = require('redux');

const counterReducer = (state = { counter : 0} ,action) => {
    if(action.type == 'increment') {
        return {
            counter: state.counter + 1,
        };
    }

    if(action.type == 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
};
const store = redux.createStore(counterReducer); 
//createStore method is exposed to create a store in redux
//(counterReducer)reducer is a function that takes the current state and an action, and returns a new state. it is a pure function


console.log(store.getState(),123);

const counterSubscriber = () => {
    const latestState = store.getState();
    //getState method is used to get the current state of the store
    console.log(latestState);
}

store.subscribe(counterSubscriber);
//subscribe method is used to listen for state changes in the store


store.dispatch({ type: 'increment' });
//dispatch method is used to send an action to the store, which will trigger the reducer and update the state
//the action is an object that contains a type property, which is used to identify the action

store.dispatch({ type: 'decrement' });
