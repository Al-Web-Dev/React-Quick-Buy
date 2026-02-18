import { ProductGrid } from "./components/ProductGrid";

export function PLPPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <h1 className="text-xl font-semibold mb-6">Products</h1>
      <ProductGrid />
    </main>
  );
}
