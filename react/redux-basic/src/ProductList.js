import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, DELETE } from "./store/cart-store";
export default function ProductList() {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: "A상품",
      price: 1000,
    },
    {
      id: 2,
      name: "B상품",
      price: 2000,
    },
    {
      id: 3,
      name: "C상품",
      price: 3000,
    },
  ];
  const addProduct = (value) => {
    dispatch({ type: ADD, id: value.id, name: value.name, price: value.price });
  };
  return (
    <div>
      <h2>상품리스트</h2>
      {products.map((value) => {
        return (
          <div key={value.id}>
            <span>
              {" "}
              {value.name} : {value.price} 원
            </span>
            <button onClick={() => addProduct(value)}>장바구니에 추가</button>
          </div>
        );
      })}
    </div>
  );
}