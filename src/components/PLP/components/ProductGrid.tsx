import { ProductCard } from "./ProductCard";
import { products } from "../../../data/products";

export function ProductGrid() {
  return (
    <section
      className="
        grid grid-cols-2 gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
