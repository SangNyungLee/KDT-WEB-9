import { useContext, useEffect } from "react";
import { MyCartList } from "./store/cart-context";

export default function CartItem() {
  const { cartItemList, setCartItemList, totalValue, setTotalValue } =
    useContext(MyCartList);
  useEffect(() => {}, [cartItemList, totalValue]);

  const removeCart = (item) => {
    const price = item.price;
    console.log("삭제함", item);
    setTotalValue(totalValue - price);
    const updatedItemList = cartItemList.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItemList(updatedItemList);
    alert("장바구니에서 삭제되었습니다.");
  };

  return (
    <>
      <h1>카트</h1>
      {cartItemList ? (
        cartItemList.map((value) => (
          <tr key={value.id}>
            <td>{value.name}</td>
            <td>{value.price}원</td>
            <td style={{ textAlign: "center" }}>
              <button onClick={() => removeCart(value)}>삭제</button>
            </td>
          </tr>
        ))
      ) : (
        <p>카트가 비어 있습니다.</p>
      )}
      <span>총 가격 : {totalValue}</span>
    </>
  );
}
