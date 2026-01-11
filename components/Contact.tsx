import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

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
  }, [selectedPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Mobile:* ${formData.mobile}%0A*Objective:* ${formData.objective}%0A*Details:* ${formData.details}`;
    window.open(`https://wa.me/27699751347?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden">
      {/* Footer background effects */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              INITIATE <span className="text-neon-pink">SEQUENCE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-transparent mb-8"></div>

            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Ready to disrupt your industry? We are accepting new ambitious projects.
              Let's engineer the future of your digital presence together.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-pink border border-neon-pink/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">HQ Coordinates</h4>
                  <p className="text-slate-400 text-sm">Benoni, Johannesburg, SA (GMT+2)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-pink border border-neon-pink/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Encrypted Channel</h4>
                  <a href="mailto:onlinesteiger@gmail.com" className="text-slate-400 text-sm hover:text-neon-pink transition-colors">onlinesteiger@gmail.com</a>
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
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Name</label>
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
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Email</label>
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
              <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Objective</label>
              <select
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-pink focus:outline-none transition-colors appearance-none"
              >
                <option>New Web Platform</option>
                <option>Landing Page</option>
                <option>Standard Business</option>
                <option>E-Commerce (Start)</option>
                <option>E-Commerce (Pro)</option>
                <option>Custom Web App</option>
                <option>Mobile Application</option>
                <option>AI Integration</option>
                <option>UI/UX Overhaul</option>
              </select>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                placeholder="Tell us about your vision..."
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-neon-pink text-white font-bold uppercase tracking-wider rounded-lg hover:bg-neon-pink/90 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Transmit Data
            </button>

          </form>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} JSH Agency. All Systems Operational.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;