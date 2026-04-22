import { Github, Twitter, Linkedin, Youtube, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-24 pb-32 px-8 rounded-t-[3rem] mt-32 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="text-2xl font-black text-secondary tracking-tight">
            Neshama Training
          </div>
          <p className="text-white/60 leading-relaxed text-sm">
            Empowering the next generation of AI Engineers through hands-on, project-based learning. Go from zero to shipping real AI products in 8 weeks.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#curriculum" className="hover:text-secondary transition-colors">Curriculum</a></li>
            <li><a href="#faq" className="hover:text-secondary transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-secondary" />
              <a href="mailto:neshamatraining.info@gmail.com" className="hover:text-secondary transition-colors">neshamatraining.info@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-secondary" />
              <a href="tel:+919550143619" className="hover:text-secondary transition-colors">+91 95501 43619</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-secondary" />
              <a href="https://wa.me/918143459888" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">+91 81434 59888 (WhatsApp)</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-secondary mt-1 flex-shrink-0" />
              <span className="leading-relaxed">
                Plot No: 49, Ground Floor, House No: 7-126/49<br />
                Kuntloor, Abdullapurmet, Hayath Nagar<br />
                Rangareddy, Telangana - 501505
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter/CTA */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Stay Updated</h4>
          <p className="text-sm text-white/60 mb-4">Get AI engineering tips and cohort updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-secondary transition-colors"
            />
            <button className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium uppercase tracking-widest">
        <div>© 2026 Neshama Training. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
