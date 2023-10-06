import { createStore } from "redux"; // Redux의 createStore 사용
import { useReducer } from "react";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [newTodo, ...state];
    case DELETE_TODO:
      const remove = state.filter((el) => el.id !== action.id); // filter 반환값 수정
      return remove;
    default:
      return state; // 기본값은 현재 상태를 반환해야 합니다.
  }
};

// Redux store를 생성
const store = createStore(reducer);
export default store;
