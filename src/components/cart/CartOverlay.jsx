import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";

const CartOverlay = () => {
  const cartInfo = useContext(CartContext);
  return (
    <>
      <div
        className={`cart-overlay ${
          cartInfo.isCartOpen ? "cart-open" : "cart-closed"
        }`}
      >
        <section
          id="outside-cart"
          onClick={() => cartInfo.setIsCartOpen(false)}
        ></section>
        <Cart />
      </div>
    </>
  );
};

export default CartOverlay;
