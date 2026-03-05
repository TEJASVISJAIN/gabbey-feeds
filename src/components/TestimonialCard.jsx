import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-accent text-slate-900 font-bold px-4 py-1 rounded-full text-sm flex items-center gap-1">
          {testimonial.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-grow">
        <div className="flex gap-1 text-accent mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent" />
          ))}
        </div>

        <p className="text-slate-600 italic mb-6 leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
            {testimonial.initials}
          </div>
          <div>
            <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
            <p className="text-sm text-slate-500">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
