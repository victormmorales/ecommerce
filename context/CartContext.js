import { createContext } from "react";

const CartContext = createContext({
  productsCart: 0,
  addProductCart: () => null,
  getProductCart: () => null,
  removeProductCart: () => null,
  remoceAllProductCart: () => null,
});

export default CartContext;
