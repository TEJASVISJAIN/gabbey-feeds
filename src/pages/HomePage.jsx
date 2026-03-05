import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Shield, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, heroLogoUrl, aboutFeatures } from '../data/products';

const highlights = [
  {
    icon: Beaker,
    title: 'High Protein & Fat',
    description:
      'Scientifically formulated with optimal 20-24% protein levels for maximum growth and yield.',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Shield,
    title: 'Disease Prevention',
    description:
      'Contains essential vitamins and B-complex to boost immunity and prevent metabolic disorders.',
    bgColor: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    icon: TrendingUp,
    title: 'Enhanced Productivity',
    description:
      'Roasted for high digestibility, increasing milk production and reproductive health.',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
];

const aboutStats = [
  { value: '24%', label: 'Max Protein' },
  { value: '4.5%', label: 'Healthy Fats' },
  { value: '10k+', label: 'Farmers Trusted' },
  { value: '100%', label: 'Natural Mix' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="hero-gradient min-h-[85vh] flex items-center px-4">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent font-semibold tracking-wide text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                PREMIUM QUALITY ANIMAL FEED
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                Empowering <br />
                <span className="text-accent">Dairy Farmers</span>
              </h1>

              <p className="text-xl text-slate-200 max-w-lg leading-relaxed">
                Manufacturing high-nutrition cattle feed to ensure healthy,
                productive, and profitable livestock for modern dairy farming.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/products"
                  className="bg-accent text-primary px-8 py-4 rounded-xl font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl inline-flex items-center gap-2"
                >
                  Explore Products <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#about"
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <img
                  src={heroLogoUrl}
                  alt="Featured Cattle Logo"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-bg-light border border-slate-100 transition-transform hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6`}
              >
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Specialized Feeds</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
              Tailored nutrition for every stage of your animal&apos;s lifecycle,
              from calves to high-yielding milking cows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative" id="about">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Committed to Quality, <br />
                <span className="text-accent">Dedicated to Farmers</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Sabbey Feeds has been a trusted partner for dairy farmers for
                decades. Our scientifically formulated products are designed to
                maximize the health and output of your livestock through premium
                ingredients and advanced manufacturing processes.
              </p>

              <div className="space-y-6">
                {aboutFeatures.map((feature) => (
                  <div key={feature.number} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center font-bold text-xl">
                      {feature.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-blue-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center"
                >
                  <div className="text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="gradient-bg rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10">
              Ready to Boost Your Farm?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of successful dairy farmers who trust Sabbey Feeds
              for premium animal nutrition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="tel:+919041460703"
                className="bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all inline-flex items-center justify-center gap-2"
              >
                Call: +91 90414-60703
              </a>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
