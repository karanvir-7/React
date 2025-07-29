import classes from './Counter.module.css';
import React, { useState } from 'react';
import { useSelector, connect, useDispatch} from 'react-redux';
import { counterActions } from '../store/counter'; // Importing the counter actions

const Counter = () => {
  const dispatch = useDispatch(); 
  const [isCounterVisible, setCounterVisible] = useState(true);
  const counter = useSelector((state) => state.counter.counter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler= () =>{
    dispatch(counterActions.increase(5)); //action payload here is amount
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    setCounterVisible((prevState) => !prevState);
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by Value</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
