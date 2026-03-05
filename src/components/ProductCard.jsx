import { CheckCircle } from 'lucide-react';

export default function ProductCard({ product, variant = 'home' }) {
  if (variant === 'detailed') {
    return (
      <div className="product-card bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="p-6 flex justify-between items-start border-b border-slate-100 bg-slate-50">
          <div>
            <h4 className="text-2xl font-bold text-primary">{product.name}</h4>
            <p className="text-slate-500 font-medium">{product.type}</p>
          </div>
          <div className="flex gap-2">
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

        {/* Body */}
        <div className="p-6 flex-grow">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={product.image}
                alt={`${product.name} Bag`}
                className="h-48 object-contain"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="mb-4">
                <span className="font-bold text-slate-900 text-sm uppercase">
                  Recommended for:
                </span>
                <p className="text-slate-600">{product.recommended}</p>
              </div>
              <div className="mb-4">
                <span className="font-bold text-slate-900 text-sm uppercase">
                  Dosage:
                </span>
                <p className="text-slate-600 text-sm">{product.dosage}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-primary" /> Benefits
            </h5>
            <ul className="text-sm text-slate-600 space-y-1">
              {product.benefits.map((benefit, i) => (
                <li key={i}>• {benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Home page card variant
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col product-card">
      <div className="relative h-64 mb-6 overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain product-img transition-transform duration-500"
        />
        <div
          className={`absolute top-4 right-4 ${product.stageColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
        >
          {product.stage}
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex gap-2 mb-3">
          <span className="bg-blue-50 text-primary text-[10px] font-bold px-2 py-1 rounded border border-primary/20">
            PROTEIN {product.protein}
          </span>
          <span className="bg-yellow-50 text-orange-600 text-[10px] font-bold px-2 py-1 rounded border border-accent/20">
            FAT {product.fat}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-slate-500 text-sm mb-4">{product.description}</p>
        <ul className="space-y-2 mb-6">
          {product.benefits.slice(0, 2).map((benefit, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full py-3 bg-slate-100 hover:bg-primary hover:text-white transition-all rounded-xl font-bold cursor-pointer">
        View Specs
      </button>
    </div>
  );
}
