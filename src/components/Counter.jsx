import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
import {useSelector,useDispatch} from "react-redux";
const Counter = () => {
  const counter=useSelector(state=>state.counter.counter);
  const showCounter=useSelector(state=>state.counter.showCounter);
  const dispatch=useDispatch();
  function increment(){
    dispatch(counterActions.increment());
  }
  function decrement(){
    dispatch(counterActions.decrement());
  }
  function showHanlder(){
    dispatch(counterActions.toggle());
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>increment()}>increment</button>
        <button onClick={()=>decrement()}>decrement</button>
      </div>
      <button onClick={()=>showHanlder()}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
