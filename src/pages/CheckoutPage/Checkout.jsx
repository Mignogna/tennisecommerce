import { CartContext } from "../../context/CartContext";
import React, { useContext, useState } from "react";
import formatCurrency from "../../assets/utils/formatCurrency";
import CartItem from "../../components/cart/CartItem";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  const cartItemsArray = [];

  for (const itemId in cartItems) {
    cartItemsArray.push({
      id: Number(itemId),
      amount: cartItems[itemId],
    });
  }
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    street: "",
    district: "",
    city: "",
    state: "",
  });

  const handleCepChange = async (e) => {
    const newCep = e.target.value;
    setCep(newCep);

    if (newCep.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${newCep}/json/`
        );
        const data = await response.json();

        if (!data.erro) {
          setAddress({
            street: data.logradouro,
            district: data.bairro,
            city: data.localidade,
            state: data.uf,
          });
        } else {
          alert("CEP não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    }
  };

  return (
    <>
      <form className="checkout">
        <section className="part-one">
          <div className="title">Dados do Cliente</div>
          <div className="data-container split">
            <label htmlFor="name">
              Nome:
              <input type="text" id="name" />
            </label>
            <label htmlFor="email">
              Email:
              <input type="text" id="email" />
            </label>
            <label htmlFor="whatsApp">
              WhatsApp:
              <input
                type="text"
                id="whatsApp"
                placeholder="Ex: (xx) xxxx-xxxx"
              />
            </label>
            <div className="payment">Forma de Pagamento</div>
            <label htmlFor="name-card">
              Titular do cartão:
              <input type="text" id="name-card" />
            </label>
            <label htmlFor="number-card">
              Número do cartão:
              <input type="text" id="number-card" />
            </label>
            <div className="card-data">
              <label htmlFor="cvv">
                CVV:
                <input
                  type="text"
                  id="cvv"
                  placeholder="3 núm. atrás do cartão"
                />
              </label>
              <label htmlFor="expire-date">
                Válido até:
                <input type="text" id="expire-date" placeholder="_ _/_ _" />
              </label>
            </div>
          </div>
        </section>
        <section className="part-two">
          <div className="title">Dados da entrega:</div>
          <div className="data-container split">
            <label htmlFor="name-delivery">
              Nome do destinatário:
              <input type="text" id="name-delivery" />
            </label>
            <label htmlFor="cep">
              CEP:
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={handleCepChange}
                maxLength="8"
              />
            </label>
            <label htmlFor="street">
              Endereço:
              <input type="text" id="street" value={address.street} readOnly />
            </label>
            <div className="delivery-data">
              <label htmlFor="number">
                Número:
                <input type="text" id="number" />
              </label>
              <label htmlFor="district">
                Bairro:
                <input
                  type="text"
                  id="district"
                  value={address.district}
                  readOnly
                />
              </label>
            </div>
            <label htmlFor="complement">
              Complemento:
              <input type="text" id="complement" />
            </label>
            <div className="city-data">
              <label htmlFor="city">
                Cidade:
                <input type="text" id="city" value={address.city} readOnly />
              </label>
              <label htmlFor="state">
                Estado:
                <input type="text" id="state" value={address.state} readOnly />
              </label>
            </div>
          </div>
        </section>
        <section className="part-three">
          <div className="title">Resumo da Compra:</div>
          <div className="purchase-summary">
            <p>Produtos:</p>

            {cartItemsArray.length === 0 ? (
              <span>Sem produtos adicionados ao carrinho</span>
            ) : (
              cartItemsArray.map((product) => (
                <CartItem {...product} key={product.id} />
              ))
            )}
            <div className="payment-description">
              <p>Pagamento:</p>
              <div className="price-payment">
                <div> Preço a pagar:</div>
                <div>{formatCurrency(totalPrice, "BRL")}</div>
              </div>

              <div className="delivery-fee">
                <div>Valor do frete (7%):</div>
                <div>{formatCurrency((totalPrice / 100) * 7, "BRL")}</div>
              </div>
              <div className="total-payment">
                <div> Total do pagamento:</div>
                <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                  {formatCurrency(totalPrice + (totalPrice / 100) * 7, "BRL")}
                </div>
              </div>
            </div>
          </div>
          <button type="submit" id="btn-finish">
            Finalizar
          </button>
        </section>
      </form>
    </>
  );
};
export default Checkout;
