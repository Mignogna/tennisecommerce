import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import "./App.css";
import { products } from "./assets/utils/products";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productId];
    setCartItems(cartItemsCopy);
  };

  const addToCart = (productId) => {
    setCartItems({
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    });
  };

  const decreaseUnit = (productId) => {
    if (cartItems[productId] > 1) {
      setCartItems({
        ...cartItems,
        [productId]: cartItems[productId] - 1,
      });
    } else {
      removeFromCart(productId);
    }
  };

  const totalPrice = Object.entries(cartItems).reduce(
    (total, [productId, quantity]) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        return total + product.price * quantity;
      }
      return total;
    },
    0
  );

  useEffect(() => {
    totalPrice;
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addToCart,
        decreaseUnit,
        removeFromCart,
        totalPrice,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
