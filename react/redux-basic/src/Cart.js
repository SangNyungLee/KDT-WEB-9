import { useSelector, useDispatch } from "react-redux";
import { ADD, DELETE, MINUS } from "./store/cart-store";
export default function Cart() {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch({ type: DELETE, id });
  };
  const addCart = (value) => {
    dispatch({ type: ADD, id: value.id, name: value.name, price: value.price });
  };
  const minusCart = (value) => {
    dispatch({
      type: MINUS,
      id: value.id,
      name: value.name,
      price: value.price,
    });
  };
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <div>
      <h2>장바구니</h2>
      {cart.map((value) => (
        <div key={value.id} id={value.id}>
          <span>
            {value.name} : {value.price}원
          </span>
          <button onClick={() => minusCart(value)}>-</button>
          {value.quantity}
          <button onClick={() => addCart(value)}>+</button>
          <button onClick={() => removeCart(value.id)}>제거</button>
        </div>
      ))}
      총액 : {totalPrice}원
    </div>
  );
}
