import type { Product } from "../../../data/products";
import { QuickBuyOverlay } from "./QuickBuyOverlay";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>£{product.price}</p>
      <img src={product.image} alt={product.name} />
      <QuickBuyOverlay product={product} />
    </div>
  );
}
