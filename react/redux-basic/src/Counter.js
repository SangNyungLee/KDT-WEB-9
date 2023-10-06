import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store";
var interval;
export default function Counter() {
  const counter = useSelector((state) => state.count.counter);
  console.log(counter);
  const dispatch = useDispatch();
  const ADD = () => {
    dispatch(counterAction.increment());
  };
  const MINUS = () => {
    dispatch(counterAction.decrement());
  };
  const calc = () => {
    dispatch(counterAction.calc({ a: 5, b: 2 }));
  };
  const down = () => {
    interval = setInterval(function () {
      dispatch(counterAction.decrement());
    }, 10);
  };
  const up = () => {
    clearInterval(interval);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={ADD}>PLUS</button>
      {/* <button onClick={MINUS}>MINUS</button> */}
      <button onMouseDown={down} onMouseUp={up}>
        MINUS
      </button>
      <button onClick={calc}>칼씨</button>
    </div>
  );
}
