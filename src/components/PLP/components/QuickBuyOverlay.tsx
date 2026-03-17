import { useState } from "react";
import type { Product } from "../../../data/products";
import { addToBasket } from "../../../utils/basket";

type QuickBuyOverlayProps = {
  product: Product;
  onAddToBag: (payload: {
    productId: number;
    size: string;
    quantity: number;
  }) => void;
};

export function QuickBuyOverlay({ product, onAddToBag }: QuickBuyOverlayProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="relative inset-0 pt-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {product.sizes.map((s) => (
          <button
            key={s.size}
            disabled={!s.inStock}
            onClick={() => setSelectedSize(s.size)}
            className={`
              px-3 py-1 border text-sm
              ${!s.inStock ? "opacity-40 cursor-not-allowed" : "hover:border-black"}
              ${selectedSize === s.size ? "border-black" : "border-gray-300"}
            `}>
            {s.size}
          </button>
        ))}
      </div>

      <button
        disabled={!selectedSize}
        onClick={() => {
          if (!selectedSize) return;

          addToBasket({
            productId: product.id,
            size: selectedSize,
            price: product.price,
          });

          onAddToBag({
            productId: product.id,
            size: selectedSize,
            quantity: 1,
          });
        }}
        className={`
          w-full py-2 text-sm font-semibold transition
          ${
            selectedSize
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }
        `}>
        Add to basket
      </button>
    </div>
  );
}
