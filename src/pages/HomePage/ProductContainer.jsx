import ProductCard from "./ProductCard";

const ProductContainer = ({ products }) => {
  return (
    <section className="container-card">
      {products.map((product) => (
        <ProductCard key={`product_${product.id}_key`} {...product} />
      ))}
    </section>
  );
};

export default ProductContainer;
