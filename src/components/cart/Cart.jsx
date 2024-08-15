import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import formatCurrency from "../../assets/utils/formatCurrency";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartInfo = useContext(CartContext);
  const { cartItems, totalPrice } = useContext(CartContext);

  const cartItemsArray = [];
  for (const itemId in cartItems) {
    cartItemsArray.push({
      id: Number(itemId),
      amount: cartItems[itemId],
    });
  }

  return (
    <section id="cart">
      <div className="cart-title">
        Produtos no Carrinho
        <button
          className="close-cart"
          onClick={() => cartInfo.setIsCartOpen(false)}
        >
          <FontAwesomeIcon icon={faRectangleXmark} />
        </button>
      </div>
      <div className="cart-items-container">
        {cartItemsArray.length === 0 ? (
          <p>Sem produtos adicionados ao carrinho</p>
        ) : (
          cartItemsArray.map((product) => (
            <CartItem {...product} key={product.id} />
          ))
        )}
      </div>
      <div className="total-purchase">
        <div className="total-price">
          Preço Total: {formatCurrency(totalPrice, "BRL")}
        </div>
        <Link to="./checkout">
          <button id="btn-buy">Comprar</button>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
