import React, { useContext, useEffect, useState } from "react";
import { CartContext, getAmountOfItemsInCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserBottons = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  const [amountItems, setAmountItems] = useState(0);

  useEffect(() => {
    setAmountItems(getAmountOfItemsInCart(cartItems));
  }, [cartItems]);

  return (
    <div>
      <button className="cart-icon" onClick={() => setIsCartOpen(true)}>
        <FontAwesomeIcon icon={faCartShopping} />
        {!!amountItems && <div id="cart-amount">{amountItems}</div>}
      </button>
      <Link to="/checkout" className="user-icon">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default UserBottons;
