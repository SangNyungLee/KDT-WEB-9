import { useState } from "react";
import Form from "./Form";
import Practice1 from "./Practice1";
import MyContext, { LanguageProvider } from "./store/lang-context";
import LangSelector from "./LangSelector";
import Practice2 from "./Practice2";
import Practice2_1 from "./Practice2_1";
import { CartProvider } from "./store/cart-context";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CartItem from "./CartItem";

function App231004() {
  //   const [language, setLanguage] = useState("ko");
  return (
    <>
      {/* <LanguageProvider>
        <Practice2 />
        <Practice2_1 />
      </LanguageProvider> */}
      <CartProvider>
        <ProductList />
        <Cart />
        <CartItem />
      </CartProvider>
      {/* <LangSelector /> */}
      {/* <MyContext.Provider value={{ language, setLanguage }}> */}
      {/* <Form /> */}
      {/* </MyContext.Provider> */}
      {/* <Practice1 /> */}
    </>
  );
}
export default App231004;
