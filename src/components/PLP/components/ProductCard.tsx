import type { Product } from "../../../data/products";
import { QuickBuyOverlay } from "./QuickBuyOverlay";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  function handleAddToBag(payload: {
    productId: number;
    size: string;
    quantity: number;
  }) {
    console.log("ADD TO BAG", payload);
  }

  return (
    <div className="relative">
      <h3>{product.name}</h3>
      <p>£{product.price}</p>
      <img src={product.image} alt={product.name} />
      <QuickBuyOverlay product={product} onAddToBag={handleAddToBag} />
    </div>
  );
}
