import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "../../assets/utils/formatCurrency";
import { productsIndexedById } from "../../assets/utils/products";

const CartItem = ({ id, amount }) => {
  const { addToCart, decreaseUnit, removeFromCart } = useContext(CartContext);
  const { image, name, price } = productsIndexedById[id];

  return (
    <div className="cart-items">
      <button className="cart-item-remove" onClick={() => removeFromCart(id)}>
        <FontAwesomeIcon icon={faCartShopping} />
        <div className="cart-remove">-</div>
      </button>
      <img
        src={image}
        alt={`Imagem do produto ${id}, ${name}`}
        className="cart-item-img"
      />
      <div className="cart-item-content">
        <div className="cart-item-title">{name}</div>
        <div className="cart-item-price">
          {formatCurrency(price * amount, "BRL")}
        </div>
        <div className="quantity">
          <button onClick={() => decreaseUnit(id)}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          {amount}
          <button onClick={() => addToCart(id)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
