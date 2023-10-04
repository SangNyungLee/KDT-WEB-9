import { useContext, useState } from "react";
import { MyCartList } from "./store/cart-context";

export default function ProductList() {
  const {
    PriceList,
    cartItemList,
    setCartItemList,
    totalValue,
    setTotalValue,
  } = useContext(MyCartList);
  const addCart = (item) => {
    console.log("눌림 ㅋㅋ", item);
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
    };
    const price = item.price;
    if (cartItemList == undefined) {
      setCartItemList([newItem]);
      alert("장바구니에 추가되었습니다.");
      setTotalValue(totalValue + price);
      console.log("총가격", totalValue);
    } else {
      const foundProduct = cartItemList.find((val) => val.id === item.id);
      if (foundProduct) {
        alert("이미 장바구니에 담긴 물건입니다.");
      } else {
        alert("장바구니에 추가되었습니다.");
        setCartItemList([...cartItemList, newItem]);
        setTotalValue(totalValue + price);
        console.log("총가격", totalValue);
      }
    }
  };
  return (
    <>
      <h1>상품리스트</h1>
      <table>
        <thead>
          <tr>
            <td>이름</td>
            <td>가격</td>
            <td>장바구니에 추가</td>
          </tr>
          {PriceList.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.name}</td>
                <td>{value.price}원</td>
                <td style={{ textAlign: "center" }}>
                  <button onClick={() => addCart(value)}>+</button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </>
  );
}
