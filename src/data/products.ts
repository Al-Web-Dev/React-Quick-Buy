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
    image:
      "https://img.weirdfish.co.uk/cdn-cgi/image/w=700,q=80,f=auto/original/117430.jpg",
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
    image:
      "https://img.weirdfish.co.uk/cdn-cgi/image/w=700,q=80,f=auto/original/136785.jpg",
    sizes: [
      { size: "M", inStock: false },
      { size: "L", inStock: false },
    ],
  },
  {
    id: 3,
    name: "Lightweight Hoodie",
    price: 42,
    image:
      "https://img.weirdfish.co.uk/cdn-cgi/image/w=700,q=80,f=auto/original/136032.jpg",
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
    image:
      "https://img.weirdfish.co.uk/cdn-cgi/image/w=700,q=80,f=auto/original/135291.jpg",
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
    image:
      "https://img.weirdfish.co.uk/cdn-cgi/image/w=700,q=80,f=auto/original/135291.jpg",
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
    image:
      "https://img.weirdfish.co.uk/cdn-cgi/image/w=700,q=80,f=auto/original/135291.jpg",
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
    image:
      "https://img.weirdfish.co.uk/cdn-cgi/image/w=700,q=80,f=auto/original/136434.jpg",
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
    image:
      "https://img.weirdfish.co.uk/cdn-cgi/image/w=700,q=80,f=auto/original/133148.jpg",
    sizes: [
      { size: "S", inStock: false },
      { size: "M", inStock: false },
      { size: "L", inStock: true },
      { size: "XL", inStock: true },
    ],
  },
];
