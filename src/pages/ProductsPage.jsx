import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-primary py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Empowering Dairy Farmers
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Providing high-quality, scientifically formulated balanced cattle
            feed for healthy and productive animals.
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Product Catalog
            </span>
            <h3 className="text-3xl font-bold text-slate-900">
              Our Specialized Feed Range
            </h3>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-primary">
              Balanced Formula
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
              High Protein
            </span>
          </div>
        </div>

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

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
          From Our Farm
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <img
              src="/images/71a86a27.jpeg"
              alt="Farm"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <img
              src="/images/IMG_3756.jpeg"
              alt="Product"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <img
              src="/images/IMG_3757.jpeg"
              alt="Feed"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
