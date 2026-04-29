import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';

interface ContactProps {
  selectedPlan: string;
}

const Contact: React.FC<ContactProps> = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    objective: 'New Web Platform',
    details: ''
  });

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, objective: selectedPlan }));
    }

    const handlePrefill = (e: CustomEvent) => {
      const { plan, details } = e.detail;
      setFormData(prev => ({
        ...prev,
        objective: plan || prev.objective,
        details: details || prev.details
      }));

      // Smooth scroll to contact section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('trigger-contact-prefill' as any, handlePrefill as any);
    return () => window.removeEventListener('trigger-contact-prefill' as any, handlePrefill as any);
  }, [selectedPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Mobile:* ${formData.mobile}%0A*Objective:* ${formData.objective}%0A*Details:* ${formData.details || 'No additional details provided.'}`;
    window.open(`https://wa.me/27699751347?text=${message}`, '_blank');
  };

  const handleEmailSubmit = () => {
    const subject = `Project Inquiry: ${formData.objective}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nObjective: ${formData.objective}\n\nDetails:\n${formData.details || 'No additional details provided.'}`;
    window.location.href = `mailto:neo@steigeronline.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden">
      {/* Footer background effects */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              GET IN <span className="text-neon-pink">TOUCH</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-transparent mb-8"></div>

            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Ready to grow your business online? We are accepting new projects. Let's build your digital presence together.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-pink border border-neon-pink/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Address</h4>
                  <p className="text-slate-400 text-sm">Benoni, Johannesburg, SA (GMT+2)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-pink border border-neon-pink/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <a href="mailto:neo@steigeronline.co.za" className="text-slate-400 text-sm hover:text-neon-pink transition-colors">neo@steigeronline.co.za</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-pink border border-neon-pink/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Line</h4>
                  <a href="tel:+27699751347" className="text-slate-400 text-sm hover:text-neon-pink transition-colors">+27 69 975 1347</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-white/10 relative">
            <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-neon-pink/20 to-transparent blur-xl"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                  placeholder="+27 00 000 0000"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                Objective <span className="text-red-500">*</span>
              </label>
              <select
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-pink focus:outline-none transition-colors appearance-none"
              >
                <option>New Web Platform</option>
                <option>Landing Page</option>
                <option>Business Website</option>
                <option>E-Commerce</option>
                <option>Enterprise E-Commerce</option>
                <option>Custom Web App</option>
                <option>Rapid Development</option>
                <option>UI/UX Overhaul</option>
              </select>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-xs uppercase tracking-widest text-slate-500 font-bold flex justify-between">
                <span>Details</span>
                <span className="text-[10px] lowercase font-normal opacity-60">(optional)</span>
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                placeholder="Tell us about your vision..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                type="submit" 
                className="w-full py-4 bg-[#25D366] text-white font-bold uppercase tracking-wider rounded-lg hover:bg-[#25D366]/90 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .011 5.403.008 12.039c0 2.12.541 4.189 1.57 6.039L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.033-5.397 12.036-12.037.001-3.218-1.252-6.243-3.528-8.517"/>
                </svg>
                WhatsApp Us
              </button>
              <button 
                type="button"
                onClick={handleEmailSubmit}
                className="w-full py-4 bg-neon-pink text-white font-bold uppercase tracking-wider rounded-lg hover:bg-neon-pink/90 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Email
              </button>
            </div>

          </form>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
          <p>© 2025 Steiger.Online. All Systems Operational.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;