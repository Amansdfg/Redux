import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux";
const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter=useSelector(state=>state.counter);
  const dispatch=useDispatch();
  function increment(){
    dispatch({type:"increment"});
  }
  function decrement(){
    dispatch({type:"decrement"});
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={()=>increment()}>increment</button>
        <button onClick={()=>decrement()}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
