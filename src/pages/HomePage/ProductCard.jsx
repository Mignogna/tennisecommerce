import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import formatCurrency from "../../assets/utils/formatCurrency";

const ProductCard = ({ id, image, name, price }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <article>
      <img src={image} alt={`Imagem do produto ${id}`} />
      <p>{name}</p>
      <p>{formatCurrency(price, "BRL")}</p>
      <button onClick={() => addToCart(id)}>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </article>
  );
};

export default ProductCard;
