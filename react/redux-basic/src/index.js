import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
//redux를 이용한 숫자 증/감 코드
import { createStore } from "redux";

// const todoInput = document.querySelector("#todoInput");
// const addBtn = document.querySelector("#addBtn");
// const todoul = document.querySelector("#todoul");

// const todoList = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       const li = document.createElement("li");
//       const button = document.createElement("button");
//       let todoText = todoInput.value;
//       button.setAttribute("id", todoText);
//       button.addEventListener("click", (event) => {
//         const newText = event.target.id;
//         Store.dispatch({ type: "DELETE_TODO", id: newText });
//         li.remove();
//       });
//       button.textContent = "Del";
//       state.push(todoText);
//       li.textContent = todoText;
//       li.appendChild(button);
//       todoul.appendChild(li);
//       todoInput.value = "";

//       return state;
//     case "DELETE_TODO":
//       // const newState = state.filter((res) => res.value !== this.id);
//       // console.log(newState);
//       const idDelete = action.id;
//       const newState = state.filter((todo) => todo !== idDelete);
//       return newState;
//   }
// };
// const Store = createStore(todoList);
// addBtn.addEventListener("click", () => {
//   Store.dispatch({ type: "ADD_TODO" });
// });

// Store.subscribe(() => {
//   console.log(Store.getState());
// });
/////////////////////////////////////////

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

const ADD = "ADD";
const MINUS = "MINUS";

//리듀서
const countReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

//store는 데이터를 저장하는 곳
//createStore : store를 생성, 리듀서 함수가 필수
const countStore = createStore(countReducer);

//subscribe()는 데이터와 저장소가 변경될때마다 콜백함수를 실행한다.
countStore.subscribe(() => {
  //getState()는 저장소에서 최신상태의 값을 반환할 때 쓰는 메소드
  num.textContent = countStore.getState();
});
add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

////////////////////////////////////////

//자바스크립트를 이용한 숫자 증/감 코드

/*
let count = 0;

add.addEventListener("click", () => {
  count += 1;
  num.textContent = count;
});

minus.addEventListener("click", () => {
  count -= 1;
  num.textContent = count;
});
*/
