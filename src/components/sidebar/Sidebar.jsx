import Category from "./category/Category";
import Price from "./price/Price";
import React from "react";

const Sidebar = ({
  filterCategory,
  setFilterCategory,
  priceFilter,
  handlePriceFilterChange,
}) => {
  return (
    <>
      <section className="side">
        <div className="side-title">Filtrar</div>
        <Category
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
        <Price
          priceFilter={priceFilter}
          handlePriceFilterChange={handlePriceFilterChange}
        />
      </section>
    </>
  );
};

export default Sidebar;
