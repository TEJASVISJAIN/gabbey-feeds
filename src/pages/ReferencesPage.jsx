import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials, stats } from '../data/products';

export default function ReferencesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
              Customer References
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Empowering Dairy Farmers, Ensuring{' '}
              <span className="text-primary">Healthy Livestock</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10">
              Real results from farmers across the region who have transformed
              their dairy business with Sabbey Feeds&apos; scientifically
              formulated nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center"
            >
              <div className="text-3xl font-extrabold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="gradient-bg rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10">
            Ready to Boost Your Farm&apos;s Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
            Get a personalized feed consultation from Sabbey Feeds experts today
            and join thousands of successful farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="tel:+919041460703"
              className="bg-accent text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Expert: +91 90414-60703
            </a>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
