import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function SpecsPage() {
  return (
    <div className="pt-20 bg-bg-light min-h-screen">
      <section className="py-12 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Product Specifications
          </h1>
          <p className="text-blue-100 max-w-2xl text-lg">
            Detailed nutritional and usage specifications for each Sabbey Feeds
            product to help you choose the right feed for every stage.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="detailed"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

