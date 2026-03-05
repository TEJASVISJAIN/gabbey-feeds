import { useState } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  Heart,
} from 'lucide-react';
import { contactInfo } from '../data/products';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Product Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Empowering Dairy Farmers
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ensuring healthy &amp; productive animals with our scientifically
            formulated feeds. Get in touch for inquiries or expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Mail className="w-24 h-24" />
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Send an Inquiry
            </h2>

            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-600">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="+91 XXXX-XXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  >
                    <option>Product Inquiry</option>
                    <option>Distributorship Request</option>
                    <option>Feed Management Advice</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* GM Card */}
              <div className="bg-primary text-white p-6 rounded-2xl shadow-lg flex items-start gap-4 transform hover:-translate-y-1 transition-transform">
                <div className="bg-white/20 p-3 rounded-xl">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-80 tracking-widest">
                    General Manager
                  </p>
                  <h3 className="text-xl font-bold">{contactInfo.name}</h3>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 flex items-start gap-4 transform hover:-translate-y-1 transition-transform">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Call Us
                  </p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-lg font-bold"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 flex items-start gap-4 transform hover:-translate-y-1 transition-transform md:col-span-2">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Email &amp; Website
                  </p>
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg font-bold hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                    <span className="text-lg font-bold text-slate-400 hidden sm:inline">|</span>
                    <span className="text-lg font-bold flex items-center gap-1">
                      <Globe className="w-4 h-4" /> {contactInfo.website}
                    </span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 flex items-start gap-4 transform hover:-translate-y-1 transition-transform md:col-span-2">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Office Address
                  </p>
                  <p className="text-lg font-bold leading-tight">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Badge */}
            <div className="relative bg-accent/10 rounded-2xl p-8 border-2 border-dashed border-accent/30 flex items-center justify-between overflow-hidden">
              <div className="max-w-[60%]">
                <h3 className="font-serif text-2xl text-primary mb-2">
                  Quality You Can Trust
                </h3>
                <p className="text-sm text-slate-600">
                  Serving the dairy industry since years with excellence in
                  animal nutrition.
                </p>
              </div>
              <div className="mascot-float">
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <Heart className="w-12 h-12 text-white" />
                  <div className="absolute -top-2 -right-2 bg-accent text-primary px-2 py-1 rounded-full text-[10px] font-bold shadow-md">
                    SABBEY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658195536!2d75.78663245464977!3d30.90047363408019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8374627f37a7%3A0x4c11bc023447990!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sabbey Feeds Location"
          />
        </div>
      </main>
    </div>
  );
}
