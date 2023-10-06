import { createSlice, configureStore } from "@reduxjs/toolkit";

const initCounter = {
  counter: 10,
};

//createSlice() : 리듀서와 액션을 함께 생성하는 함수
const myCounterSlice = createSlice({
  name: "counter",
  initialState: initCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },

    calc(state, action) {
      console.log(action.payload);
      const { a, b } = action.payload;
      state.counter += b;
    },
  },
});

const initLogin = {
  isLogin: false,
};

const loginSLice = createSlice({
  name: "login",
  initialState: initLogin,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

const store = configureStore({
  reducer: { count: myCounterSlice.reducer, login: loginSLice.reducer },
});

export const counterAction = myCounterSlice.actions;
export const loginAction = loginSLice.actions;

export default store;
