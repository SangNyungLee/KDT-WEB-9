import { useReducer } from "react";

//초기값
const initialState = { count: 0 };

//reducer 함수(상채, 액션)을 받아 새로운 상태를 반환하는 함수
//reducer(state, action), 액션에는 type이 존재한다.
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("error");
  }
}

export default function UseReducer() {
  //reducer : state를 업데이트 하는 함수
  //state : 현재 상태
  //dispatch : 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
