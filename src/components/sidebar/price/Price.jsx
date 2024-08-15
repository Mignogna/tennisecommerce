import React from "react";

const Price = ({ priceFilter, handlePriceFilterChange }) => {
  return (
    <>
      <div className="price-title">Preço</div>
      <div>
        <div>
          <label className="sidebar-label-container">
            <input
              onChange={handlePriceFilterChange}
              type="radio"
              value="todos"
              checked={priceFilter === "todos"}
            />
            <span className="checkmark"></span>Todos
          </label>
        </div>
        <div>
          <label className="sidebar-label-container">
            <input
              onChange={handlePriceFilterChange}
              type="radio"
              value="under-300"
              checked={priceFilter === "under-300"}
            />
            <span className="checkmark"></span>Até R$ 300,00
          </label>
        </div>
        <div>
          <label className="sidebar-label-container">
            <input
              onChange={handlePriceFilterChange}
              type="radio"
              value="300-500"
              checked={priceFilter === "300-500"}
            />
            <span className="checkmark"></span>De R$300,00 a R$500,00
          </label>
        </div>
        <div>
          <label className="sidebar-label-container">
            <input
              onChange={handlePriceFilterChange}
              type="radio"
              value="above-500"
              checked={priceFilter === "above-500"}
            />
            <span className="checkmark"></span>Acima de R$ 500,00
          </label>
        </div>
      </div>
    </>
  );
};

export default Price;
