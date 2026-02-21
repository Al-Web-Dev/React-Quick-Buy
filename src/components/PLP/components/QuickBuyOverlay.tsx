import type { Product } from "../../../data/products";

type QuickBuyOverlayProps = {
  product: Product;
};

export function QuickBuyOverlay({ product }: QuickBuyOverlayProps) {
  return (
    <div
      className="
     relative
        bg-white/95
        flex flex-col justify-end
        p-3
      ">
      <ul className="flex gap-2 mb-3">
        {product.sizes.map(({ size, inStock }) => (
          <li
            key={size}
            className={`
              text-xs px-2 py-1 border
              ${inStock ? "" : "opacity-30"}
            `}>
            {size}
          </li>
        ))}
      </ul>

      <button
        className="
          bg-black text-white
          py-2 text-sm
        ">
        Add to basket
      </button>
    </div>
  );
}
