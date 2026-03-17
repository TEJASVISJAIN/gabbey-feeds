import { useState, useEffect, useRef, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const galleryImages = [
  // { src: '/images/71a86a27.jpeg', alt: 'Farm' },
  { src: '/images/IMG_3756.jpeg', alt: 'Product' },
  { src: '/images/IMG_3757.jpeg', alt: 'Feed' },
];

export default function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  const openImage = (image) => {
    setSelectedImage(image);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setSelectedImage(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.5, 0.5));
  const resetZoom = () => { setScale(1); setPosition({ x: 0, y: 0 }); };

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setScale((s) => {
      const delta = e.deltaY > 0 ? -0.2 : 0.2;
      return Math.min(Math.max(s + delta, 0.5), 5);
    });
  }, []);

  const handlePointerDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...position };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: posStart.current.x + (e.clientX - dragStart.current.x),
      y: posStart.current.y + (e.clientY - dragStart.current.y),
    });
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <div className="pt-20">
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
          onWheel={handleWheel}
        >
          {/* Controls */}
          <div className="absolute top-6 right-6 flex items-center gap-3 z-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={zoomIn} className="text-white hover:text-accent transition-colors cursor-pointer bg-white/10 rounded-full p-2" aria-label="Zoom in">
              <ZoomIn className="w-6 h-6" />
            </button>
            <button onClick={zoomOut} className="text-white hover:text-accent transition-colors cursor-pointer bg-white/10 rounded-full p-2" aria-label="Zoom out">
              <ZoomOut className="w-6 h-6" />
            </button>
            <button onClick={resetZoom} className="text-white hover:text-accent transition-colors cursor-pointer bg-white/10 rounded-full p-2" aria-label="Reset zoom">
              <RotateCcw className="w-6 h-6" />
            </button>
            <button onClick={closeModal} className="text-white hover:text-accent transition-colors cursor-pointer bg-white/10 rounded-full p-2" aria-label="Close">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Zoom hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm pointer-events-none">
            Scroll to zoom · Drag to pan · {Math.round(scale * 100)}%
          </div>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl select-none"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
              transition: isDragging ? 'none' : 'transform 0.2s ease',
              imageRendering: 'high-quality',
              willChange: 'transform',
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (scale <= 1) zoomIn();
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            draggable={false}
          />
        </div>
      )}

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
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="rounded-2xl overflow-hidden shadow-lg h-64 cursor-pointer"
              onClick={() => openImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
