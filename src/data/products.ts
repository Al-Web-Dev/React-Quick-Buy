export type Size = "XS" | "S" | "M" | "L" | "XL";

export type ProductSize = {
  size: Size;
  inStock: boolean;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: ProductSize[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Relaxed Cotton Tee",
    price: 18,
    image: "/images/tee.jpg",
    sizes: [
      { size: "S", inStock: true },
      { size: "M", inStock: true },
      { size: "L", inStock: false },
      { size: "XL", inStock: true },
    ],
  },
  {
    id: 2,
    name: "Utility Overshirt",
    price: 65,
    image: "/images/overshirt.jpg",
    sizes: [
      { size: "M", inStock: false },
      { size: "L", inStock: false },
    ],
  },
  {
    id: 3,
    name: "Lightweight Hoodie",
    price: 42,
    image: "/images/hoodie.jpg",
    sizes: [
      { size: "XS", inStock: true },
      { size: "S", inStock: true },
      { size: "M", inStock: true },
      { size: "L", inStock: true },
    ],
  },
  {
    id: 4,
    name: "Waffle Long Sleeve",
    price: 32,
    image: "/images/waffle.jpg",
    sizes: [
      { size: "S", inStock: false },
      { size: "M", inStock: true },
      { size: "L", inStock: true },
    ],
  },
  {
    id: 5,
    name: "Everyday Crew",
    price: 55,
    image: "/images/crew.jpg",
    sizes: [
      { size: "M", inStock: true },
      { size: "L", inStock: true },
      { size: "XL", inStock: false },
    ],
  },
  {
    id: 6,
    name: "Zip Through Hoodie",
    price: 70,
    image: "/images/zip-hoodie.jpg",
    sizes: [
      { size: "S", inStock: true },
      { size: "M", inStock: false },
      { size: "L", inStock: false },
    ],
  },
  {
    id: 7,
    name: "Relaxed Jogger",
    price: 48,
    image: "/images/jogger.jpg",
    sizes: [
      { size: "XS", inStock: true },
      { size: "S", inStock: true },
      { size: "M", inStock: false },
      { size: "L", inStock: true },
    ],
  },
  {
    id: 8,
    name: "Heavyweight Tee",
    price: 22,
    image: "/images/heavy-tee.jpg",
    sizes: [
      { size: "S", inStock: false },
      { size: "M", inStock: false },
      { size: "L", inStock: true },
      { size: "XL", inStock: true },
    ],
  },
];
