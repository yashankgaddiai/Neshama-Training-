import { Mail, MapPin, Phone, MessageCircle, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-28 sm:pb-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-white">NESHAMA AI ENGINEERING</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Building industry-ready AI engineers who take ownership and deliver real outcomes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://wa.me/918143459888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors flex items-center justify-center text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="mailto:neshamatraining.info@gmail.com" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors flex items-center justify-center text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+918143459888" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors flex items-center justify-center text-white"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Program</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#blueprint" className="hover:text-secondary transition-colors">Blueprint</a></li>
              <li><a href="#roadmap" className="hover:text-secondary transition-colors">12-Week Roadmap</a></li>
              <li><a href="#curriculum" className="hover:text-secondary transition-colors">Curriculum</a></li>
              <li><a href="#projects" className="hover:text-secondary transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Career Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Career</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#career" className="hover:text-secondary transition-colors">Career Track</a></li>
              <li><a href="#roles" className="hover:text-secondary transition-colors">Roles</a></li>
              <li><a href="#fees" className="hover:text-secondary transition-colors">Fees</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details & Address */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Contact</h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-secondary shrink-0" />
                <a href="tel:+918143459888" className="hover:text-secondary transition-colors">+91 81434 59888</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-secondary shrink-0" />
                <a href="tel:+919550143619" className="hover:text-secondary transition-colors">+91 95501 43619</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-secondary shrink-0" />
                <a href="mailto:neshamatraining.info@gmail.com" className="hover:text-secondary transition-colors">neshamatraining.info@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={15} className="text-secondary shrink-0" />
                <span className="hover:text-secondary transition-colors">www.neshamatraining.com</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin size={15} className="text-secondary mt-1 shrink-0" />
                <span className="leading-relaxed text-xs text-white/60">
                  Neshama Training and Services Private Limited<br />
                  House No: 7-126/49, Plot No: 49, Ground Floor<br />
                  Near Sri Vashista Real Estate "Y" Junction<br />
                  Kuntloor Village, Abdullapurmet Mandal, Hayath Nagar<br />
                  Rangareddy District, Telangana - 501505
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Neshama Training and Services Private Limited. All rights reserved.</p>
          <p>Full-Stack AI Engineering · Python + MERN + GenAI</p>
        </div>
      </div>
    </footer>
  );
}
