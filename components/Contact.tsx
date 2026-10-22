'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';

interface ContactProps {
  selectedPlan: string;
}

// Canonical Official WhatsApp Icon SVG
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 448 512"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const Contact: React.FC<ContactProps> = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    objective: 'Business Website (From R1,999)',
    details: '',
  });

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        objective: selectedPlan,
      }));
    }
  }, [selectedPlan]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Website Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*WhatsApp:* ${formData.mobile}%0A*Package:* ${formData.objective}%0A*Notes:* ${formData.details || 'None'}`;
    window.open(`https://wa.me/27699751347?text=${message}`, '_blank');
  };

  const handleEmailSubmit = () => {
    const subject = `Website Inquiry: ${formData.objective} - ${formData.name || 'Client'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp / Mobile: ${formData.mobile}\nPackage: ${formData.objective}\n\nProject Notes:\n${formData.details || 'None'}`;
    window.location.href = `mailto:neo@steigeronline.co.za?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-slate-200/80 relative overflow-hidden bg-[#fbfaf7]"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest block mb-2 text-amber-600 font-bold">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-900">
              Let's Build Your Website.
            </h2>
            <p className="text-sm leading-relaxed mb-8 text-slate-600">
              Send us a message below. We will reply to your WhatsApp or email with a clear quote and timeline within 30 minutes.
            </p>

            <div className="space-y-4">
              {/* WhatsApp Us Directly with actual WhatsApp Logo */}
              <a
                href="https://wa.me/27699751347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#25D366] hover:shadow-md transition-all text-xs shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase block text-slate-500">
                    WhatsApp Us Directly
                  </span>
                  <span className="font-mono font-bold text-sm text-slate-900 group-hover:text-[#25D366] transition-colors">
                    +27 69 975 1347
                  </span>
                </div>
              </a>

              <a
                href="mailto:neo@steigeronline.co.za"
                className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-500 hover:shadow-md transition-all text-xs shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase block text-slate-500">
                    Email Us
                  </span>
                  <span className="font-mono font-bold text-sm text-slate-900 group-hover:text-amber-600 transition-colors">
                    neo@steigeronline.co.za
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 bg-white text-xs shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase block text-slate-500">
                    Location
                  </span>
                  <span className="font-mono text-slate-700">
                    Benoni, Johannesburg, South Africa
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleWhatsAppSubmit}
              className="p-8 rounded-2xl border border-slate-200/90 bg-white space-y-5 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase mb-1.5 text-slate-700 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="David Nkosi"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-xs transition-colors focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase mb-1.5 text-slate-700 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="david@company.co.za"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-xs transition-colors focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase mb-1.5 text-slate-700 font-semibold">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="+27 82 123 4567"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-xs transition-colors focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase mb-1.5 text-slate-700 font-semibold">
                    Selected Package
                  </label>
                  <select
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs transition-colors focus:outline-none focus:border-amber-500 focus:bg-white"
                  >
                    <option value="Landing Page">Landing Page (From R999)</option>
                    <option value="Business Website">Business Website (From R1,999)</option>
                    <option value="Custom Web App">Custom Web App (From R3,499)</option>
                    <option value="Online Store (E-Commerce)">Online Store / E-Commerce (From R3,999)</option>
                    <option value="Other / Not Sure Yet">Other / Not Sure Yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase mb-1.5 text-slate-700 font-semibold">
                  Tell Us About Your Project (Optional)
                </label>
                <textarea
                  name="details"
                  rows={3}
                  placeholder="What does your business do, or what would you like on your website?"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-xs transition-colors focus:outline-none focus:border-amber-500 focus:bg-white resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {/* Official WhatsApp Button with actual WhatsApp logo */}
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="py-3.5 px-6 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95"
                >
                  <Mail className="w-4 h-4 text-amber-600" />
                  <span>Send via Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
