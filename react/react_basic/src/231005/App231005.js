import Cart from "./Cart";
import ProductList from "./ProductList";
import { CartProvider } from "./store/cart-context";

function App231005() {
  return (
    <>
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </>
  );
}
export default App231005;
