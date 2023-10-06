import { createStore } from "redux";

export const ADD = "ADD";
export const DELETE = "DELETE";
export const MINUS = "MINUS";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newCart = {
        id: action.id,
        name: action.name,
        price: action.price,
        quantity: 1,
      };
      const result = state.some((x) => x.id == action.id);
      if (result) {
        const target = state.find((item) => item.id == action.id);
        console.log("타겟", target);
        target.quantity += 1;
        return [...state];
      } else {
        return [...state, newCart];
      }

    case DELETE:
      const remove = state.filter((el) => el.id !== action.id);
      return remove;
    case MINUS:
      const target = state.find((item) => item.id == action.id);
      if (target.quantity <= 1) {
        const remove = state.filter((el) => el.id !== action.id);
        return remove;
      } else {
        target.quantity -= 1;
        return [...state];
      }

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
