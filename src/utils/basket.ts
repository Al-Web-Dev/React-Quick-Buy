// src/utils/basket.ts

export type BasketItem = {
  productId: number | string;
  size: string;
  price: number;
  qty: number;
};

const KEY = "basket";

// ✅ addToBasket now uses BasketItem instead of any
export function addToBasket(item: BasketItem) {
  const existing = localStorage.getItem(KEY);

  const basket: BasketItem[] = existing ? JSON.parse(existing) : [];

  const existingItem = basket.find(
    (i) => i.productId === item.productId && i.size === item.size,
  );

  if (existingItem) {
    existingItem.qty += item.qty;
  } else {
    basket.push(item);
  }

  localStorage.setItem(KEY, JSON.stringify(basket));
}

// ✅ getBasketCount now typed
export function getBasketCount(): number {
  const existing = localStorage.getItem(KEY);

  if (!existing) return 0;

  const basket: BasketItem[] = JSON.parse(existing);

  return basket.reduce((total, item) => total + item.qty, 0);
}
