import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { products } from "../../assets/utils/products";
import ProductContainer from "./ProductContainer";
const ProductFilter = () => {
  const [filterCategory, setFilterCategory] = useState("todos");
  const [priceFilter, setPriceFilter] = useState("todos");

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };
  const filteredProducts = products.filter((product) => {
    let matchesCategory =
      filterCategory === "todos" || product.category === filterCategory;
    let matchesPrice = false;

    if (priceFilter === "todos") {
      matchesPrice = true;
    } else if (priceFilter === "under-300") {
      matchesPrice = product.price <= 300;
    } else if (priceFilter === "300-500") {
      matchesPrice = product.price > 300 && product.price <= 500;
    } else if (priceFilter === "above-500") {
      matchesPrice = product.price > 500;
    }

    return matchesCategory && matchesPrice;
  });
  return (
    <div>
      <Sidebar
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        priceFilter={priceFilter}
        handlePriceFilterChange={handlePriceFilterChange}
      />
      {filteredProducts.length === 0 ? (
        <p className="filter-msg">
          Não existem produtos correspondentes aos critérios da sua filtragem.
        </p>
      ) : (
        <ProductContainer products={filteredProducts} />
      )}
    </div>
  );
};

export default ProductFilter;
