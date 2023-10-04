import { React, createContext, useState } from "react";

export const MyCartList = createContext({
  cartItemList: [],
  setCartItemList: () => {},
  PriceList: [],
  totalValue: 0,
  setTotalValue: () => {},
});

export function CartProvider({ children }) {
  const [cartItemList, setCartItemList] = useState();
  const [totalValue, setTotalValue] = useState(0);
  const PriceList = [
    { id: 1, name: "사과", price: 3000 },
    { id: 2, name: "포도", price: 6000 },
    { id: 3, name: "바나나", price: 7000 },
  ];
  return (
    <>
      <MyCartList.Provider
        value={{
          cartItemList,
          setCartItemList,
          PriceList,
          totalValue,
          setTotalValue,
        }}
      >
        {children}
      </MyCartList.Provider>
    </>
  );
}
