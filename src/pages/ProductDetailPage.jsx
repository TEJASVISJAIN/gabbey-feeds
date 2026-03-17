import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="pt-24 max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-bg-light min-h-screen">
      <section className="py-10 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-3"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all products
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              {product.name}
            </h1>
            <p className="text-slate-500 mt-1">{product.type}</p>
          </div>
          <div className="flex gap-3">
            <div className="w-16 h-16 rounded-full border-4 border-accent flex flex-col items-center justify-center text-center bg-white">
              <span className="text-xs font-bold leading-none">Prot.</span>
              <span className="text-sm font-black">{product.protein}</span>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-accent flex flex-col items-center justify-center text-center bg-white">
              <span className="text-xs font-bold leading-none">Fat</span>
              <span className="text-sm font-black">{product.fat}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-2xl border border-slate-100 p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={`${product.name} Bag`}
            className="h-72 object-contain"
          />
        </div>

        <div>
          <p className="text-slate-700 text-base leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">
                Recommended For
              </h2>
              <p className="text-slate-700">{product.recommended}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">
                Dosage
              </h2>
              <p className="text-slate-700 text-sm">{product.dosage}</p>
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Key Benefits
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

