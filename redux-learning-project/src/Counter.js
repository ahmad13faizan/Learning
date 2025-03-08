import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset } from "./redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+5</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={()=>{dispatch(reset())}} >Reset</button>
    </div>
  );
};

export default Counter;

